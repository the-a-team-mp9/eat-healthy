import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let nav = document.getElementById('navBar');
        console.log('mount',nav);
        nav.hidden=false;
        let home = document.getElementById('home');
        home.classList.remove('active');
        let intro = document.getElementById('intro');
        intro.classList.remove('active');
        let team = document.getElementById('team');
        team.classList.add('active');
        let game = document.getElementById('games');
        game.classList.remove('active');
    }
    render() {
        return (
            <div>
                <section className="hero" id="hero">
                    <div className="container" style={{filter:"alpha(opacity=0)"}} >
                        <div className="col-md-6" style={{width:"50%"}}>
                            <p style={{paddingTop:"200px",color:"#fff"}}>
                                The website is built by the 'A team'
							</p>
                            <p style={{paddingTop:"200px",color:"#fff"}}>
                                Email:The-A-Team@monash.edu
							</p>
                        </div>
                        <div className="col-md-6" style={{width:"50%"}}>				
                            <div className="img">
                                <img src="../images/Logo.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export {About}