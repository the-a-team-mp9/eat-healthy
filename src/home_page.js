import React from "react";
import { Container, Row, Col, Nav, Navbar,Card,Button } from 'react-bootstrap';

class Home extends React.Component{
    constructor(props){
        super(props);        
    }
    // Bootstrap the body element once the DOM is rendered
    componentDidMount(){        
        let bod = document.getElementById('bod');

        if(bod)
            bod.classList.add('bod');

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
            
    render(){
        return(                               
            <div>
                <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fill variant="tabs" defaultActiveKey="/" variant="pills">
                        <Nav.Item id='active'>
                            <Nav.Link  href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/info">Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/bmi">BMI Calculator</Nav.Link>                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/recommendation">Recommendation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/games">Game Zone</Nav.Link>
                        </Nav.Item>                        
                        <Nav.Item>
                            <Nav.Link href="/about">About us</Nav.Link>
                        </Nav.Item>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>                   
                </div>
                <div style={{paddingTop:'20vh',minHeight:'83vh'}} className='clearfix'>
                    <Container className='align-self-center'>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1 className="animated fadeInDown" style={{ color: 'aliceblue', textAlign: "center" }}> TEACH KIDS TO EAT HEALTHY,</h1>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1 className="animated fadeInDown" style={{ color: 'aliceblue', textAlign: "center" }}> THE WAY THEY LIKE IT.</h1>
                            </Col>                            
                        </Row>
                        
                        <Row className="justify-content-md-center" style={{textAlign:'center',marginBottom:'20px'}}>
                            <Col xs={12} md={12}>
                                <a href="/games" className="learn-more-btn">Jump to Game Zone</a>
                            </Col>                            
                        </Row>
                    </Container>
                </div>                
                    <Container>
                        <Row style={{textAlign:'center'}}>
                            <Col>
                            <a href="#info" style={{color:'#fff'}}>Learn More</a>
								<p></p>
								<span className="fa fa-angle-double-down"  style={{color:'#fff'}}></span>
                            </Col>
                        </Row>
                    </Container>
                <div style={{minHeight:'100vh', paddingBottom:'20px'}} id='info' className='clearfix'>
                    <Container>
                        <Row  >
                        <Col xs={12} md={6} lg={3} >
                            <Card style={{marginTop:'20px'}}>
                                <Card.Img variant="top" src="../images/Cards/inf1.jpg" />
                                <Card.Body >
                                    <Card.Title style={{minHeight:'50px'}}>Obesity Trends</Card.Title>
                                    <Card.Text style={{textAlign:'left',height:'130px'}}>
                                        Victoria ranks first in childhood obesity in all of Australia. Read more 
                                        about the upwards trend in childhood obesity over the years.
                                    </Card.Text>
                                    <Button variant="info" onClick={()=>{window.location.href = '/info'}}> Learn More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{marginTop:'20px'}}>
                                <Card.Img variant="top" src="../images/Cards/inf2.jpg" />
                                <Card.Body >
                                    <Card.Title style={{minHeight:'50px'}}> Vegetable consumption</Card.Title>
                                    <Card.Text style={{textAlign:'left',height:'130px'}}>
                                        About 94% of children don't consume the recommended amount of vegetables. 
                                        Learn more about including vegetables in children's diet.
                                    </Card.Text>
                                    <Button variant="info" onClick={()=>{window.location.href = '/info-1'}}>Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>                        
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{marginTop:'20px'}}>
                                <Card.Img variant="top" src="../images/Cards/inf3.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{minHeight:'50px'}}>Why kids refuse healthy food</Card.Title>
                                    <Card.Text style={{textAlign:'left',height:'130px'}}>
                                        Wondering why children ressist eating healthy despite 
                                        teaching them the imporatance of a healthy diet? 
                                    </Card.Text>
                                    <Button variant="info" onClick={()=>{window.location.href = '/info-2'}}>Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{marginTop:'20px'}}>
                                <Card.Img variant="top" src="../images/Cards/inf4.jpg" />
                                <Card.Body >
                                    <Card.Title style={{minHeight:'50px'}}>Teach kids to eat healthy</Card.Title>
                                    <Card.Text style={{textAlign:'left',height:'130px'}}>
                                    Learn how to teach children to like eating healthy foods instead of forcing them to eat healthy.
                                    </Card.Text>
                                    <Button variant="info" onClick={()=>{window.location.href = '/info-3'}}>Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                </div>   
                <div className='clearfix'></div>                             
            </div>
            
        );
    }
    
}

export {Home}