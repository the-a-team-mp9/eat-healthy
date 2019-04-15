import React from "react";
import Button from 'react-bootstrap/Button';

class Games extends React.Component {
    constructor(props) {
        super(props);
    }

    showModal(){
        if(document.getElementById('modal')){
            console.log('found modal');
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal').style.zIndex = 10;
        }
        
    }
    hideModal(){
        if(document.getElementById('modal')){
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal').style.zIndex = 0;
        }
        
    }

    render() {
        return (
            <div className='page'>
                <div className='modal1' id='modal'>
                    <div className='modal1-content' style={{backgroundColor: "#61727b",paddingBottom:'20px',maxWidth:'150px'}} id='caption'> 
                    <div className='modfull'>
                            <h2>
                                Game 1
                            </h2>
                        </div> 
                        <div className='modfull'>
                            <Button variant='info' >
                            <a href='/coming-soon'>
                                View Tutorial
                            </a>
                            </Button>
                        </div> 
                        <div className='modfull'>                            
                            <Button variant='success' >
                            <a href='/game-1'>Jump to game</a>
                            </Button>
                        </div>                       
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>                
                    </div>
                </div>   
                <section className=" game" id="game">
                    <div className="col-md-4 wp2 animated fadeInUp" style={{textAlign:'center'}}>
                        <div className="img">
                            <div style={{cursor:'pointer'}} onClick={this.showModal}>
                                <img src="../images/Game_Icons/Gameicon1.png" alt="Game 1" />
                            </div>
                        </div>
                        <h2 style={{textAlign:"center"}}>Eat Healthy</h2>
                        <p style={{textAlign:"center", color:'white'}}>Learn to identify good foods</p>
                        <p style={{textAlign:"center",color:'white'}}>Choose good foods to gain points</p>
                        <p style={{textAlign:"center",color:'white'}}>Level up as you eat good foods</p>
                        <a href='/game-1-results' className='learn-more-btn' style={{marginTop:'30px'}}>
                                    Game 1 Scores
                        </a>
                    </div>
                    <div className="col-md-4 wp2 delay-05s animated fadeInUp">
                        <div className="img">
                            <a href="coming-soon">
                                <img src="../images/Game_Icons/Gameicon2.png" alt="Game 2" />
                            </a>
                        </div>
                        <h2 style={{textAlign:"center"}}>Coming Soon...</h2>
                        <p></p>
                    </div>
                    <div className="col-md-4 wp2 delay-1s animated fadeInUp">
                        <div className="img">
                        <a href='coming-soon'>
                            <img src="../images/Game_Icons/Gameicon2.png" alt="Game 3" />
                        </a>                            
                        </div>
                        <h2 style={{textAlign:"center"}}>Coming Soon...</h2>
                        <p></p>
                    </div>
                    <div className="clearfix"></div>
                </section>
            </div>
        );
    }
    componentDidMount(){        
        let nav = document.getElementById('navBar');
        // console.log('mount',nav);
        nav.hidden=false;
        let home = document.getElementById('home');
        home.classList.remove('active');
        let intro = document.getElementById('intro');
        intro.classList.remove('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.add('active');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;        
        if (height>width)
            alert('For the best browsing experience, please rotate your device');
        window.addEventListener('resize', function(){
            width = window.screen.availWidth;
            height = window.screen.availHeight;
            if (height>width)
            alert('For the best browsing experience, please rotate your device')});
            
    }
}

export {Games}