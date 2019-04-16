import React from 'react';

class Tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='hero' style={{padding:'20px 0 20px', height:'100vh'}}>
                <div className='embed-container' style={{margin:'7%'}}>
                    <iframe src='https://www.youtube.com/embed//NCJ3XOCGbr0' frameBorder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen" />
                </div>
                {/* <iframe width="auto" height="auto" src="https://www.youtube.com/embed/NCJ3XOCGbr0" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen"></iframe> */}
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
export {Tutorial};