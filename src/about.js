import React from 'react';
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap';
class About extends React.Component {
    constructor(props) {
        super(props);
    }
    // Bootstrap the body element once the DOM is rendered
    componentDidMount() {
        let bod = document.getElementById('bod');

        if(bod)
            bod.classList.add('bod1');
        
    }
    render() {
        return (
            <div>
                <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fill variant="tabs" defaultActiveKey="/about" variant="pills">
                        <Nav.Item id='active'>
                            <Nav.Link  href="/">Home</Nav.Link>
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
                        <Nav.Item>
                            <Nav.Link href="/about">About us</Nav.Link>
                        </Nav.Item>                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>                   
                </div>
                <section id="hero">
                    <Container style={{marginTop:'100px'}}>
                        <Row>                            
                            <Col xs={12} md={12} lg={12} style={{textAlign:'center'}}>
                                <div className="img">
                                    <img src="../images/About_Us_4.png" alt="Logo" />
                                </div>
                            </Col>
                        </Row>
                        
                        {/* <Row style={{color:'white',marginTop:'45px'}}>                           
                            <Col xs={'auto'} md={'auto'} lg={'auto'} style={{textAlign:'center'}}>
                                asri003@student.monash.edu
                            </Col>
                            <Col xs={'auto'} md={'auto'} lg={'auto'} style={{textAlign:'center'}}>
                                wshi0004@student.monash.edu
                            </Col>
                            <Col xs={'auto'} md={'auto'} lg={'auto'} style={{textAlign:'center'}}>
                                lwan384@student.monash.edu
                            </Col>
                            <Col xs={'auto'} md={'auto'} lg={'auto'} style={{textAlign:'center'}}>
                                yxuu0042@student.monash.edu
                            </Col>
                        </Row> */}
                    </Container>                    
                </section>
            </div>
        );
    }
}

export {About}