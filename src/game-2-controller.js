import React from 'react';
import {ProgressBar,Modal,Button, Container, Row,Col} from 'react-bootstrap';

// Initialize all audio files used in the game
let audio_c = new Audio('../sound/res_c_s.wav');
let audio_w = new Audio('../sound/res_w_s.wav');
let audio_win = new Audio('../sound/win.wav');
let dice_roll = new Audio('../sound/Dices.wav');
let audio_loose = new Audio('../sound/Lose_short.wav');

// This class renders Plates and the food in each plate.
// Additionally, pawns for P1 and P2 are rendered above and
// Below the plates respectively which are hidden by default
class Plates extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    renderp2(){
        if(this.props.g_mode=='pvc'){
            return(
                <div id={'p2'+this.props.id} className='p-char2' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                </div>
            );
        }
        return(
            <div id={'p2'+this.props.id} className='p-char2' style={{backgroundImage:'url(../images/Pieces/Astronaut.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
            </div>
        );
    }
    render(){
        if(this.props.type=='h')
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food' style={{backgroundImage:'url(../images/Foods/Healthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                    <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                    {this.renderp2()}
                </div>
            );
        else if(this.props.type=='u'){
                // console.log('u');
                // console.log('url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)');
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food'  style={{backgroundImage:'url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                    <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                    {this.renderp2()}
                </div>
            );
        }
        else {
            // console.log('r');
            return(
            <div id={'plate'+this.props.id}>
                <div className='food' style={{backgroundImage:'url(../images/Random-events/r1.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                </div>
                <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                </div>
                {this.renderp2()}
            </div>
            );
        }
    }
}

class Game2 extends React.Component
{
    constructor(props){
        super(props);
        let h_foods=[];
        let u_foods=[];
        let rnd;
        // Use RNG to pick 4 random numbers between 
        // 0 - 27 and push them to h_foods array
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*28);            
            while(h_foods.indexOf(rnd)!=-1){
                rnd = Math.floor(Math.random()*28);                
            }
                
            h_foods.push(rnd);
        }
        // Use RNG to pick 4 random numbers between 
        // 0 - 20 and push them to h_foods array        
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*21);
            while(u_foods.indexOf(rnd)!=-1)
            {
                rnd = Math.floor(Math.random()*21);
            }
                
            u_foods.push(rnd);
        }
        // init new arrays that store JSON onjects with the type of food and 
        // img number from h_food array and u_food array
        let h_foods_t=[];
        let u_foods_t=[];
        h_foods.forEach(val => {
            h_foods_t.push({type:'h', val:val})
        });
        u_foods.forEach(val => {
            u_foods_t.push({type:'u', val:val})
        });
        // Create JSON array for random event
        let r_events_t=[{type:'r',val:1}];
        // Concat the 3 arrays (4 healthy foods, 4 unhealthy foods and 1 random event)
        // To form the 9 items used on the board for the current game.
        this.board= h_foods_t.concat(u_foods_t,r_events_t);
        // Shuffle the array 
        for (let i = this.board.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
        }
        this.state= {g_state:'start', disp_modal:true, game_mode:'pvc', p1_loc:0, 
                     p2_loc:0, p1_h:20, p2_h:20, active:'p1', finish:'none', game_msg:'Player 1 Turn'};
        this.roll1 = this.roll1.bind(this);  
        this.updateScore = this.updateScore.bind(this);   
        this.restart = this.restart.bind(this);   
    }
    handleClose() {
        this.setState({ disp_modal:false});
    }
    // Manipulate DOM to clear the pawns displayed and set state to begining of the game
    restart(){
        this.clearpawns();
        this.setState({g_state:'start', disp_modal:true, game_mode:'pvc', p1_loc:0, 
        p2_loc:0, p1_h:20, p2_h:20, active:'p1', finish:'none', game_msg:'Player 1 Turn'});
    }

    // Function that simulates pawn movement.
    // Manipulate dom to clear current location of pawn (depending on who's turn it was)
    // calculate destination by adding rolled number to the current location.
    // If destination is within the 9 board items, use setTimeout to trigger -> 
    // DOM manipulation to dsiplay the pawn on destination plate -> updateScore ->
    // setState to reflect the updated score.
    // If game mode is PVC, use setTimeout to trigger -> DOM manipulation to display
    // game messages -> roll2. 
    // In all cases, trigger DOM Manipulation to change the diplay of go and stay icons
    go(){        
        let dest = parseInt(this.state.rolled_num);
        // console.log('f',dest);
        if(this.state.game_mode=='pvc'){            
            if(this.state.p1_loc==0)
                document.getElementById('p1-start').style.display='none';
            else if (this.state.p1_loc==1)
                document.getElementById('p11').style.display='none';
            else if(this.state.p1_loc==2)
                document.getElementById('p12').style.display='none';
            else if (this.state.p1_loc==3)
                document.getElementById('p13').style.display='none';
            else if(this.state.p1_loc==4)
                document.getElementById('p14').style.display='none';
            else if (this.state.p1_loc==5)
                document.getElementById('p15').style.display='none';
            else if(this.state.p1_loc==6)
                document.getElementById('p16').style.display='none';
            else if (this.state.p1_loc==7)
                document.getElementById('p17').style.display='none';
            else if(this.state.p1_loc==8)
                document.getElementById('p18').style.display='none';
            else 
                document.getElementById('p19').style.display='none';
            dest+=parseInt(this.state.p1_loc);
            // console.log(dest);
            if(dest<=9){                
                setTimeout((d)=>{
                                document.getElementById('p1'+d).style.display='block';}
                            ,300,dest.toString());
                    let score = this.updateScore(dest,true);
                // this.setState({g_state:'roll',p1_loc:dest,p1_h:score}); 
                // console.log(document.getElementById('p1-health').childNodes[0].childNodes[0]);
                // document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=score+'%';
                setTimeout(()=>{
                    document.getElementById('game-2-msg').style.display='none';
                    document.getElementById('game-2-comp-msg').style.display='block';
                },500);
                document.getElementById('yes').style.display='none';
                document.getElementById('no').style.display='none';
                document.getElementById('stay').style.display='none';
                document.getElementById('move').style.display='none';
                setTimeout(this.roll2.bind(this),1800,dest,score);                
            }
            else    
                this.setState({finish:'p1',g_state:'g_over'});
        }
        else{
            if(this.state.active=='p1'){
                if(this.state.p1_loc==0)
                    document.getElementById('p1-start').style.display='none';
                else if (this.state.p1_loc==1)
                    document.getElementById('p11').style.display='none';
                else if(this.state.p1_loc==2)
                    document.getElementById('p12').style.display='none';
                else if (this.state.p1_loc==3)
                    document.getElementById('p13').style.display='none';
                else if(this.state.p1_loc==4)
                    document.getElementById('p14').style.display='none';
                else if (this.state.p1_loc==5)
                    document.getElementById('p15').style.display='none';
                else if(this.state.p1_loc==6)
                    document.getElementById('p16').style.display='none';
                else if (this.state.p1_loc==7)
                    document.getElementById('p17').style.display='none';
                else if(this.state.p1_loc==8)
                    document.getElementById('p18').style.display='none';
                else 
                    document.getElementById('p19').style.display='none';
                dest+=parseInt(this.state.p1_loc);
                    // console.log(dest);
                    if(dest<=9){                
                        setTimeout((d)=>{
                                        document.getElementById('p1'+d).style.display='block';}
                                    ,300,dest.toString());
                            let score = this.updateScore(dest,true);
                    this.setState({p1_h:score,active:'p2',game_msg:'Player 2 Turn',g_state:'roll',p1_loc:dest})
                }
                else
                    this.setState({finish:'p1',g_state:'g_over'});                
            }
            else{
                if(this.state.p2_loc==0)
                    document.getElementById('p2-start').style.display='none';
                else if (this.state.p2_loc==1)
                    document.getElementById('p21').style.display='none';
                else if(this.state.p2_loc==2)
                    document.getElementById('p22').style.display='none';
                else if (this.state.p2_loc==3)
                    document.getElementById('p23').style.display='none';
                else if(this.state.p2_loc==4)
                    document.getElementById('p24').style.display='none';
                else if (this.state.p2_loc==5)
                    document.getElementById('p25').style.display='none';
                else if(this.state.p2_loc==6)
                    document.getElementById('p26').style.display='none';
                else if (this.state.p2_loc==7)
                    document.getElementById('p27').style.display='none';
                else if(this.state.p2_loc==8)
                    document.getElementById('p28').style.display='none';
                else 
                    document.getElementById('p29').style.display='none';
                dest+=parseInt(this.state.p2_loc);
                    // console.log(dest);
                    if(dest<=9){                
                        setTimeout((d)=>{
                                        document.getElementById('p2'+d).style.display='block';}
                                    ,300,dest.toString());
                            let score = this.updateScore(dest,false);
                    this.setState({p2_h:score,active:'p1',game_msg:'Player 1 Turn',g_state:'roll',p2_loc:dest})
                }
                else
                    this.setState({finish:'p2',g_state:'g_over'});
            }
        }
    }
    // Function that manipulates DOM to hide all pawns displayed on plates
    clearpawns(){
        for (let i=1;i<3;i++){
            for(let j=1;j<10;j++){
                document.getElementById('p'+i.toString()+j.toString()).style.display='none'
            }
        }        
        document.getElementById('game-2-comp-msg').style.display='none';
        document.getElementById('game-2-comp-stay-msg').style.display='none';
        document.getElementById('game-2-comp-move-msg').style.display='none';
        document.getElementById('game-2-msg').style.display='block';
        document.getElementById('p1-start').style.display='block';
        document.getElementById('p2-start').style.display='block';
    }

    // Function that simulates the coputer's decision to stay or move
    simulateComp(d,loc,score){
        let rolledVal = d[d.length-1];
        // Use RNG to decide wheather to move or stay        
        if(Math.random()>.75){
            // if staying, Manipulate DOM to change game message
            document.getElementById('game-2-comp-msg').style.display='none';
            document.getElementById('game-2-comp-stay-msg').style.display='block';
            
            setTimeout(()=>{
                            document.getElementById('game-2-comp-stay-msg').style.display='none';
                            document.getElementById('game-2-msg').style.display='block';
                            },1500);
            this.setState({p1_h:score,p1_loc:loc,g_state:'roll'});
        }            
        else{
            // if moving, clear current pawn
            if(this.state.p2_loc==0)
                document.getElementById('p2-start').style.display='none';
            else if (this.state.p2_loc==1)
                document.getElementById('p21').style.display='none';
            else if(this.state.p2_loc==2)
                document.getElementById('p22').style.display='none';
            else if (this.state.p2_loc==3)
                document.getElementById('p23').style.display='none';
            else if(this.state.p2_loc==4)
                document.getElementById('p24').style.display='none';
            else if (this.state.p2_loc==5)
                document.getElementById('p25').style.display='none';
            else if(this.state.p2_loc==6)
                document.getElementById('p26').style.display='none';
            else if (this.state.p2_loc==7)
                document.getElementById('p27').style.display='none';
            else if(this.state.p2_loc==8)
                document.getElementById('p28').style.display='none';
            else 
                document.getElementById('p29').style.display='none';
            let p2_dest=parseInt(this.state.p2_loc)+parseInt(rolledVal);
            let p2_score; 
            // console.log(dest);            
            if(p2_dest<=9){
                // if dest is within the 9 boards of the game, update score
                p2_score = this.updateScore(p2_dest,false); 
                //setTimeout to simulate pawn movement and change game message -> endTurn                
                setTimeout((d)=>{
                                document.getElementById('p2'+d).style.display='block';
                                document.getElementById('game-2-comp-msg').style.display='none';
                                document.getElementById('game-2-comp-move-msg').style.display='block';
                                }
                            ,300,p2_dest.toString());
                setTimeout(this.endTurn.bind(this),1200,score,p2_score,loc,p2_dest);
                }
            else    
            this.setState({finish:'comp',g_state:'g_over',p1_h:score,p1_loc:loc});
        }
    }

    // The final method in computer's Turn
    // Change game message and setState with new scores, game message, state and active player
    endTurn(np1_h,np2_h,np1_dest,np2_dest){
        // console.log('np1_h',np1_h);
        // console.log('np2_h',np2_h);
        // console.log('np1_dest',np1_h);
        document.getElementById('game-2-comp-move-msg').style.display='none';
        document.getElementById('game-2-msg').style.display='block';
        this.setState({p1_h:np1_h, p1_loc:np1_dest, p2_loc:np2_dest, p2_h:np2_h, g_state:'roll',game_msg:'Player 1 Turn'});
    }
        
    // Function triggers change of plyaers turn
    stay(){
        if(this.state.game_mode=='pvc'){
            document.getElementById('game-2-msg').style.display='none';
            setTimeout(()=>{
                document.getElementById('game-2-msg').style.display='none';
                document.getElementById('game-2-comp-msg').style.display='block';
            },500);
            setTimeout(this.roll2.bind(this),1000,this.state.p1_loc,this.state.p1_h);
            this.setState({g_state:'roll'});            
        }
        else{
            if(this.state.active=='p1')
                this.setState({game_msg:'Player 2 turn',active:'p2',g_state:'roll'});
            else
                this.setState({game_msg:'Player 1 turn',active:'p1',g_state:'roll'});
        }
        
    }

    // Function that calculates new scores,
    // params - loc -> destination location; 
    // isP1 -> bool value which indicates which player's score is to be updated

    updateScore(loc,isP1){
        // console.log('updt '+this.state.p1_h,this.state.p2_h);       
        if(isP1){
            // if player1, depending on food type in destinatopn plate,
            // calculate the new score and manipulate DOM to update the health bar
            let type = this.board[parseInt(loc)-1].type;            
            if(type=='h'){                
                audio_c.play();
                document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)+20).toString()+'%';
                return(parseInt(this.state.p1_h)+20);
            }
                
            else if(type=='u')
            {
                if(this.state.p1_h>0)
                {                    
                    audio_w.play();
                    document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)-20).toString()+'%';
                    return(parseInt(this.state.p1_h)-20);
                }                    
                else return(this.state.p1_h); 
            }
            else{
                let rnd = Math.random();
                if(rnd<0.25){
                    document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)+20).toString()+'%';
                    alert('You got 20 points');
                    return(parseInt(this.state.p1_h)+20);                    
                }
                else if(rnd>=0.25 && rnd<0.5){
                    document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)+10).toString()+'%';
                    alert('You got 10 points');
                    return(parseInt(this.state.p1_h)+10); 
                }
                else if(rnd>=0.5 && rnd<0.75){
                    document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)-10).toString()+'%';
                    alert('You lost 10 points');
                    return(parseInt(this.state.p1_h)-10); 
                }
                document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)-20).toString()+'%';
                alert('You lost 20 points');
                return(parseInt(this.state.p1_h)-20);
            }
        }
        else{
            // if player 2 do the same as above but for player 2 score and health bar
            let type = this.board[parseInt(loc)-1].type;            
            if(type=='h')
            {
                // console.log('up p2-h',parseInt(this.state.p2_h)+10,);
                audio_c.play();
                document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)+20).toString()+'%';
                return(parseInt(this.state.p2_h)+20);
            }
                
            else if(type=='u')
            {
                if(this.state.p2_h>0)
                {
                    // console.log('up p2-u',parseInt(this.state.p2_h)-10,);
                    audio_w.play();
                    document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)-20).toString()+'%';
                    return(parseInt(this.state.p2_h)-20);
                }                    
                else return(this.state.p2_h); 
            }
            else
            {
                let rnd = Math.random();
                if(rnd<0.25){
                    document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)+20).toString()+'%';
                    this.state.game_mode=='pvp'? alert('You got 20 points') :alert('Computer got 20 points');
                    return(parseInt(this.state.p2_h)+20);                    
                }
                else if(rnd>=0.25 && rnd<0.5){
                    document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)+10).toString()+'%';
                    this.state.game_mode=='pvp'? alert('You got 10 points') :alert('Computer got 10 points');
                    return(parseInt(this.state.p2_h)+10); 
                }
                else if(rnd>=0.5 && rnd<0.75){
                    document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)-10).toString()+'%';
                    this.state.game_mode=='pvp'? alert('You lost 10 points') :alert('Computer lost 10 points');
                    return(parseInt(this.state.p2_h)-10); 
                }
                document.getElementById('p2-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p2_h)-20).toString()+'%';
                this.state.game_mode=='pvp'? alert('You lost 20 points') :alert('Computer lost 20 points');
                return(parseInt(this.state.p2_h)-20);
            }
                 
        }
    }

    //Function to trigger change in game mode
    // param mode -> game mode
    modeSelect(mode){
        this.setState({game_mode:mode,disp_modal:false});        
    }

    // Function to get the rolled number and update state
    // param d -> number rolled on the dice
    getRolled(d){
        // console.log(parseInt(d[d.length-1]));
        this.setState({g_state:'decide',rolled_num:parseInt(d[d.length-1])});
    }

    // Function that simulates the roll of dice
    roll1(){
        if(this.state.g_state=='start' || this.state.g_state =='roll'){
            let rnd = Math.random();
            // RNG to choose which number is rolled
            let choice;
            if (rnd<0.33)
                choice='dice1';
            else if(rnd>=0.33 && rnd <=0.66)
                choice='dice2';
            else
                choice='dice3';
            let d1=document.getElementById('dice1');
            let d2=document.getElementById('dice2');
            let d3=document.getElementById('dice3');
            // Manipulate DOM to hide the 3 dice images
            d1.style.display='none';
            d2.style.display='none';
            d3.style.display='none';
            // Manipulate DOm to display gif that simulates dice roll
            document.getElementById('dice-gif').style.display='block';
            dice_roll.play();
            // console.log(document.getElementById('dice-gif').style.display);
            // setTimeout to hide gif and display the dice whose number was drawn by the RNG
            setTimeout((d)=>{            
                document.getElementById('dice-gif').style.display='none';
                dice_roll.play();
                document.getElementById(d).style.display='block';
            },1200,choice);
            //setTimeout to trigger getRolled with the rolled number
            setTimeout(this.getRolled.bind(this),1300,choice);
        }
        
    }

    // Same functionality as roll1, but additionally use setTimeout to trigger simulateComp (used when computer rolls the dice)
    roll2(loc,score){
        let rnd = Math.random();
        let choice;
        if (rnd<0.33)
            choice='dice1';
        else if(rnd>=0.33 && rnd <=0.66)
            choice='dice2';
        else
            choice='dice3';
        let d1=document.getElementById('dice1');
        let d2=document.getElementById('dice2');
        let d3=document.getElementById('dice3');
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        document.getElementById('dice-gif').style.display='block';
        dice_roll.play();
        // console.log(document.getElementById('dice-gif').style.display);
        setTimeout((d)=>{            
            document.getElementById('dice-gif').style.display='none';
            document.getElementById(d).style.display='block';
        },1200,choice);
        setTimeout(this.simulateComp.bind(this),1800,choice,loc,score);        
    }

    // Function that displays the pawn of the player (who passed the board) 
    // next to the end flag when the game is over
    renderGameOver(){
        if(this.state.finish=='p1'){
            return(
                <div id='end'>
                    <div className='food' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        }
        else if(this.state.finish=='comp'){
            return(
                <div id='end'>
                    <div className='food' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
                );
        }
        else if(this.state.finish=='p2')
            return(
                <div id='end'>
                    <div className='food' style={{backgroundImage:'url(../images/Pieces/Astronaut.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
            
    }

    //Function that renders player 1 char sprite at the starting position
    renderp1char(){
        return(
            <div id='p1-start' >
                <div id='p1-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                </div>
            </div>
        );
    }
    //Function that renders player 2 char sprite at the starting position
    renderp2char(){
        if(this.state.game_mode=='pvc'){
            return(
                <div id='p2-start' >
                    <div id='p2-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        }
        else
            return(
                <div id='p2-start' >
                    <div id='p2-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Astronaut.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        
    }
    // Function that displays the 2 choice buttons
    renderChoice(){
        if(this.state.g_state=='decide')
            return(
                <div>
                    <div id='yes' onClick={this.go.bind(this)}>
                    </div>
                    <div id='move'>Move</div> 
                    <div id='stay'>Stay</div>                    
                    <div id='no' onClick={this.stay.bind(this)}>
                    </div>
                </div>
                
            );
        else
            return(<div></div>);
    }

    // Function that displays the message click dice
    renderDiceRoll(){
        if(this.state.g_state=='start'||this.state.g_state=='roll')
            return(<div id='dice-roll'>Click Dice</div>);
    }

    // Function that displays the game messages
    renderGameMessages(){
        return(
            <div id='game-2-msg-wrapper'>
                <div id='game-2-msg'>
                    <strong style={{color:'white',textShadow:'3px 3px #333'}}>{this.state.game_msg}</strong>
                </div>
                <div id='game-2-comp-msg'>
                <strong style={{color:'white',textShadow:'3px 3px #333'}}>Computer's Turn</strong> 
                </div>
                <div id='game-2-comp-move-msg' > <strong style={{color:'white',textShadow:'3px 3px #333'}}>Computer choose to move</strong> 
                </div>
                <div id='game-2-comp-stay-msg' > <strong style={{color:'white',textShadow:'3px 3px #333'}}>Computer choose to Stay</strong> 
                </div>                
            </div>
        );
    }
    // Function that renders the plates and the food within the plates
    renderPlates(){
        const board_items = this.board.map((obj)=><Plates g_mode={this.state.game_mode} key={obj.type+obj.val} val={obj.val} type={obj.type} id={this.board.indexOf(obj)+1}/>);        
        return(
            <div>
                {board_items}
            </div>
            
        );        
    }
    // Function that displays the overlay
    renderOverlay(){
        if(this.state.finish!='none'){
            if(this.state.p1_h>this.state.p2_h){
                audio_win.play();
                return(
                    <div id='overlay' className='overlay-msg'>
                        <div id='win-scr-row-1' >
                            <div>
                                <h1 style={{color:'white'}}>
                                    Player 1 Wins
                                </h1>
                            </div>                            
                            <div>
                                <img  className='win-img' src='../images/Pieces/Kid_win.png' />
                            </div>
                            
                        </div>
                        <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                            <img className='restart-button' src='../images/sprites/replay_button.png' onClick={()=>{window.location.href='/game-2'}}></img>
                            <img className='back-button' src='../images/sprites/exit_button.png' onClick={()=>{window.location.href='/games'}}></img>
                        </div>
                    </div>
                );
            }
            else if(this.state.p1_h<this.state.p2_h){
                if(this.state.game_mode=='pvc'){
                    audio_loose.play();
                    return(
                        <div id='overlay' className='overlay-msg'>
                            <div id='win-scr-row-1' >
                            <div>
                                <h1 style={{color:'white',margin:'0px'}}>
                                    Computer Wins
                                </h1>
                            </div>
                                <div>
                                    <img className='win-img' src='../images/Pieces/Robot_win.png' />
                                </div>
                                
                            </div>
                            <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                                <img className='restart-button' src='../images/sprites/replay_button.png' onClick={()=>{window.location.href='/game-2'}}></img>
                                <img className='back-button' src='../images/sprites/exit_button.png' onClick={()=>{window.location.href='/games'}}></img>
                            </div>
                        </div>
                    );
                }
                else{
                    audio_win.play();
                    return(
                        <div id='overlay' className='overlay-msg'>
                            <div id='win-scr-row-1' >
                            <div>
                                <h1 style={{color:'white',margin:'0px'}}>
                                    Player 2 Wins
                                </h1>
                            </div>
                                <div>
                                    <img  className='win-img' src='../images/Pieces/Astronaut_win.png' />
                                </div>
                                
                            </div>
                            <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                                <img className='restart-button' src='../images/sprites/replay_button.png' onClick={()=>{window.location.href='/game-2'}}></img>
                                <img className='back-button' src='../images/sprites/exit_button.png' onClick={()=>{window.location.href='/games'}}></img>
                            </div>
                        </div>
                    );
                }
            }
            else{
                return(
                    <div id='overlay' className='overlay-msg'>
                        <div id='win-scr-row-1' >
                            <h1 style={{color:'white',margin:'px'}}>
                                Scores Tie 
                            </h1>                            
                        </div>
                        <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                            <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart}></img>
                            <img className='back-button' src='../images/sprites/exit_button.png' onClick={()=>{window.location.href='/games'}}></img>
                        </div>
                    </div>
                );
            }
            // return(
            //     <div id='overlay' className='overlay-msg' hidden>

            //     </div>
            // );
        }
        else
            return(<div></div>);
            
    }
    // Fuction that dsiplays player 2 image above the health bar
    renderp2head(){
        if(this.state.game_mode=='pvc'){
            return(<div id='p2char'></div>);            
        }
        else if(this.state.game_mode=='pvp')
            return(<div id='p2p'></div>);
        return(<div></div>);
    }

    render(){
        // console.log('rndr '+this.state.p1_h,this.state.p2_h);
        return(
            <div className='game-2-area'>                
                <Modal show={this.state.disp_modal} onHide={this.handleClose.bind(this)} centered>
                    <Modal.Header style={{backgroundColor:'rgb(97, 114, 123)',color:'white',borderBottom:'1px solid #36474f'}} closeButton>
                        <Modal.Title>Choose Game Mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor:'rgb(97, 114, 123)',color:'white'}}>                                                       
                        Play against the Computer or a Friend                                                          
                    </Modal.Body>
                    <Modal.Footer style={{textAlign:'center' , backgroundColor:'rgb(97, 114, 123)',color:'white',borderTop:'1px solid #36474f'}}>
                    <Container>                            
                            <Row className="justify-content-md-center">
                                <Col md={12} xs={12} sm={12} lg={12}>
                                    <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="primary" onClick={this.modeSelect.bind(this,'pvp')}>
                                        Multiplayer
                                    </Button>
                                    <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="info" onClick={this.modeSelect.bind(this,'pvc')}>
                                        Singe Player
                                    </Button>
                                </Col>
                            </Row>
                        </Container>                        
                    </Modal.Footer>
                </Modal>
                {this.renderOverlay()}
                {this.renderPlates()}
                {this.renderChoice()} 
                {this.renderGameMessages()}
                {this.renderp1char()}
                {this.renderp2char()} 
                {this.renderGameOver()}
                {this.renderDiceRoll()}                           
                <div id='p1char'>
                </div>
                {this.renderp2head()}
                <div id='dice1' onClick={this.roll1}>
                </div>
                <div id='dice2' onClick={this.roll1}>
                </div>
                <div id='dice3' onClick={this.roll1}>                
                </div>
                <div id='dice-gif'></div> 
                <div id='end-flag'>
                </div>               
                {/* <div id='yes'>
                </div>
                <div id='no'>
                </div> */}
                <div id='back' onClick={()=>{window.location.href='/games'}}>                    
                </div>
                <div id='p1-health'>
                    <ProgressBar animated striped variant='danger' now={this.state.p1_h}></ProgressBar>
                </div>
                <div id='p2-health'>
                    <ProgressBar animated striped variant='danger' now={this.state.p2_h}></ProgressBar>
                </div>
                <div id='p2-score'><strong style={{color:'white',textShadow:'1px 1px #333'}}>P2 Score: {this.state.p2_h}</strong></div>
                <div id='p1-score'><strong style={{color:'white',textShadow:'1px 1px #333'}}>P1 Score: {this.state.p1_h}</strong></div>
            </div>
        );
    }

    // Bootstrap the body element once the DOM is rendered
    componentDidUpdate(){
        let overlay_p=document.getElementById('win-scr-row-1');
        if(overlay_p){
            let img = overlay_p.childNodes[0];
            if(img)
                img.style.left = (overlay_p.style.width - img.style.width)/2;
        }

    }
}

export {Game2}