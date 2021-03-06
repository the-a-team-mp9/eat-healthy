import React from "react";
import { Container, Row, Col, Nav, Navbar, Button, Modal, Form } from 'react-bootstrap';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state={disp_modal:true}
    }
    handleClose(){
        this.setState({disp_modal:false});
    }

    showModal(id) {
        if (document.getElementById('modal')) {
            console.log('found modal');
            document.getElementById('modal').style.display = 'block';            
            document.getElementById('modal').style.zIndex = 10;
            if(id==1)
                document.getElementById('caption').style.display = 'block';
            else if(id==2)
                document.getElementById('caption1').style.display = 'block';
            else if(id==3)
            document.getElementById('caption2').style.display = 'block';
        }

    }
    hideModal() {
        if (document.getElementById('modal')) {
            document.getElementById('caption').style.display = 'none';
            document.getElementById('caption1').style.display = 'none';
            document.getElementById('caption2').style.display = 'none';
            document.getElementById('modal').style.display = 'none';            
            document.getElementById('modal').style.zIndex = 0;
        }

    }
    handleSelect(e){        
        if(e.target.checked){
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = 'remember=yes;'+expires+';path=/';
        }
        else{
            document.cookie = 'remember=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
        }    
    }

    render() {
        return (
            <div >
                <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav fill variant="tabs" defaultActiveKey="/games" variant="pills">
                                <Nav.Item id='active'>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/info">Statistics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/bmi">BMI Calculator</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/recommendation">Recommended Diet</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/games">Game Zone</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link href="/about">About us</Nav.Link>
                                </Nav.Item>                                 */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Modal show={this.state.disp_modal} onHide={this.handleClose.bind(this)} centered>    
                <Modal.Header style={{justifyContent:'center',padding:'0px'}}>
                    <h2 style={{color:'black'}}>Note to parents</h2>
                </Modal.Header>                
                    <Modal.Body > 
                        The games are designed to be played in a chronological order.
                        Each game reinforces the learning from the previous game.
                        For best gaming experience, please let your kids play the games in the following order   <br /> <br /> 
                        1. Hunger Game  <br />  2. Eatopoly   <br />   3. Dietecian                                                                                          
                    </Modal.Body>
                    <Modal.Footer style={{justifyContent:'center'}}> 
                        <Button variant='danger' onClick={this.handleClose.bind(this)}>Close</Button>                    
                        <input name='remember' type="checkbox" onChange={this.handleSelect.bind(this)}/>
                        <label style={{marginBottom:'0px'}} htmlFor='remember' >Don't show again</label>                                                               
                    </Modal.Footer>
                </Modal>
                <div className='modal1' id='modal'>
                    <div className='modal1-content' style={{ backgroundColor: "rgba(30,30,30,0.85)", paddingBottom: '20px', maxWidth: '150px' }} id='caption'>
                        <div className='modfull'>
                            <h2>
                                Game 1
                            </h2>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/tutorial1'}}>                                
                                    Watch Tutorial                            
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-1'}}>
                                Jump to game
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-1-results'}}>
                                 Game scores
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>
                    </div>
                    <div className='modal1-content' style={{ backgroundColor: "rgba(30,30,30,0.85)", paddingBottom: '20px', maxWidth: '150px' }} id='caption1'>
                        <div className='modfull'>
                            <h2>
                                Game 2
                            </h2>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/tutorial2'}}>                                
                                    Watch Tutorial                            
                            </Button>
                        </div>                        
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-2'}}>
                                 Jump to game
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>
                    </div>
                    <div id='caption2' className='modal1-content' style={{ backgroundColor: "rgba(30,30,30,0.85)", paddingBottom: '20px', maxWidth: '150px' }} >
                        <div className='modfull'>
                            <h2>
                                Game 3
                            </h2>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/tutorial3'}}>                                
                                    Watch Tutorial                            
                            </Button>
                        </div>                        
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-3'}}>
                                 Jump to game
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>
                    </div>
                </div>                                
                <section style={{paddingTop:'0px'}} className=" game" id="game">
                    <Container style={{ textAlign: 'center' }}> 
                        {/* <Row className='justify-content-md-center'>
                            <Col style={{color:'white',fontSize:'1.2em',marginBottom:'30px'}} md={'auto'} sm={'auto'} lg={'auto'} >
                            
                            </Col>
                        </Row>                                        */}
                        <Row>
                            <Col xs={12} md={6} lg={4} className=' animated  fadeInUp' style={{ textAlign: 'center',paddingBottom:'20px' }}>
                                <div style={{color:'white'}}>Game 1</div>
                                <div className="img img-responsive">
                                    <div style={{ cursor: 'pointer' }} onClick={this.showModal.bind(this,1)}>
                                        <img src="../images/Game_Icons/Gameicon1.png" alt="Game 2" />
                                    </div>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Hunger Game</h2>
                                <p style={{ textAlign: "center", color: 'white' }}>Learn to identify good foods</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Choose good foods to gain points</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Level up as you eat good foods</p>                                
                            </Col>
                            <Col xs={12} md={6} lg={4} className=' animated  fadeInUp' style={{paddingBottom:'20px'}}>
                                <div style={{color:'white'}}>Game 2</div>
                                <div className="img img-responsive">
                                    <div style={{ cursor: 'pointer' }} onClick={this.showModal.bind(this,2)}>
                                        <img  src="../images/Game_Icons/Game_2_Logo.png" alt="Eatopoly" />
                                    </div>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Eat-opoly</h2>                                
                                <p style={{ textAlign: "center", color: 'white' }}>Roll the dice and earn points by eting healthy foods</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Play with a friend or the computer</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Make up your own startegy to win</p>
                            </Col>
                            <Col xs={12} md={6} lg={4} className=' animated  fadeInUp' style={{paddingBottom:'20px'}}>
                                <div style={{color:'white'}}>Game 3</div>
                                <div className="img img-responsive">
                                    <div style={{ cursor: 'pointer' }} onClick={this.showModal.bind(this,3)}>
                                        <img src="../images/Game_Icons/Game_3_Logo.png" alt="Game 3" />
                                    </div>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Dietician</h2>
                                <p style={{ textAlign: "center", color: 'white' }}>Select breakfast lunch and dinner from a variety of dishes</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Choose a balanced diet to get a high score</p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="clearfix"></div>
                </section>
            </div>
        );
    }
    componentDidMount() {
        // document.cookie = 'remember=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
        if(document.cookie.length!=0){
            console.log(document.cookie);
            var val = document.cookie.split('=');
            val = val[val.length-1];
            if(val=='yes')
            this.setState({disp_modal:false});
        }        
        let bod = document.getElementById('bod');
        
        console.log( document.cookie.length);
        if (bod)
            bod.classList.add('bod1');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;   

        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        // console.log('saf',isSafari);
        // if (height > width) {
        //     if (!(isSafari))
        //         alert('For the best browsing experience, please rotate your device');
        //     else
        //         alert('For a better browsing experience, use chrome browser');
        //     // alert(navigator.userAgent.toLowerCase());

        // }

        // window.addEventListener('resize', function () {
        //     width = window.screen.availWidth;
        //     height = window.screen.availHeight;
        //     if (height > width) {
        //         if (!(isSafari))
        //             alert('For the best browsing experience, please rotate your device');
        //         else
        //             alert('For a better browsing experience, use chrome browser');
        //     }
        // });

    }
}

export { Games }