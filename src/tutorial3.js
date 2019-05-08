import React from 'react';

class Tutorial3 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div  style={{padding:'20px 0 20px', height:'100vh', textAlign:'center'}}>
                <div className='embed-container' style={{margin:'7%'}}>
                    <iframe src='https://www.youtube.com/embed//KFYPPT8PW18?rel=0' frameBorder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen" />
                </div>
                <a style={{marginRight:'5px',marginTop:'5px'}} className='learn-more-btn' href='/game-3'>
                    Jump to Game
                </a>
                <a style={{marginLeft:'5px',marginTop:'5px'}} className='learn-more-btn' href='/games'>
                    Back
                </a>               
            </div>
            
        );
    }
    // Bootstrap the body element once the DOM is rendered
    componentDidMount(){        
        let bod = document.getElementById('bod');

        if (bod)
            bod.classList.add('bod1');

    }
}
export {Tutorial3};