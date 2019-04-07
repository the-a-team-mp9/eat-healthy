import React from 'react';

class ComingSoon extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
            return(

                <div id='hero' className='page hero '>
                    <section id='section'>
                        <h1 style={{color:'white',textAlign:'center'}}>
                           This Game is currently under development. 
                        </h1>                  
                    </section>
                    <div style={{textAlign:'center'}} >
                    <a href='/games' className='learn-more-btn'>
                                    Jump to Game Zone
                            </a>
                    </div>
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
        
        // let hero = document.getElementById('hero');
        // let section = document.getElementById('section');
        // console.log(hero.style.height);
        // console.log('hero h',hero.style.height);
        // console.log('section h',section.style.height);
        // if(section.style.height>hero.style.height)
        //     hero.classList.remove('page');

        if (height>width)
            alert('For the best browsing experience, please rotate your device');
        window.addEventListener('resize', function(){
            width = window.screen.availWidth;
            height = window.screen.availHeight;
            if (height>width)
            alert('For the best browsing experience, please rotate your device')});
            

    }

}


export {ComingSoon};