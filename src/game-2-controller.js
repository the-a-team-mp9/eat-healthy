import React from 'react';
import {ProgressBar} from 'react-bootstrap'

class Plates extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        if(this.props.type=='h')
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food' style={{backgroundImage:'url(../images/Foods/Healthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        else if(this.props.type=='u'){
                // console.log('u');
                // console.log('url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)');
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food'  style={{backgroundImage:'url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        }
        else {
            console.log('r');
            return(
            <div id={'plate'+this.props.id}>
                <div className='food' style={{backgroundImage:'url(../images/Random-events/r1.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                </div>
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
            // console.log(h_foods,i);
            while(h_foods.indexOf(rnd)!=-1){
                rnd = Math.floor(Math.random()*28);
                // console.log('rep');
            }
                
            h_foods.push(rnd);
        }
        // console.log(h_foods);
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
        // console.log(this.board);
    }

    roll1(){
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
    }

    renderPlates(){
        const board_items = this.board.map((obj)=><Plates key={obj.type+obj.val} val={obj.val} type={obj.type} id={this.board.indexOf(obj)+1}/>);        
        return(
            <div>
                {board_items}
            </div>
            
        );        
    }
    render(){
        return(
            <div className='game-2-area'>
                {this.renderPlates()}                
                <div id='p1char'>
                </div>
                <div id='p2char'> 
                </div>
                <div id='dice1' onClick={this.roll1}>
                </div>
                <div id='dice2' onClick={this.roll1}>
                </div>
                <div id='dice3' onClick={this.roll1}>                
                </div>
                <div id='dice-gif'></div>
                <div id='yes'>
                </div>
                <div id='no'>
                </div>
                <div id='back'>
                </div>
                <div id='p1-health'>
                    <ProgressBar animated striped variant='danger' now='80'></ProgressBar>
                </div>
                <div id='p2-health'>
                    <ProgressBar animated striped variant='danger' now='50'></ProgressBar>
                </div>
            </div>
        );
    }
}

export {Game2}