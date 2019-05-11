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
                <p style={{fontSize:'1.5em',color:'white',textAlign:'center'}}>Recommended Servers per day {srv[0].ServesValue}</p>
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
    renderproptext(){
        if(this.props.section_id=='0')
            return(
                <Container style={{backgroundColor:'rgba(40,40,40,0.75)',marginTop:"20px",marginBottom:'35px',paddingBottom:'30px'}}>
                <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                        <Col md={'auto'} xs={12} sm={12} lg={'auto'}>
                           <p style={{textDecorationStyle:'none',fontSize:'1.5em',color:'white'}}>Encouraging healthy eating habits</p>
                        </Col>
                    </Row>
                    <Row className='justify-cotent-md-center'>
                    <Col  md={'auto'} xs={12} sm={12} lg={'auto'}>
                    <p style={{textAlign:'justify',color:'white',fontSize:'1em'}}>Teaching your child how to eat healthily now means they will be
                    more likely to make 
                    their own healthy choices as they get older.
                    The Australian Dietary Guidelines recommend children should enjoy a wide variety 
                    of foods from these five food groups:
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>1. Vegetables, legumes and beans</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px',fontSize:'1em'}}>2. Fruits</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px',fontSize:'1em'}}>3. Cereals (including breads, rice, pasta and noodles), preferably wholegrain</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px',fontSize:'1em'}}>4. Lean meat, fish, poultry and/or alternatives</p>
                    <p style={{textAlign:'justify',color:'white',margin:'0px',fontSize:'1em'}}>5. Milks, yoghurts, cheeses and/or alternatives </p>
                    </Col>
                    </Row>
                </Container> 
            );
        if(this.props.section_id=='1')
            return(
            <Container style={{backgroundColor:'rgba(40,40,40,0.75)',marginTop:"20px",marginBottom:'35px',paddingBottom:'30px'}}>
                <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                    <Col md={'12'} xs={12} sm={12} lg={'12'}>
                        <p style={{textDecorationStyle:'none',fontSize:'1.3 em',color:'white'}}>Tips to gain weight healthily</p>
                    </Col>
                </Row>
                <Row className='justify-cotent-md-center'>
                <Col  md={'12'} xs={12} sm={12} lg={'12'}>                    
                <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>1. Avoid pressuring your child to eat. 
                Children will eat when they are hungry. Pressuring
                your child to eat may cause your child to eat less. It is your responsibility to provide
                the food. Your child should decide how much to eat. </p>
                <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>2. Don’t rush meal times. Slow eaters need more time to eat.</p>
                <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>3. Wait until the end of your child’s meal or 
                snack before you offer fluids.
                Fluids can fill up small stomachs fast. When you do offer fluids, choose high calorie 
                drinks such as milkshakes and fruit smoothies made with whole milk, high fat yogurt
                or table cream for more calories. 
                </p>
                <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>4. Choose high calorie foods such as meats, 
                chicken, fatty fish like salmon and meat 
                alternatives like tofu, cheese with 20% or more M.F. (milk fat), cream cheese and full fat 
                yogurt 3% M.F. or higher
                </p>                
                <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>5. Encourage physical activity. 
                Physical exertion stimulates hunger and an increased appetite.</p>
                </Col>
                </Row>
            </Container> 
            );
        if(this.props.section_id=='2'){
            return(
                <Container style={{backgroundColor:'rgba(40,40,40,0.75)',marginTop:"20px",marginBottom:'35px',paddingBottom:'30px'}}>
                    <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                        <Col md={'auto'} xs={12} sm={12} lg={'auto'}>
                            <p style={{textDecorationStyle:'none',fontSize:'1.5em',color:'white',fontSize:'1em'}}>Tips to maintain a healthy weight</p>
                        </Col>
                    </Row>
                    <Row className='justify-cotent-md-center'>
                    <Col  md={'auto'} xs={12} sm={12} lg={'auto'}>                    
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>1. Continue eating healthy foods and encourage children to 
                    be physically active</p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>2. Limit intake of foods high in saturated fat such as many biscuits, cakes, pastries, 
                        pies, processed meats, commercial burgers, pizza, fried foods, potato chips, 
                        crisps and other savoury snacks. 
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>3. Limit intake of foods and drinks containing added sugars such as confectionary, 
                        sugar-sweetened soft drinks and cordials, fruit drinks, vitamin waters energy and
                        sports drinks.
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>4. Replace high fat foods which contain predominately saturated fats such as butter, 
                            cream, cooking margarine, coconut and palm oil with foods which contain 
                            predominately polyunsaturated and monounsaturated fats such as oils, spreads, 
                            nut butters/pastes and avocado. 
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>5. Read labels to choose lower sodium options among similar foods.</p>
                    </Col>
                    </Row>
                </Container> 
            );
        }
        if(this.props.section_id=='3'){
            return(
                <Container style={{backgroundColor:'rgba(40,40,40,0.75)',marginTop:"20px",marginBottom:'35px',paddingBottom:'30px'}}>
                    <Row className='justify-content-md-center' style={{marginTop:'15px'}}>
                        <Col md={'auto'} xs={12} sm={12} lg={'auto'}>
                            <p style={{textDecorationStyle:'none',fontSize:'1.5em',color:'white'}}>Tips to loose weight</p>
                        </Col>
                    </Row>
                    <Row className='justify-cotent-md-center'>
                    <Col  md={'auto'} xs={12} sm={12} lg={'auto'}>                    
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>1. Reduce sedentary time. In addition to encouraging physical activity, help children avoid too much sedentary 
                    time. Although quiet time for reading and homework is fine, limit the time your 
                    children watch television, play video games, or surf the web to no more than 2 
                    hours per day. Instead, encourage your children to find fun activities to do with 
                    family members or on their own that simply involve more activity
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>2. Control what foods children eat. Some foods are not essential in children's diets. These are called 'discretionary 
                    foods' and are generally high in kilojoules, saturated fat, added sugars or added salt.
                    It's OK to eat small amounts of discretionary foods now and then as part of a 
                    balanced diet. But you should try to limit these foods in your child's daily 
                    diet since they can lead to children becoming overweight or developing 
                    diseases in later life.
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>3. Limit intake of foods and drinks containing added sugars such as confectionary, 
                        sugar-sweetened soft drinks and cordials, fruit drinks, vitamin waters energy and
                        sports drinks. Offer water instead.
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>4. Replace high fat foods which contain predominately saturated fats such as butter, 
                            cream, cooking margarine, coconut and palm oil with foods which contain 
                            predominately polyunsaturated and monounsaturated fats such as oils, spreads, 
                            nut butters/pastes and avocado. 
                    </p>
                    <p style={{textAlign:'justify',color:'white',marginBottom:'0px',fontSize:'1em'}}>5. Read labels to choose lower sodium options among similar foods.</p>
                    </Col>
                    </Row>
                </Container> 
            );
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
                                    <Nav.Link href="#">Recommended Diet</Nav.Link>
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
                    <Col md={'12'} xs={'12'} sm={'12'} lg={'12'} style={{paddingBottom:'25px'}}>
                    <Tabs defaultActiveKey="veg" id='tabs-rec'>
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
                {this.renderproptext()}
            </div>
        );
    }
}

export { Recomdenation }