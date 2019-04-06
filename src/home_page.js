import React from "react";
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);        
    }
    componentDidMount(){        
        let nav = document.getElementById('navBar');
        console.log('mount',nav);
        nav.hidden=false;
        let home = document.getElementById('home');
        home.classList.add('active');
        let intro = document.getElementById('intro');
        intro.classList.remove('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.remove('active');
    }
    render(){
        return(                               
            <div className="page hero" id="hero" >           
            <div className="container">
                <div className="row">

                </div>
                <div className="row" >
                    <div className="col-md-12 ">
                        <h1 className="animated fadeInDown" style={{color:'aliceblue',textAlign:"center"}}> TEACH KIDS TO EAT HEALTHY, 
                        </h1>
                        <h1 className="animated fadeInDown" style={{color:'aliceblue',textAlign:"center"}}> THE WAY THEY LIKE IT. 
                        </h1>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12  text-center">
                    <a href="/info" className="learn-more-btn">Learn More</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12  text-center">
                    <a href="/games" className="learn-more-btn">Jumo to Game Zone</a>
                    </div>
                </div>
                </div>
			</div>      
            
        );
    }
    
}

export {Home}