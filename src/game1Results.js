import React from 'react';
import {Button,ProgressBar,Container,Row,Col} from 'react-bootstrap';

class Game1Results extends React.Component{
    constructor(props){
        super(props);        
    }
    clearScores(){
        let scores=JSON.parse(localStorage.getItem(document.title+"game-1-scores"));
        if (scores){
            localStorage.setItem(document.title+'game-1-scores',JSON.stringify([]));
            window.location.href = "/games";
        }
            
    }

    render(){
        let scores=JSON.parse(localStorage.getItem(document.title+"game-1-scores"));
        // console.log(scores);
        if (scores){

        
            if(scores.length>0){
                const score_list = scores.map((score)=> <Score  h_score={score.h_score} u_score={score.u_score}></Score>)
            return(
                <div id='hero'>
                    <section id='section' style={{paddingBottom:'20px'}}>
                        <h1 style={{color:'white',textAlign:'center'}}>
                            Game scores
                        </h1>
                        <div className='container'>
                        {score_list}                                                
                        </div> 
                        <div style={{textAlign:'center'}} >
                        <a href='/games' className='learn-more-btn'>
                                        Jump to Game Zone
                        </a>
                        <br />
                        <Button variant='danger' onClick={this.clearScores} style={{marginTop:'20px'}}>
                        Clear Scores
                        </Button>
                        </div>                   
                    </section>
                    
                </div>
            );
            }
            else
                return(
                    <div >
                    <h1 style={{color:'white',textAlign:'center'}}>
                        No scores recorded.
                    </h1>
                    <div style={{textAlign:'center'}} >
                    <a href='/games' className='learn-more-btn'>
                                    Jump to Game Zone
                            </a>
                    </div>
                </div>
                );

        }
            
            
        
        else
            return(
                <div id='hero'>
                    <h1 style={{color:'white',textAlign:'center'}}>
                        No scores recorded.
                    </h1>
                    <div style={{textAlign:'center'}} >
                    <a href='/games' className='learn-more-btn'>
                                    Jump to Game Zone
                            </a>
                    </div>
                </div>
            );

        
    }
    componentDidMount(){        
        let bod = document.getElementById('bod');

        if (bod)
            bod.classList.add('bod1');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight; 

        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        // console.log('saf',isSafari);
        // if (height > width) {
        //     if (!(isSafari))
        //         alert('For the best browsing experience, please rotate your device');
        //     else
        //         alert('For a better browsing experience, use chrome browser');
        //     // alert(navigator.userAgent.toLowerCase());

        // }

        // window.addEventListener('resize', function () {
        //     width = window.screen.availWidth;
        //     height = window.screen.availHeight;
        //     if (height > width) {
        //         if (!(isSafari))
        //             alert('For the best browsing experience, please rotate your device');
        //         else
        //             alert('For a better browsing experience, use chrome browser');
        //     }
        // });

    }

}

class Score extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let tries = this.props.h_score+this.props.u_score;
        let h_pc = Math.floor(this.props.h_score/tries*100);
        let u_pc = 100 - h_pc;
        if(tries>0)
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                            Healthy Foods : {this.props.h_score}
                            </p>
                            <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                                Unhealthy Foods : {this.props.u_score}
                            </p>
                            <ProgressBar>
                                <ProgressBar striped animated variant='success' now={h_pc}>
                                    {h_pc}
                                </ProgressBar>
                                <ProgressBar striped animated variant='danger' now={u_pc}>
                                    {u_pc}
                                </ProgressBar>
                            </ProgressBar>
                        </Col>
                    </Row>
                    <hr />
                </Container>
                {/* <div className='row'>
                <div className='col-md-4 '>
                    <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                        Healthy Foods : {this.props.h_score}
                    </p>
                    <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                        Unhealthy Foods : {this.props.u_score}
                    </p>
                </div>
                <div className='col-md-8 ' style={{paddingTop:'30px'}}>
                    <div className='progress' >
                        <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={{ width: h_pc+'%'}}>
                            {h_pc}
                        </div>
                        <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={{ width: u_pc+'%'}}>
                            {u_pc}
                        </div>
                    </div>
                </div> */}
            </div>                                                        
        );
        else
            return(
                <div></div>
            );
    }
}

export {Game1Results};