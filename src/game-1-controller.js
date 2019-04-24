let char_upgrade_1 = new Audio("../sound/char_up2.wav");
let char_upgrade_2 = new Audio('../sound/char_up3.wav');
let char_upgrade_3 = new Audio('../sound/char_up4.wav');
let audio_c = new Audio('../sound/res_c_s.wav');
let audio_w = new Audio('../sound/res_w_s.wav');
let audio_win = new Audio('../sound/win.wav');

import React from "react";



class Food extends React.Component{
    constructor(props){
        super(props);                      
        this.updateClick=this.props.updateClick;        
    }
    
    render(){
        // console.log('healthy ?'+this.isHealthy);
        // console.log('img-id',this.props.img_id,this.props.isHealthy);
        if(this.props.isHealthy)
            return(
                <div className='food' style={{backgroundImage:'url(../images/Foods/Healthy-foods/'+this.props.img_id+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} onClick={this.updateClick.bind(this,true)}></div>
            );
        else
            return(
                <div className='food' style={{backgroundImage:'url(../images/Foods/Unhealthy-foods/'+this.props.img_id+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} onClick={this.updateClick.bind(this,false)}></div>
            );
    }
}
let shfl = (arr) =>{
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
}

class CharSprite extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.score<25){
            return(
                <div className="game-char" style={{backgroundImage:"url(../images/Char_sprites/raw_charactor.png)",backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'}}></div>
            );
        }
        else if(this.props.score<50 && this.props.score>=25){
            return(
                <div className="game-char" style={{backgroundImage:"url(../images/Char_sprites/raw_charactor_lv_1.png)",backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'}}></div>
            );
        }
        else if(this.props.score<75 && this.props.score>=50){
            return(
                <div className="game-char" style={{backgroundImage:"url(../images/Char_sprites/raw_charactor_lv_2.png)",backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'}}></div>
            );
        }
        else {
            return(
                <div className="game-char" style={{backgroundImage:"url(../images/Char_sprites/raw_charactor_lv_3_alternative.png)",backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'}}></div>
            );
        }
    }
}

class ProgressBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="progress-bar  bg-danger" style={{width:this.props.score+'%',backgroundColor:' #ff0066'}}>
                            {/* {this.props.score} */}
            </div>
        );
    }
}

class Game_1 extends React.Component
{
    constructor(props){
        super(props);
        this.healthy_food_arr = Array.from(Array(27), (x, index) => 0 + index * 1);
        for (let i = this.healthy_food_arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.healthy_food_arr[i], this.healthy_food_arr[j]] = [this.healthy_food_arr[j], this.healthy_food_arr[i]];
        }
        this.unhealthy_food_arr = Array.from(Array(20), (x, index) => 0 + index * 1);
        for (let i = this.unhealthy_food_arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.unhealthy_food_arr[i], this.unhealthy_food_arr[j]] = [this.unhealthy_food_arr[j], this.unhealthy_food_arr[i]];
        }
        this.state = {score:10,h_seq:0,u_seq:0,conseq_u:0};
        this.updateClick = this.updateClick.bind(this);
        this.save_progress = this.save_progress.bind(this);
        this.restart = this.restart.bind(this);
        this.h_food_idx=0;
        this.u_food_idx=0;
    }
    shuffle(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
    }
    restart(){
        document.getElementById('overlay').hidden=true;
        this.save_progress();
        this.setState({score:10,h_seq:0,u_seq:0});
        
        
    }
    updateClick(isHealthy){       
        if(this.u_food_idx>=21){
            this.shuffle(this.unhealthy_food_arr);
            this.u_food_idx=0;
            // console.log(this.unhealthy_food_arr);
        }
        if(this.h_food_idx>=28){
            this.shuffle(this.healthy_food_arr);
            this.h_food_idx=0;
            // console.log(this.healthy_food_arr);
        }
        let old_score = this.state.score;
        let consq_u = this.state.conseq_u;
        if(isHealthy){
            audio_c.play();
            if(this.state.score+10>=100)
            {
                this.setState((state)=>{return{score:100 , h_seq:state.h_seq+1, u_seq:this.state.u_seq}});
                audio_win.play();
                document.getElementById('overlay').hidden = false;
                document.getElementById('gameover').hidden = true;
            }
                
            else
                this.setState((state)=>{return{score:state.score+10 , h_seq:state.h_seq+1, u_seq:this.state.u_seq,conseq_u:0}});
            if(old_score>=15 && old_score<25)
                char_upgrade_1.play();
            else if (old_score>=40 && old_score<50)
                char_upgrade_2.play();
            else if (old_score>=65 && old_score<75)
                char_upgrade_3.play();
        }
        else{
            audio_w.play();
            if((this.state.conseq_u+1)==5){
                document.getElementById('overlay').hidden = false;
                document.getElementById('gameover').style.display='block';
            }
            if(this.state.score>5)
                this.setState((state)=>{return{score:state.score-5 , h_seq:state.h_seq, u_seq:this.state.u_seq+1}});
            else
            this.setState((state)=>{return{score:5 , h_seq:state.h_seq, u_seq:this.state.u_seq+1,conseq_u:consq_u+1}});
        }
        

        // console.log(this.state.score+' score');
        // console.log('seq '+this.state.seq);
    } 
    save_progress(){
        console.log('u_clicks',this.state.u_seq);
        console.log('h_click',this.state.h_seq);
        let scores=JSON.parse(localStorage.getItem(document.title+"game-1-scores"));
        if (scores.length>0)
            scores.push({h_score:this.state.h_seq,u_score:this.state.u_seq});
        else
            scores = [{h_score:this.state.h_seq,u_score:this.state.u_seq}];
        localStorage.setItem(document.title+'game-1-scores',JSON.stringify(scores));

    }
    render_food(){
        let food_arr = Array(3);
        
        if(Math.random()>0.5){
            food_arr[0] = {idx:this.healthy_food_arr[this.h_food_idx++ %27],isHealthy:true};
            food_arr[1] = {idx:this.healthy_food_arr[this.h_food_idx++ %27],isHealthy:true};
            food_arr[2] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %20],isHealthy:false};

        }
        else{
            food_arr[0] = {idx:this.healthy_food_arr[this.h_food_idx++ %27],isHealthy:true};
            food_arr[1] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %20],isHealthy:false};
            food_arr[2] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %20],isHealthy:false};
        }
        
        this.shuffle(food_arr);
        // console.log(food_arr);
        return(
            <div>
            <div  className="game-col-2">
                <Food img_id={food_arr[0].idx} isHealthy={food_arr[0].isHealthy} updateClick={this.updateClick} />
            </div>
            <div  className="game-col-3">
                <Food img_id={food_arr[1].idx} isHealthy={food_arr[1].isHealthy} updateClick={this.updateClick} />
            </div>
            <div  className="game-col-4">
                <Food img_id={food_arr[2].idx} isHealthy={food_arr[2].isHealthy} updateClick={this.updateClick} />
            </div>
        </div>
 
        );
               
    
            
    }
    
    render(){

        return(            
            <div className="page" >                
                <div id="overlay" className="overlay-msg" hidden>
                    <h1 id='gameover' style={{display:'none', textAlign:'center',color:'white'}}> Oh No you ate too many unhealthy foods</h1>
                    <a href="#">
                    <img className='restart-button' src='../images/sprites/replay_button.png' onClick={this.restart}></img>
                    </a>                    
                </div>
                                
            <div className="game-1-area">                
                <div className="game-row">
                    <div className="game-col-1" >
                    <div className='back' style={{backgroundImage:'url(../images/sprites/goBack_button.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}} onClick={this.save_progress.bind(this)}>                        
                        <a href='/games' >
                        </a>
                    </div>
                    </div>
                {this.render_food()}
                </div>
                <div id='char' className="game-row game-row-2" >
                    <CharSprite score = {this.state.score} />
                </div>
            </div>
            <div className="game-footer">
                <div className="game-health">            
                </div>
                <div className="  progress game-progress-bar">
                        <ProgressBar score = {this.state.score} />        
                </div>
            </div>            
        </div>            
        );
    }
    componentDidMount(){
        
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;        
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        // console.log('saf',isSafari);
        if (height > width) {
            if (!(isSafari))
                alert('For the best browsing experience, please rotate your device');
            else
                alert('For a better browsing experience, use chrome browser');
            // alert(navigator.userAgent.toLowerCase());

        }

        window.addEventListener('resize', function () {
            width = window.screen.availWidth;
            height = window.screen.availHeight;
            if (height > width) {
                if (!(isSafari))
                    alert('For the best browsing experience, please rotate your device');
                else
                    alert('For a better browsing experience, use chrome browser');
            }
        });
    }
}

export{Game_1};