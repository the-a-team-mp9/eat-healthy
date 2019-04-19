import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

class ComingSoon extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
            return(

                <div>
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
        
        let width = window.screen.availWidth;
        let height = window.screen.availHeight; 
        let bod = document.getElementById('bod');

        if(bod)
            bod.classList.add('bod');
                

        // if (height>width)
        //     alert('For the best browsing experience, please rotate your device');
        // window.addEventListener('resize', function(){
        //     width = window.screen.availWidth;
        //     height = window.screen.availHeight;
        //     if (height>width)
        //     alert('For the best browsing experience, please rotate your device')});
            

    }

}


export {ComingSoon};