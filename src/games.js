import React from "react";

class Games extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='page'>
                <section className=" game" id="game">
                    <div className="col-md-4 wp2 animated fadeInUp">
                        <div className="img">
                            <a href="/game-1">
                                <img src="../images/Game_Icons/Gameicon1.png" alt="Game 1" />
                            </a>
                        </div>
                        <h2 style={{textAlign:"center"}}>Welcome to Game Zone!</h2>
                        <p style={{textAlign:"center"}}>Learn to identify good foods</p>
                        <p style={{textAlign:"center"}}>Choose good foods to gain points</p>
                        <p style={{textAlign:"center"}}>Level up as you eat good foods</p>
                    </div>
                    <div className="col-md-4 wp2 delay-05s animated fadeInUp">
                        <div className="img">
                            <a href="Team-MP9.html">
                                <img src="../images/Game_Icons/Gameicon2.png" alt="Game 2" />
                            </a>
                        </div>
                        <h2 style={{textAlign:"center"}}>Coming Soon...</h2>
                        <p></p>
                    </div>
                    <div className="col-md-4 wp2 delay-1s animated fadeInUp">
                        <div className="img">
                            <img src="../images/Game_Icons/Gameicon2.png" alt="Game 3" />
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
        console.log('mount',nav);
        nav.hidden=false;
        let home = document.getElementById('home');
        home.classList.remove('active');
        let intro = document.getElementById('intro');
        intro.classList.remove('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.add('active');
    }
}

export {Games}