import React from 'react';
import { Navbar, Nav, Container, Row, Col,ButtonToolbar,ToggleButtonGroup,ToggleButton,Tabs,Tab } from 'react-bootstrap';
import firebase from './firebase'
let db = firebase.firestore();

class Recomdenation extends React.Component {
    constructor(props){
        super(props);
        this.state={gender:'Boy',sugestions_loaded:false,recomm_loaded:false,age:2};
        this.sugestions_data = [];
        this.recomm = [];
    }
    // Bootstrap the body element once the DOM is rendered
    componentDidMount() {
        let bod = document.getElementById('bod');
        let context = this;
        if (bod)
            bod.classList.add('bod1');        
        db.collection('Suggestion').get().then((snap)=>{
            snap.forEach((doc)=>{
                context.sugestions_data.push({'id':doc.id,'data':doc.data()});
            });
            console.log(context.sugestions_data);           
            context.setState({sugestions_loaded:true});           
        });
        db.collection('Recommendation').get().then((snap)=>{
            snap.forEach((doc)=>{
                context.recomm.push(doc.data());
            });
            // console.log(context.recomm);            
            context.setState({recomm_loaded:true});            
        });

    }
    changeGender(e) {
        this.setState({ 'gender': e });
    }    
    handleAgeChange(event){
        const target = event.target;    
        // console.log(parseInt(target.value));    
        this.setState({age:parseInt(target.value)})
        // console.log(age);
        
    }
    renderServe(foodType){  
        // console.log(this.state.age)      
        let srv = this.recomm.filter((obj)=>{
            return(parseInt(obj.AgeStart)==this.state.age && obj.Gender == this.state.gender && obj.FoodType==foodType)
        })
        // console.log(srv,'12');
        if(this.state.recomm_loaded){
            return(
                <p style={{fontSize:'1.3em',color:'white',textAlign:'center'}}>Recommended Servers per day {srv[0].ServesValue}</p>
            );
        }
    }
    renderVegSuggestion(){
        if(this.state.sugestions_loaded){ 
            let htmltext=this.sugestions_data.filter((obj)=>{                
                // console.log(obj.id);
                return obj.id=="Vegetable";
            })[0].data.Suggestion;           
            return(<div dangerouslySetInnerHTML={{__html:htmltext}}>
            </div>);
        }                
    }
    renderFruitSuggestion(){
        if(this.state.sugestions_loaded){
            let htmlText = this.sugestions_data.filter((obj)=>{                
                // console.log(obj.id);
                return obj.id=="Fruit";
            })[0].data.Suggestion;
            return(<div dangerouslySetInnerHTML={{__html:htmlText}}>
                </div>);
        }                
    }
    renderCerealSuggestion(){
        if(this.state.sugestions_loaded){            
            let htmlText=this.sugestions_data.filter((obj)=>{                
                // console.log(obj.id);
                return obj.id=="Grain (Cereal)";
            })[0].data.Suggestion
            return(<div dangerouslySetInnerHTML={{__html:htmlText}}>
                </div>);
        }
    }
    renderMeatSuggestion(){
        if(this.state.sugestions_loaded){
           let htmlText = this.sugestions_data.filter((obj)=>{                
            // console.log(obj.id);
            return obj.id=="Meat";
        })[0].data.Suggestion;
        return(<div dangerouslySetInnerHTML={{__html:htmlText}}>
            </div>);
        }
    }
    renderDairySuggestion(){
        if(this.state.sugestions_loaded){
            let htmlText = this.sugestions_data.filter((obj)=>{                
                // console.log(obj.id);
                return obj.id=="Dairy";
            })[0].data.Suggestion;
            return(<div dangerouslySetInnerHTML={{__html:htmlText}}>
                </div>);
        }
    }
    render() {
        return (
            <div>
                <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav fill variant="tabs" defaultActiveKey="#" variant="pills">
                                <Nav.Item id='active'>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/info">Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/bmi">BMI Calculator</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">Recommendation</Nav.Link>
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
                <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                        <Col md={'auto'} xs={12} sm={12} lg={'auto'}>
                           <p style={{textDecorationStyle:'none',fontSize:'1.5em',color:'white'}}>Recommended Diet</p>
                        </Col>
                    </Row>
                <Container style={{backgroundColor:'rgba(30,30,30,0.85)'}}>                    
                    <Row className='justify-content-md-center' style={{backgroundColor:'rgba(30,30,30,0.85)'}}>
                    <Col md={'auto'} xs={'auto'} sm={'auto'} lg={'auto'}>
                        <label htmlFor='ageGroup' style={{color:'white',paddingRight:'5px'}}>Select Age Group</label>
                        <select id='ageGroup' name='ageGroup' style={{marginTop:'7px'}} onChange={this.handleAgeChange.bind(this)}>                            
                            {/* <option value="select">select</option> */}
                            <option value="2">2-3 years</option>
                            <option value="4">4-8 years</option>
                            <option value="9">9-11 years</option>
                            <option value="12">12-13 years</option>                            
                        </select>
                        </Col>
                        <Col md={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} style={{paddingBottom:'25px'}}>
                        <ButtonToolbar className='cs' >
                                <ToggleButtonGroup type="radio" name="gender" defaultValue={'Boy'} onChange={this.changeGender.bind(this)}>
                                    <ToggleButton className='btn2c' value={'Boy'} variant="info">BOY</ToggleButton>
                                    <ToggleButton className='btn2c' value={'Girl'} variant="info">GIRL</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </Col>                        
                    </Row>
                    <Row className='justify-content-md-center'>
                    <Col md={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} style={{paddingBottom:'25px'}}>
                    <Tabs defaultActiveKey="veg" id="uncontrolled-tab-example">
                        <Tab eventKey="veg" title="Vegetables">
                        {this.renderServe('Vegetable')}
                        <p>One standard serve of vegetables is about 75g or</p>
                        {this.renderVegSuggestion()}
                        </Tab>
                        <Tab eventKey="fruit" title="Fruit" >
                        {this.renderServe('Fruit')}
                            <p>A standard serve of fruit is about 150g or</p>
                            {this.renderFruitSuggestion()}
                        </Tab>
                        <Tab eventKey="grain" title="Grains">
                        {this.renderServe('Grain (Cereal)')}                        
                        <p>One standard serve corresponds to </p>
                        {this.renderCerealSuggestion()}
                        </Tab>
                        <Tab eventKey="meat" title="Meat" >
                        {this.renderServe('Meat')} 
                        <p>One standard serve corresponds to </p>
                            {this.renderMeatSuggestion()}
                        </Tab>
                        <Tab eventKey="dairy" title="Dairy" >
                        {this.renderServe('Dairy')} 
                        <p>One standard serve corresponds to </p>
                        {this.renderDairySuggestion()}
                        </Tab>
                    </Tabs>
                    </Col>                    
                    </Row>
                </Container>  
                <Container style={{backgroundColor:'rgba(40,40,40,0.75)',marginTop:"20px",marginBottom:'15px'}}>
                <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                        <Col md={'auto'} xs={12} sm={12} lg={'auto'}>
                           <p style={{textDecorationStyle:'none',fontSize:'1.2em',color:'white'}}>Encouraging healthy eating habits</p>
                        </Col>
                    </Row>
                    <Row className='justify-cotent-md-center'>
                    <Col  md={'auto'} xs={12} sm={12} lg={'auto'}>
                    <p style={{textAlign:'justify',color:'white'}}>Teaching your child how to eat healthily now means they will be
                    more likely to make 
                    their own healthy choices as they get older.
                    The Australian Dietary Guidelines recommend children should enjoy a wide variety 
                    of foods from these five food groups:
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px'}}>1. Vegetables, legumes and beans</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px'}}>2. Fruits</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px'}}>3. Cereals (including breads, rice, pasta and noodles), preferably wholegrain</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px'}}>4. Lean meat, fish, poultry and/or alternatives</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px'}}>5. Milks, yoghurts, cheeses and/or alternatives </p>
                    </Col>
                    </Row>
                </Container>              
            </div>
        );
    }
}

export { Recomdenation }