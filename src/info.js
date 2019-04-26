import React from 'react';
import {Container,Row,Col,Pagination,Carousel,Navbar,Nav, ButtonGroup,Button} from 'react-bootstrap';

class Info extends React.Component{
    constructor(props){        
        super(props);
        this.state={section_id:this.props.section_id} 
        //this.updateActive = this.updateActive.bind(this);
        // this.selectNext = this.selectNext.bind(this);
        // this.selectPrev = this.selectNext.bind(this);       
    }
    updateActive(sec_id){
        console.log(sec_id);
        if(sec_id>=0 && sec_id <=3)
            this.setState({section_id:sec_id});
    }
    // selectNext(){
    //     this.setState((old_state)=>( {section_id:old_state.section_id++} ));
    // }
    // selectPrev(){
    //     this.setState((old_state)=>( {section_id:old_state.section_id--} ));        
    // }
    handleSelect(selectedIndex, e) {        
    }
    renderButtons(){
        return(
        <div style={{textAlign:'center'}}>
            <Button variant='outline-info' disabled={this.state.section_id == 0} onClick={this.updateActive.bind(this,(parseInt(this.state.section_id)-1))}> {'<<'}  </Button>
            <Button variant='outline-info' style={{marginLeft:'20px',marginRight:'20px'}} onClick={()=>{window.location.href = '/'}}>Home</Button>
            <Button variant='outline-info' disabled={this.state.section_id == 3} onClick={this.updateActive.bind(this,(parseInt(this.state.section_id)+1))}>  {'>>'} </Button>
        </div>)
        ; 
    }
    renderPagination(){
        return(
            <Pagination style={{textAlign:'center'}}>                           
                <Pagination.Item onClick={this.updateActive.bind(this,0)} style={{display:'inline-block'}} active={this.state.section_id==0} >{1}</Pagination.Item>                
                <Pagination.Item onClick={this.updateActive.bind(this,1)} style={{display:'inline-block'}} active={this.state.section_id==1} >{2}</Pagination.Item>
                <Pagination.Item onClick={this.updateActive.bind(this,2)} style={{display:'inline-block'}} active={this.state.section_id==2} >{3}</Pagination.Item>
                <Pagination.Item onClick={this.updateActive.bind(this,3)} style={{display:'inline-block'}} active={this.state.section_id==3} >{4}</Pagination.Item>                
            </Pagination> 
        );
    }
    render(){
        return(
            <div>
                 <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fill variant="tabs" defaultActiveKey="/info" variant="pills">
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
                            <Nav.Link href="/games">Game Zone</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About us</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>                   
                </div>
                <Container style={{marginTop:'20px',marginBottom:'20px'}}>
                    <Row>
                        <Col>
                        <Carousel onSelect={this.handleSelect} interval={null} wrap={false} indicators={false} controls={false} activeIndex={this.state.section_id}>
                                <Carousel.Item>                                    
                                    <h1 style={{textAlign:'center',color:'white'}}>
                                        CHILDHOOD OBESITY IS ON THE RISE!
                                    </h1>
                                    <Row style={{textAlign:'center'}}>
                                        <Col sm={12} md={12} lg={6} className='flex-wrap info-text' style={{marginBottom:'20px'}}>
                                            <div  style={{paddingLeft:'7px',paddingRight:'7px'}}>
                                                <p style={{textAlign:'justify',paddingTop:'0',color:'white'}}>
                                                    In 2014-15, 
                                                        <strong style={{color:'#ff5542'}}> 20%</strong> children aged 2-4 were either overweight or obese and about 
                                                        <strong style={{color:'#ff5542'}}> 1 in 4 (27%)</strong> children aged 5-17 were either overweight or obese. 
                                                    The rate of obesity increases with age and girls are affected the most.                                                    
                                                </p>

                                                <p style={{textAlign:'justify',color:'white'}}>
                                                Children are considered over weight if their Body Mass Index (BMI) is in the range 25 to 29.9. Children with BMI 30 or greater are considered obese.
                                                </p>

                                                <p style={{textAlign:'justify',color:'white'}}>
                                                <strong style={{color:'#ff5542'}}>80% </strong> 
                                                of overweight and obese children retain their problems as they grow up as adults.
                                                </p>

                                                <p style={{textAlign:'justify',color:'white'}}>
                                                The trend of childhood obesity has 
                                                <strong style={{color:'#ff5542'}}> consistently  
                                                increased </strong> through the years. 
                                                In 2017, about  <strong style={{color:'#ff5542'}}>25-30%</strong> of children aged 2-11 suffered from obesity or overweight issues.
                                                </p>
                                            </div>                                          
                                        </Col>
                                        <Col sm={12} md={12} lg={6} style={{marginBottom:'20px'}}>
                                            <img
                                                className="d-block w-100"
                                                src="../images/Visuals/obesity-trend.jpg?text=First slide&bg=373940"
                                                alt="First slide"
                                            /> 
                                        </Col>                                        
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h1 style={{textAlign:'center',color:'white'}}>
                                        CHILDREN ARE NOT EATING ENOUGH VEGETABLES!
                                    </h1>
                                    <Row style={{textAlign:'center'}}>
                                        <Col sm={12} md={12} lg={6} className='flex-wrap info-text' style={{marginBottom:'20px'}}>
                                            <div  style={{paddingLeft:'7px',paddingRight:'7px'}}>
                                                <p style={{textAlign:'justify',paddingTop:'0',color:'white'}}>
                                                    World Health Organization recommends at least <strong style={{color:'#46cc67'}}> 4 </strong> 
                                                    servings or <strong style={{color:'#46cc67'}}> 340g</strong> of vegetables 
                                                    for daily consumption for 4-8 years old children.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    Data from Australian Bureau of Statistics indicates nearly 
                                                     <strong style={{color:'#ff5542'}}> 96% </strong>  
                                                    of children aged 4-8 years
                                                     are  <strong style={{color:'#ff5542'}}>NOT</strong> getting the minimum recommended intake of vegetables on a daily basis.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    About  <strong style={{color:'#ff5542'}}>15%</strong> of children get less than half a serving of vegetables every day. This is only <strong style={{color:'#ff5542'}}>1/8th</strong> of the recommended intake.
                                                </p>
                                            </div>                                          
                                        </Col>
                                        <Col sm={12} md={12} lg={6} style={{marginBottom:'20px'}} >
                                            <img
                                                className="d-block w-100"
                                                src="../images/Visuals/consumption-of-foods.jpg?text=First slide&bg=373940"
                                                alt="First slide"
                                            /> 
                                        </Col>                                        
                                    </Row>                                   
                                </Carousel.Item>
                                <Carousel.Item>
                                <h1 style={{textAlign:'center',color:'white'}}>
                                    WHY DO CHILDREN REFUSE TO EAT HEALTHY FOOD?
                                    </h1>
                                    <Row style={{textAlign:'center'}}>
                                        <Col sm={12} md={12} lg={6} className='flex-wrap info-text' style={{marginBottom:'20px'}}>
                                            <div  style={{paddingLeft:'7px',paddingRight:'7px'}}>
                                                <p style={{textAlign:'justify',paddingTop:'0',color:'white'}}>
                                                We decide what we’re going to eat based on our senses. Our choice of foods is based 
                                                on how it looks, how it smells, how it feels and how it tastes.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    Junk foods are energy dense. They trigger an increased appetite in children due to our primal instincts to survive. 
                                                    With everyday exposure to junk foods, kids develop an aversion to more healthy alternatives like vegetables.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    Children tend to continue eating junk food even after they feel full. The reward children feel
                                                     after eating junk foods is a huge motivation for them
                                                     to demand unhealthy foods instead of healthy foods.
                                                </p>
                                            </div>                                            
                                        </Col>
                                        <Col sm={12} md={12} lg={6} style={{marginBottom:'20px'}} >
                                            <img
                                                className="d-block w-100"
                                                src="../images/Visuals/dataview3.png"
                                                alt="First slide"
                                            /> 
                                        </Col>                                        
                                    </Row>                                   
                                </Carousel.Item>
                                <Carousel.Item>
                                <h1 style={{textAlign:'center',color:'white'}}>
                                    CAN OUR CHILD LEARN TO LIKE HEALTHY FOODS?
                                    </h1>
                                    <Row style={{textAlign:'center'}}>
                                        <Col sm={12} md={12} lg={6} className='flex-wrap info-text' style={{marginBottom:'20px'}}>
                                            <div  style={{paddingLeft:'7px',paddingRight:'7px'}}>
                                                <p style={{textAlign:'justify',paddingTop:'0',color:'white'}}>
                                                Children can be educated to choose healthy foods by increased rewards for eating them. If external incentives apart 
                                                from the satisfaction of eating healthy foods outweigh the satisfaction
                                                 of eating unhealthy foods, children voluntarily choose to eat healthily.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    Games are very good rewarding mechanisms that can be used to correct and shape children's behaviour.
                                                    </p>
                                                    <p style={{textAlign:'justify',color:'white'}}>
                                                    We have designed 3 interesting video games, which teach kids to identify healthy and unhealthy foods.
                                                    The games provide rewards for choosing to eat healthy foods and penalise for eating unhealthy foods. 
                                                    This provides the incentive to slowly reduce the resistance in children to eat healthy foods.
                                                </p>
                                            </div>                                            
                                        </Col>
                                        <Col sm={12} md={12} lg={6} style={{marginBottom:'20px'}} >
                                            <img
                                                className="d-block w-100"
                                                src="../images/Visuals/dataview4.png?text=First slide&bg=373940"
                                                alt="First slide"
                                            /> 
                                        </Col>                                        
                                    </Row>
                                          
                                </Carousel.Item>
                            </Carousel>                                 
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} sm={12} md='auto'>
                        {this.renderButtons()}
                        </Col>
                    </Row>                
                </Container>               
            </div>
        );
    }
    componentDidMount(){
        let bod = document.getElementById('bod');
        if(bod)
            bod.classList.add('bod2');        
    }
}

export {Info}