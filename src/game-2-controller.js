import React from 'react';
import {ProgressBar,Modal,Button, Container, Row,Col} from 'react-bootstrap'

class Plates extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        if(this.props.type=='h')
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food' style={{backgroundImage:'url(../images/Foods/Healthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                    <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                    <div id={'p2'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                </div>
            );
        else if(this.props.type=='u'){
                // console.log('u');
                // console.log('url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)');
            return(
                <div id={'plate'+this.props.id}>
                    <div className='food'  style={{backgroundImage:'url(../images/Foods/Unhealthy-foods/'+this.props.val+'.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                    </div>
                    <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                    <div id={'p2'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                    </div>
                </div>
            );
        }
        else {
            // console.log('r');
            return(
            <div id={'plate'+this.props.id}>
                <div className='food' style={{backgroundImage:'url(../images/Random-events/r1.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                </div>
                <div id={'p1'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                </div>
                <div id={'p2'+this.props.id} className='p-char' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center',display:'none'}}>
                </div>
            </div>
            );
        }
    }
}

class Game2 extends React.Component
{
    constructor(props){
        super(props);
        let h_foods=[];
        let u_foods=[];
        let rnd;
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*28);            
            while(h_foods.indexOf(rnd)!=-1){
                rnd = Math.floor(Math.random()*28);                
            }
                
            h_foods.push(rnd);
        }        
        for(let i=0;i<4;i++){
            rnd = Math.floor(Math.random()*21);
            while(u_foods.indexOf(rnd)!=-1)
            {
                rnd = Math.floor(Math.random()*21);
            }
                
            u_foods.push(rnd);
        }
        let h_foods_t=[];
        let u_foods_t=[];
        h_foods.forEach(val => {
            h_foods_t.push({type:'h', val:val})
        });
        u_foods.forEach(val => {
            u_foods_t.push({type:'u', val:val})
        });
        let r_events_t=[{type:'r',val:1}];
        this.board= h_foods_t.concat(u_foods_t,r_events_t);
        for (let i = this.board.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
        }
        this.state= {g_state:'start', disp_modal:true, game_mode:'pvc', p1_loc:0, p2_loc:0, p1_h:10, p2_h:10, active:'p1', finish:'none'};
        this.roll1 = this.roll1.bind(this);        
    }
    handleClose() {
        this.setState({ disp_modal:false});
    }
    
    go(){
        
        let dest = parseInt(this.state.rolled_num);
        // console.log('f',dest);
        if(this.state.active=='p1'){
            if(this.state.p1_loc==0)
                document.getElementById('p1-start').style.display='none';
            else if (this.state.p1_loc==1)
                document.getElementById('p11').style.display='none';
            else if(this.state.p1_loc==2)
                document.getElementById('p12').style.display='none';
            else if (this.state.p1_loc==3)
                document.getElementById('p13').style.display='none';
            else if(this.state.p1_loc==4)
                document.getElementById('p14').style.display='none';
            else if (this.state.p1_loc==5)
                document.getElementById('p15').style.display='none';
            else if(this.state.p1_loc==6)
                document.getElementById('p16').style.display='none';
            else if (this.state.p1_loc==7)
                document.getElementById('p17').style.display='none';
            else if(this.state.p1_loc==8)
                document.getElementById('p18').style.display='none';
            else 
                document.getElementById('p19').style.display='none';
            dest+=parseInt(this.state.p1_loc);
            // console.log(dest);
            if(dest<=9){                
                setTimeout((d)=>{console.log('p1'+d);
                                document.getElementById('p1'+d).style.display='block';}
                            ,300,dest.toString());
                this.setState({g_state:'roll',p1_loc:dest});                
            }
            else    
                this.setState({finish:'p1'});
        }
        
        

    }


    modeSelect(mode){
        this.setState({game_mode:mode,disp_modal:false});        
    }

    getRolled(d){
        // console.log(parseInt(d[d.length-1]));
        this.setState({g_state:'decide',rolled_num:parseInt(d[d.length-1])});
    }

    roll1(){
        if(this.state.g_state=='start' || this.state.g_state =='roll'){
            let rnd = Math.random();
            let choice;
            if (rnd<0.33)
                choice='dice1';
            else if(rnd>=0.33 && rnd <=0.66)
                choice='dice2';
            else
                choice='dice3';
            let d1=document.getElementById('dice1');
            let d2=document.getElementById('dice2');
            let d3=document.getElementById('dice3');
            d1.style.display='none';
            d2.style.display='none';
            d3.style.display='none';
            document.getElementById('dice-gif').style.display='block';
            // console.log(document.getElementById('dice-gif').style.display);
            setTimeout((d)=>{            
                document.getElementById('dice-gif').style.display='none';
                document.getElementById(d).style.display='block';
            },1200,choice);
            setTimeout(this.getRolled.bind(this),1300,choice);
        }
        
    }
    renderGameOver(){
        if(this.state.finish=='p1'){
            return(
                <div id='end'>
                    <div className='food' style={{backgroundImage:'url(../images/Pieces/Kid_win.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                    </div>
                </div>
            );
        }
        else
            return(<div></div>);
    }
    renderp1char(){
        return(
            <div id='p1-start' >
                <div id='p1-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Kid.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                </div>
            </div>
        );
    }
    renderp2char(){
        return(
            <div id='p2-start' >
                <div id='p2-char-0' className='food' style={{backgroundImage:'url(../images/Pieces/Robot.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>
                </div>
            </div>
        );
    }
    renderChoice(){
        if(this.state.g_state=='decide')
            return(
                <div>
                    <div id='yes' onClick={this.go.bind(this)}>
                    </div>
                    <div id='no'>
                    </div>
                </div>
                
            );
        else
            return(<div></div>);
    }

    renderGameMessages(){
        return(
            <div id='game-2-msg-wrapper'>
                <div id='game-2-msg'>
                    <strong>Player 1 Turn</strong>
                </div>
            </div>
        );
    }

    renderPlates(){
        const board_items = this.board.map((obj)=><Plates key={obj.type+obj.val} val={obj.val} type={obj.type} id={this.board.indexOf(obj)+1}/>);        
        return(
            <div>
                {board_items}
            </div>
            
        );        
    }
    render(){
        return(
            <div className='game-2-area'>
                <Modal show={this.state.disp_modal} onHide={this.handleClose.bind(this)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose Game Mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                                                       
                        Play against the Computer or a Friend                                                          
                    </Modal.Body>
                    <Modal.Footer style={{textAlign:'center'}}>
                    <Container>                            
                            <Row className="justify-content-md-center">
                                <Col md={12} xs={12} sm={12} lg={12}>
                                    <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="primary" onClick={this.modeSelect.bind(this,'pvp')}>
                                        PVP
                                    </Button>
                                    <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="info" onClick={this.modeSelect.bind(this,'pvc')}>
                                        PVC
                                    </Button>
                                </Col>
                            </Row>
                        </Container>                        
                    </Modal.Footer>
                </Modal>
                {this.renderPlates()}
                {this.renderChoice()} 
                {this.renderGameMessages()}
                {this.renderp1char()}
                {this.renderp2char()} 
                {this.renderGameOver()}              
                <div id='p1char'>
                </div>
                <div id='p2char'> 
                </div>
                <div id='dice1' onClick={this.roll1}>
                </div>
                <div id='dice2' onClick={this.roll1}>
                </div>
                <div id='dice3' onClick={this.roll1}>                
                </div>
                <div id='dice-gif'></div> 
                <div id='end-flag'>
                </div>               
                {/* <div id='yes'>
                </div>
                <div id='no'>
                </div> */}
                <div id='back'>
                </div>
                <div id='p1-health'>
                    <ProgressBar animated striped variant='danger' now={this.state.p1_h}></ProgressBar>
                </div>
                <div id='p2-health'>
                    <ProgressBar animated striped variant='danger' now={this.state.p2_h}></ProgressBar>
                </div>
            </div>
        );
    }
}

export {Game2}