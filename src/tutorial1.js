import React from 'react';

class Tutorial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div  style={{padding:'20px 0 20px', height:'100vh', textAlign:'center'}}>
                <div className='embed-container' style={{margin:'7%'}}>
                    <iframe src='https://www.youtube.com/embed//NCJ3XOCGbr0' frameBorder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen" />
                </div>
                <a className='learn-more-btn' href='/game-1'>
                    Jump to Game
                </a>
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
        let bod = document.getElementById('bod');

        if (bod)
            bod.classList.add('bod1');

    }
}
export {Tutorial};