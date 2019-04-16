import React from "react";
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);        
    }
    componentDidMount(){        
        let nav = document.getElementById('navBar');
        // console.log('mount',nav);
        nav.hidden=false;
        let home = document.getElementById('home');
        home.classList.add('active');
        let intro = document.getElementById('intro');
        intro.classList.remove('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.remove('active');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;   

        let hero = document.getElementById('hero');
        let container = document.getElementById('container');
        // console.log('hero h',hero.clientHeight);        
        // console.log('height',container.clientHeight);
        if(hero.clientHeight<height)
            hero.style.height='100vh';
        else
            hero.style.height='auto';
            var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
            // console.log('saf',isSafari);
        if (height>width){
            if(!(isSafari))
                alert('For the best browsing experience, please rotate your device');
            else 
                alert('For a better browsing experience, use chrome browser');
                // alert(navigator.userAgent.toLowerCase());

        }
            
            window.addEventListener('resize', function(){
                width = window.screen.availWidth;
                height = window.screen.availHeight;
                if (height>width)
                {
                    if(!(isSafari))
                    alert('For the best browsing experience, please rotate your device');
                    else
                    alert('For a better browsing experience, use chrome browser');
                }
                console.log('h height',hero.clientHeight);
                console.log(height);
                if(hero.clientHeight<window.screen.availHeight)
                    hero.style.height='100vh';
                else
                    hero.style.height='auto';
                });
                
            
        }
            
    render(){
        return(                               
            <div id='hero' className="page hero " id="hero" style={{height:'auto'}}>           
            <div id='container' className="container">
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
                    <a href="/games" className="learn-more-btn">Jump to Game Zone</a>
                    </div>
                </div>
                </div>                
			</div>      
            
        );
    }
    
}

export {Home}