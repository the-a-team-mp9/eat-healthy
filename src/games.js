import React from "react";
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';

class Games extends React.Component {
    constructor(props) {
        super(props);
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
        }

    }
    hideModal() {
        if (document.getElementById('modal')) {
            document.getElementById('caption').style.display = 'none';
            document.getElementById('caption1').style.display = 'none';
            document.getElementById('modal').style.display = 'none';            
            document.getElementById('modal').style.zIndex = 0;
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
                                    <Nav.Link href="/info">Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/games">Game Zone</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#about">About us</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='modal1' id='modal'>
                    <div className='modal1-content' style={{ backgroundColor: "#61727b", paddingBottom: '20px', maxWidth: '150px' }} id='caption'>
                        <div className='modfull'>
                            <h2>
                                Game 1
                            </h2>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/tutorial1'}}>                                
                                    View Tutorial                            
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='success' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-1'}}>
                                Jump to game
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>
                    </div>
                    <div className='modal1-content' style={{ backgroundColor: "#61727b", paddingBottom: '20px', maxWidth: '150px' }} id='caption1'>
                        <div className='modfull'>
                            <h2>
                                Game 1
                            </h2>
                        </div>
                        <div className='modfull'>
                            <Button variant='info' style={{ width: '115px' }} onClick={()=>{window.location.href='/tutorial2'}}>                                
                                    View Tutorial                            
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='success' style={{ width: '115px' }} onClick={()=>{window.location.href='/game-2'}}>
                                 Jump to game
                            </Button>
                        </div>
                        <div className='modfull'>
                            <Button variant='danger' onClick={this.hideModal}>Close
                            </Button>
                        </div>
                    </div>
                </div>
                <section className=" game" id="game">
                    <Container style={{ textAlign: 'center' }}>
                        <Row>
                            <Col xs={12} md={6} lg={4} className='wp2 animated fadeInUp' style={{ textAlign: 'center',paddingBottom:'20px' }}>
                                <div className="img">
                                    <div style={{ cursor: 'pointer' }} onClick={this.showModal.bind(this,1)}>
                                        <img src="../images/Game_Icons/Gameicon1.png" alt="Game 1" />
                                    </div>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Eat Healthy</h2>
                                <p style={{ textAlign: "center", color: 'white' }}>Learn to identify good foods</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Choose good foods to gain points</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Level up as you eat good foods</p>
                                <a href='/game-1-results' className='learn-more-btn' style={{ marginTop: '30px' }}>
                                    Game 1 Scores
                                    </a>
                            </Col>
                            <Col xs={12} md={6} lg={4} className='wp2 animated fadeInUp' style={{paddingBottom:'20px'}}>
                                <div className="img">
                                    <div style={{ cursor: 'pointer' }} onClick={this.showModal.bind(this,2)}>
                                        <img src="../images/Game_Icons/Game_2_Logo.png" alt="Eatopoly" />
                                    </div>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Eat-opoly</h2>                                
                                <p style={{ textAlign: "center", color: 'white' }}>Roll the dice and earn points by eting healthy foods</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Play with a friend or the computer</p>
                                <p style={{ textAlign: "center", color: 'white' }}>Make up your own startegy to win</p>
                            </Col>
                            <Col xs={12} md={6} lg={4} className='wp2 animated fadeInUp' style={{paddingBottom:'20px'}}>
                                <div className="img">
                                    <a href="coming-soon">
                                        <img src="../images/Game_Icons/Gameicon2.png" alt="Game 2" />
                                    </a>
                                </div>
                                <h2 style={{ textAlign: "center" }}>Coming Soon...</h2>
                                <p></p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="clearfix"></div>
                </section>
            </div>
        );
    }
    componentDidMount() {        
        let bod = document.getElementById('bod');

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