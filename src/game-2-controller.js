import React from 'react';
import {ProgressBar} from 'react-bootstrap'

class Game2 extends React.Component
{
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
                <div id='dice'>
                </div>
                <div id='yes'>
                </div>
                <div id='no'>
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