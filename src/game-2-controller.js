import React from 'react';
import {ProgressBar,Modal,Button, Container, Row,Col} from 'react-bootstrap';

let audio_c = new Audio('../sound/res_c_s.wav');
let audio_w = new Audio('../sound/res_w_s.wav');
let audio_win = new Audio('../sound/win.wav');


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
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*28);            
            while(h_foods.indexOf(rnd)!=-1){
                rnd = Math.floor(Math.random()*28);                
            }
                
            h_foods.push(rnd);
        }        
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*21);
            while(u_foods.indexOf(rnd)!=-1)
            {
                rnd = Math.floor(Math.random()*21);
            }
                
            u_foods.push(rnd);
        }
        let h_foods_t=[];
        let u_foods_t=[];
        h_foods.forEach(val => {
            h_foods_t.push({type:'h', val:val})
        });
        u_foods.forEach(val => {
            u_foods_t.push({type:'u', val:val})
        });
        let r_events_t=[{type:'r',val:1}];
        this.board= h_foods_t.concat(u_foods_t,r_events_t);
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
    
    restart(){
        this.clearpawns();
        this.setState({g_state:'start', disp_modal:true, game_mode:'pvc', p1_loc:0, 
        p2_loc:0, p1_h:20, p2_h:20, active:'p1', finish:'none', game_msg:'Player 1 Turn'});
    }

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
                document.getElementById('no').style.display='none'
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

    simulateComp(d,loc,score){
        let rolledVal = d[d.length-1];        
        if(Math.random()>.75){
            document.getElementById('game-2-comp-msg').style.display='none';
            document.getElementById('game-2-comp-stay-msg').style.display='block';
            setTimeout(()=>{
                            document.getElementById('game-2-comp-stay-msg').style.display='none';
                            document.getElementById('game-2-msg').style.display='block';
                            },1500);
            this.setState({p1_h:score,p1_loc:loc,g_state:'roll'});
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
            let p2_dest=parseInt(this.state.p2_loc)+parseInt(rolledVal);
            let p2_score; 
            // console.log(dest);
            if(p2_dest<=9){
                p2_score = this.updateScore(p2_dest,false);                
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

    endTurn(np1_h,np2_h,np1_dest,np2_dest){
        // console.log('np1_h',np1_h);
        // console.log('np2_h',np2_h);
        // console.log('np1_dest',np1_h);
        document.getElementById('game-2-comp-move-msg').style.display='none';
        document.getElementById('game-2-msg').style.display='block';
        this.setState({p1_h:np1_h, p1_loc:np1_dest, p2_loc:np2_dest, p2_h:np2_h, g_state:'roll',game_msg:'Player 1 Turn'});
    }
                    
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

    updateScore(loc,isP1){
        // console.log('updt '+this.state.p1_h,this.state.p2_h);       
        if(isP1){
            let type = this.board[parseInt(loc)-1].type;            
            if(type=='h'){
                // console.log('up p1-h',parseInt(this.state.p1_h)+10,);
                audio_c.play();
                document.getElementById('p1-health').childNodes[0].childNodes[0].style.width=(parseInt(this.state.p1_h)+20).toString()+'%';
                return(parseInt(this.state.p1_h)+20);
            }
                
            else if(type=='u')
            {
                if(this.state.p1_h>0)
                {
                    // console.log('up p1-u',parseInt(this.state.p1_h)-10,);
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

    modeSelect(mode){
        this.setState({game_mode:mode,disp_modal:false});        
    }

    getRolled(d){
        // console.log(parseInt(d[d.length-1]));
        this.setState({g_state:'decide',rolled_num:parseInt(d[d.length-1])});
    }

    roll1(){
        if(this.state.g_state=='start' || this.state.g_state =='roll'){
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
            // console.log(document.getElementById('dice-gif').style.display);
            setTimeout((d)=>{            
                document.getElementById('dice-gif').style.display='none';
                document.getElementById(d).style.display='block';
            },1200,choice);
            setTimeout(this.getRolled.bind(this),1300,choice);
        }
        
    }

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
        // console.log(document.getElementById('dice-gif').style.display);
        setTimeout((d)=>{            
            document.getElementById('dice-gif').style.display='none';
            document.getElementById(d).style.display='block';
        },1200,choice);
        setTimeout(this.simulateComp.bind(this),1800,choice,loc,score);        
    }
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
    renderp1char(){
        return(
            <div id='p1-start' >
                <div id='p1-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                </div>
            </div>
        );
    }
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
    renderChoice(){
        if(this.state.g_state=='decide')
            return(
                <div>
                    <div id='yes' onClick={this.go.bind(this)}>
                    </div>
                    <div id='no' onClick={this.stay.bind(this)}>
                    </div>
                </div>
                
            );
        else
            return(<div></div>);
    }

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

    renderPlates(){
        const board_items = this.board.map((obj)=><Plates g_mode={this.state.game_mode} key={obj.type+obj.val} val={obj.val} type={obj.type} id={this.board.indexOf(obj)+1}/>);        
        return(
            <div>
                {board_items}
            </div>
            
        );        
    }

    renderOverlay(){
        if(this.state.finish!='none'){
            if(this.state.p1_h>this.state.p2_h){
                audio_win.play();
                return(
                    <div id='overlay' className='overlay-msg'>
                        <div id='win-scr-row-1' >
                            <h1 style={{color:'white'}}>
                                Player 1 Wins
                            </h1>
                            <img className='img-responsive' src='../images/Pieces/Kid_win.png' />
                        </div>
                        <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                            <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart.bind(this)}></img>
                        </div>
                    </div>
                );
            }
            else if(this.state.p1_h<this.state.p2_h){
                if(this.state.game_mode=='pvc'){
                    return(
                        <div id='overlay' className='overlay-msg'>
                            <div id='win-scr-row-1' >
                                <h1 style={{color:'white'}}>
                                    Computer Wins 
                                </h1>
                                <img className='img-responsive' src='../images/Pieces/Robot_win.png' />
                            </div>
                            <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                                <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart.bind(this)}></img>
                            </div>
                        </div>
                    );
                }
                else{
                    audio_win.play();
                    return(
                        <div id='overlay' className='overlay-msg'>
                            <div id='win-scr-row-1' >
                                <h1 style={{color:'white'}}>
                                    Player 2 Wins 
                                </h1>
                                <img className='img-responsive' src='../images/Pieces/Astronaut_win.png' />
                            </div>
                            <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                                <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart}></img>
                            </div>
                        </div>
                    );
                }
            }
            else{
                return(
                    <div id='overlay' className='overlay-msg'>
                        <div id='win-scr-row-1' >
                            <h1 style={{color:'white'}}>
                                Scores Tie 
                            </h1>                            
                        </div>
                        <div id='win-scr-row-2' style={{cursor:'pointer'}}>                    
                            <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart}></img>
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
                                        PVP
                                    </Button>
                                    <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="info" onClick={this.modeSelect.bind(this,'pvc')}>
                                        PVC
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
            </div>
        );
    }
}

export {Game2}