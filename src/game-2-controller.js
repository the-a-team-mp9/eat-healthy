import React from 'react';
import {ProgressBar} from 'react-bootstrap'

class Game2 extends React.Component
{
    constructor(props){
        super(props);
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

        },2000,choice);
    }

    render(){
        return(
            <div className='game-2-area'>
                <div id='plate1'>
                </div>
                <div id='plate2'>
                </div>
                <div id='plate3'>                
                </div>
                <div id='plate4'>
                </div>
                <div id='plate5'>
                </div>
                <div id='plate6'>
                </div>
                <div id='plate7'>
                </div>
                <div id='plate8'>
                </div>
                <div id='plate9'>
                </div>
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