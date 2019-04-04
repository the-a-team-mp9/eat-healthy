let char_upgrade_1 = new Audio("../sound/char_up2.wav");
let char_upgrade_2 = new Audio('../sound/char_up3.wav');
let char_upgrade_3 = new Audio('../sound/char_up4.wav');
let audio_c = new Audio('../sound/res_c_s.wav');
let audio_w = new Audio('../sound/res_w_s.wav');
let audio_win = new Audio('../sound/win.wav');

import React from "react";
import {Link} from 'react-router-dom';
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
                            {this.props.score}
            </div>
        );
    }
}

class Game_1 extends React.Component
{
    constructor(props){
        super(props);
        this.healthy_food_arr = Array.from(Array(24), (x, index) => 0 + index * 1);
        for (let i = this.healthy_food_arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.healthy_food_arr[i], this.healthy_food_arr[j]] = [this.healthy_food_arr[j], this.healthy_food_arr[i]];
        }
        this.unhealthy_food_arr = Array.from(Array(17), (x, index) => 0 + index * 1);
        for (let i = this.unhealthy_food_arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.unhealthy_food_arr[i], this.unhealthy_food_arr[j]] = [this.unhealthy_food_arr[j], this.unhealthy_food_arr[i]];
        }
        this.state = {score:10,seq:0};
        this.updateClick = this.updateClick.bind(this);
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
        this.setState({score:10,seq:0});
        
    }
    updateClick(isHealthy){       
        if(this.u_food_idx>=17){
            this.shuffle(this.unhealthy_food_arr);
            this.u_food_idx=0;
            // console.log(this.unhealthy_food_arr);
        }
        if(this.h_food_idx>=24){
            this.shuffle(this.healthy_food_arr);
            this.h_food_idx=0;
            // console.log(this.healthy_food_arr);
        }
        let old_score = this.state.score;
        if(isHealthy){
            audio_c.play();
            if(this.state.score+10>100)
            {
                this.setState((state)=>{return{score:100 , seq:state.seq+1}});
                audio_win.play();
                document.getElementById('overlay').hidden = false;
            }
                
            else
                this.setState((state)=>{return{score:state.score+10 , seq:state.seq+1}});
            if(old_score>=15 && old_score<25)
                char_upgrade_1.play();
            else if (old_score>=40 && old_score<50)
                char_upgrade_2.play();
            else if (old_score>=65 && old_score<75)
                char_upgrade_3.play();
        }
        else{
            audio_w.play();
            if(this.state.score>5)
                this.setState((state)=>{return{score:state.score-5 , seq:state.seq+1}});
            else
            this.setState((state)=>{return{score:5 , seq:state.seq+1}});
        }
        
        // console.log(this.state.score+' score');
        // console.log('seq '+this.state.seq);
    } 
    render_food(){
        let food_arr = Array(3);
        
        if(Math.random()>0.5){
            food_arr[0] = {idx:this.healthy_food_arr[this.h_food_idx++ %23],isHealthy:true};
            food_arr[1] = {idx:this.healthy_food_arr[this.h_food_idx++ %23],isHealthy:true};
            food_arr[2] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %16],isHealthy:false};

        }
        else{
            food_arr[0] = {idx:this.healthy_food_arr[this.h_food_idx++ %23],isHealthy:true};
            food_arr[1] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %16],isHealthy:false};
            food_arr[2] = {idx:this.unhealthy_food_arr[this.u_food_idx++ %16],isHealthy:false};
        }
        
        this.shuffle(food_arr);
        // console.log(food_arr);
        return(
            <div>
            <div id='plate1' className="game-col-2">
                <Food img_id={food_arr[0].idx} isHealthy={food_arr[0].isHealthy} updateClick={this.updateClick} />
            </div>
            <div id='plate2' className="game-col-3">
                <Food img_id={food_arr[1].idx} isHealthy={food_arr[1].isHealthy} updateClick={this.updateClick} />
            </div>
            <div id='plate3' className="game-col-4">
                <Food img_id={food_arr[2].idx} isHealthy={food_arr[2].isHealthy} updateClick={this.updateClick} />
            </div>
        </div>
 
        );
               
    
            
    }
    
    render(){

        return(            
            <div className="page" >                
                <div id="overlay" className="overlay-msg" hidden>
                    <a href="#">
                    <img className='restart-button' src='../images/sprites/restart.png' onClick={this.restart}></img>
                    </a>                    
                </div>
                                
            <div className="game-1-area">                
                <div className="game-row">
                    <div className="game-col-1" >
                    <div className='back' style={{backgroundImage:'url(../images/sprites/back.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>                        
                        <a href='/'>
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
        let nav = document.getElementById('navBar');
        console.log('mount',nav);
        nav.hidden=true;
    }
}

export{Game_1};