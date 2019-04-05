import React from 'react';

class Game1Results extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        let scores=JSON.parse(localStorage.getItem(document.title+"game-1-scores"));
        if (scores){
            const score_list = scores.map((score)=> <Score  h_score={score.h_score} u_score={score.u_score}></Score>)
            return(
                <div className='page hero'>
                    <section >
                        <h1 style={{color:'white',textAlign:'center'}}>
                            Game scores
                        </h1>
                        <div className='container'>
                        {score_list}                                                
                        </div>                    
                    </section>
                    <div style={{textAlign:'center'}} >
                    <a href='/games' className='learn-more-btn'>
                                    Jump to Game Zone
                            </a>
                    </div>
                </div>
            );
        }
        else
            return(
                <div className='page hero'>
                    <h1>
                        No scores recorded.
                    </h1>
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

class Score extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let tries = this.props.h_score+this.props.u_score;
        let h_pc = Math.floor(this.props.h_score/tries*100);
        let u_pc = 100 - h_pc;
        if(tries>0)
        return(
            <div>
                <div className='row'>
                <div className='col-md-4 '>
                    <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                        Healthy Foods : {this.props.h_score}
                    </p>
                    <p style={{color:'white',fontSize:'15px',margin:'10px'}}>
                        Unhealthy Foods : {this.props.u_score}
                    </p>
                </div>
                <div className='col-md-8 ' style={{paddingTop:'30px'}}>
                    <div className='progress' >
                        <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={{ width: h_pc+'%'}}>
                            {h_pc}
                        </div>
                        <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={{ width: u_pc+'%'}}>
                            {u_pc}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            </div>
                                
        );
        else
            return(
                <div></div>
            );
    }
}

export {Game1Results};