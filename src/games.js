import React from "react";

class Games extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='page'>
                <section className=" game" id="game">
                    <div className="col-md-4 wp2 animated fadeInUp" style={{textAlign:'center'}}>
                        <div className="img">
                            <a href="/game-1">
                                <img src="../images/Game_Icons/Gameicon1.png" alt="Game 1" />
                            </a>
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