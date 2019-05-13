import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import {Nav, Navbar,Container,Row,Col} from 'react-bootstrap';



class BMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'height_in':0, 'height': 1, 'weight': 1, 'gender': 'm', 'isCm': true, 'isKg': true, 'show': false, 'bmi':0, cat:'Healthy'};
        //Bind all class methods to the context (this)
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.changeHUnit = this.changeHUnit.bind(this);
        this.changeWUnit = this.changeWUnit.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    // Track changes made to height in the form (2 way data binding)
    handleHeightChange(e) {
        // console.log(e.target.value);
        this.setState({ 'height': e.target.value });
        
    }
    handleHeightChangeFt(e){
        this.setState({ 'height': parseInt(e.target.value)*12 });
    }
    handleHeightChangeIn(e){
        this.setState({ 'height_in': parseInt(e.target.value) });
    }
    // Track changes made to weight in the form (2 way data binding)
    handleWeightChange(e) {
        this.setState({ 'weight': e.target.value });
    }

    // Return the css class used for the text for the word that displays the category of the BMI 
    getClass(){
        if(this.state.cat=='Underweight' || this.state.cat == 'Overweight')
            return 'info1'
        else if(this.state.cat == 'Obese')
            return 'danger1'
        return 'success1'
    }
    renderHeightInput(){
        if(this.state.isCm)
            return (<div>
                <label id='hlabel' htmlFor='height' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                    Height
                </label>
                {/* <input onChange={this.handleHeightChange} id='height' type='number' step='0.01' min='5' required max='170' placeholder='height' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black',maxWidth:'70px' }} /> */}
                <input onChange={this.handleHeightChange} id='height' type='number' step='0.01'
                    min='5' required max='170' placeholder='height'
                    style={{ width: '50%', left: '25%', marginTop: '15px', color: 'black', maxWidth: '90px' }} />
                            <ButtonToolbar className='cs'>
                    <ToggleButtonGroup type="radio" name="height" defaultValue={true} onChange={this.changeHUnit}>
                        <ToggleButton className='pad' value={true} variant='info' className='btn1c'>cm</ToggleButton>
                        <ToggleButton value={false} variant='info' className='btn1c'>ft</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
            );
        else   
            return(
            <div>
                 <label id='hlabel' htmlFor='heightft' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                    Height
                </label>
                <input onChange={this.handleHeightChangeFt.bind(this)} id='heightft' type='number' 
                min='1' required max='6' placeholder='ft' 
                style={{ width: '25%', left: '25%', marginTop: '15px',color:'black',maxWidth:'40px' }} />

                <input onChange={this.handleHeightChangeIn.bind(this)} id='heightininches' type='number' 
                min='0' required max='12' placeholder='in' 
                style={{ width: '25%', left: '50%', marginTop: '15px',marginLeft:'10px',color:'black',maxWidth:'40px' }} />
                <ButtonToolbar className='cs'>
                    <ToggleButtonGroup type="radio" name="height" defaultValue={false} onChange={this.changeHUnit}>
                        <ToggleButton className='pad' value={true} variant='info' className='btn1c'>cm</ToggleButton>
                        <ToggleButton value={false} variant='info' className='btn1c'>ft</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
                
            );
    }    
    // Triggered on submit. Convert the height and weight 
    // to SI units and calculate the BMI 
    handleSubmit(event) {        
        // console.log(this.state);
        let hinMeters;
        let winKg;
        let bmiCat;
        if(this.state.isCm)
            hinMeters = 0.01* this.state.height;
        else{
            console.log(this.state.height + this.state.height_in);
            hinMeters = 0.01*(this.state.height + this.state.height_in)*2.54;   
        }
                     
        if(this.state.isKg)
            winKg = this.state.weight;
        else
            winKg = this.state.weight*0.453592;
        event.preventDefault();
        console.log('hinm',hinMeters);
        // console.log('winK',winKg);
        let bMi = (winKg/(hinMeters*hinMeters)).toFixed(2);
        if(bMi<14.3)
            bmiCat='Underweight';
        else if(bMi>=14.3 && bMi<17.9)
            bmiCat='Healthy';
        else if(bMi>=17.9 && bMi<20)
            bmiCat='Overweight';
        else
            bmiCat='Obese';
        this.setState({'bmi':bMi,'cat':bmiCat});
        this.showModal();
        
    }

    // Track changes to unit used for height
    changeHUnit(e) {
        // console.log(e);
        this.setState({ 'isCm': e });
    }
    // Track changes to unit used for weight
    changeWUnit(e) {
        // console.log(e);
        this.setState({ 'isKg': e });
    }
    // Track changes to gender
    changeGender(e) {
        this.setState({ 'gender': e });
    }

    handleClose() {
        this.setState({ show: false });
    }

    //Manipulate DOM to display Modal
    showModal(){
        if(document.getElementById('modal')){
            // console.log('found modal');
            document.getElementById('modal').style.display = 'block';
            document.getElementById('caption').style.display = 'block';
            document.getElementById('modal').style.zIndex = 10;
        }
        
    }
    //Manipulate DOM to hide Modal
    hideModal(){
        if(document.getElementById('modal')){
            document.getElementById('modal').style.display = 'none';
            document.getElementById('caption').style.display = 'none';
            document.getElementById('modal').style.zIndex = 0;
        }
        
    }
    renderBMICatText(){
        if(this.state.cat=='Underweight')
        {
            if(this.state.gender=='m')
                return(
                    <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                        Your child may weigh less than he ideally should. You may need to consider ways for your child to gain weight to bring your BMI to between 14.3 to 17.9.
                        It is still important to eat a healthy diet - you should still avoid junk food. You might need to consult a pediatrician for a diet plan. 
                    </p>
                );
            return(
                    <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                        Your child may weigh less than he ideally should. You may need to consider ways for your child to gain weight to bring your BMI to between 14.3 to 17.9.
                        It is still important to maintain a healthy diet for your child. You should still avoid junk food. You might need to consult a pediatrician for a diet plan. 
                    </p>
                );
            
        }
        else if(this.state.cat=='Healthy'){
            if(this.state.gender=='m'){
                return(
                    <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                        Your child's BMI is currently within what is considered a healthy weight range.
                        Being a healthy weight has important benefits, not only on how he feels,
                        but also to help reduce the risk of heart disease, diabetes and a range of
                        other conditions in the future.
                    </p>
                );
            }
            return(
                <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                    Your child's BMI is currently within what is considered a healthy weight range.
                    Being a healthy weight has important benefits, not only on how she feels,
                    but also to help reduce the risk of heart disease, diabetes and a range of
                    other conditions in the future.
                </p>
            );
            
        }
        else if(this.state.cat=='Overweight'){
            if(this.state.gender=='m'){
                return(
                    <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                        Your child's weight appears to be a bit above the ideal range. You should consider helping him loose weight. 
                        To lose weight, you will generally need to decrease the amount of energy (food) in the diet.
                        You could encorage him to drink more water and increase the amount of vegetables in his diet.
                        And do not be disheartened or de-motivated if progress is slow as you try to get his weight within a healthy range. 
    
                    </p>
                );
            }
            return(
                <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                    Your child's weight appears to be a bit above the ideal range. You should consider helping her loose weight. 
                    To lose weight, you will generally need to decrease the amount of energy (food) in the diet.
                    You could encorage her to drink more water and increase the amount of vegetables in her diet.
                    And do not be disheartened or de-motivated if progress is slow as you try to get her weight within a healthy range. 
                </p>
            );
            
        }
        else if(this.state.cat=='Obese'){
            if(this.state.gender=='m'){
                return(
                    <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                        Your child currently weighs more than what is ideal . This puts his health at
                        risk and is of increasing concern as he grows up. Click on Recommended Diet
                        to learn more about recommendations on eating and tips to loose weight.
                    </p>
                );
            }
            return(
                <p style={{color:'black',textAlign:'justify',paddingLeft:'5px',paddingRight:'5px'}}>
                    Your child currently weighs more than what is ideal . This puts her health at
                    risk and is of increasing concern as she grows up. Click on Recommended Diet
                    to learn more about recommendations on eating and tips to loose weight.
                </p>
            );
        }
            
    }
    redirect(){
        if(this.state.cat=='Underweight')
            window.location.href='/recommendation-u'
        else if(this.state.cat=='Healthy')
            window.location.href='/recommendation-h'
        else if(this.state.cat == 'Overweight' || this.state.cat == 'Obese')
            window.location.href='/recommendation-o'
    }
    render() {
        return (
            <div >
                
                <div id='navbar' >
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Eat healthy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fill variant="tabs" defaultActiveKey="/bmi" variant="pills">
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
            <div className='modal1' id='modal'>
                <div className='modal1-content' id='caption'>
                    <div className='modfull'>
                        BMI = {this.state.bmi}
                    </div>
                    <div className='modfull'>
                        BMI Category <span className={this.getClass()}><strong>{this.state.cat}</strong></span>
                    </div>
                    {this.renderBMICatText()}
                    <div className='modfull'>
                        <Button style={{marginLeft:'10px',marginRight:'10px'}} variant='primary' onClick={this.redirect.bind(this)}> Recommended Diet
                        </Button >
                        <Button style={{marginLeft:'10px',marginRight:'10px'}} variant='danger' onClick={this.hideModal}>Close
                        </Button>
                    </div>                                   
                </div>
            </div>                                          
                <div className='bmi-container' style={{zIndex:'2',marginBottom:'20px'}}>
                    <div className='bmi-card' style={{marginTop:'20px'}}>
                        <div className='card1-h'>
                            Calculate BMI
                        </div>

                    </div>
                    <form className='form-card' onSubmit={this.handleSubmit} >
                        {this.renderHeightInput()}                        
                        <div style={{ marginTop: '20px' }}>
                            <label id='wlabel' htmlFor='weight' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                                Weight
                                    </label>
                            <input onChange={this.handleWeightChange} id='weight' type='number' min='1' step='0.01' required max='180' placeholder='weight' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black', maxWidth:'90px' }} />
                            <ButtonToolbar className='cs'>
                                <ToggleButtonGroup type="radio" name="weight" defaultValue={true} onChange={this.changeWUnit}>
                                    <ToggleButton className='btn1c' value={false} variant='info' >lb</ToggleButton>
                                    <ToggleButton className='btn1c' value={true} variant="info">kg</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>

                        <div>
                            <ButtonToolbar className='cs' style={{ marginTop: '30px' }}>
                                <ToggleButtonGroup type="radio" name="gender" defaultValue={'m'} onChange={this.changeGender}>
                                    <ToggleButton className='btn2c' value={'m'} variant="info">BOY</ToggleButton>
                                    <ToggleButton className='btn2c' value={'f'} variant="info">GIRL</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <div style={{ marginTop: '30px' ,marginBottom:'10px'}}>
                            <input className='btn btn-success btn-lg' name='submit' type='submit' value='Calculate BMI' />
                        </div>
                    </form>
                </div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={8} lg={6} style={{backgroundColor:'rgba(44, 44, 44,0.85)'}}>
                        <p style={{color:'white'}}>
                            B.M.I is the acronym for Body Mass Index. It is widely used as an indicator for obesity.
                            BMI can vary rapidly in children due to a higher physical growth rate compared to teenagers.
                            The values of BMI used to classify an individual into categories are different for different age groups.
                        </p>
                        <p style={{color:'white'}}>                            
                            The value of BMI is used to categorise the obesity of children (in the age group 4-8 years) as                    
                        </p>
                        <p style={{color:'white', margin:'0px'}}>
                            1. Under weight : BMI {' < '} 14.3
                        </p>
                        <p style={{color:'white',margin:'0px'}}>
                            2. Healthy : BMI >= 14.3 to {' < '} 17.9
                        </p>
                        <p style={{color:'white',margin:'0px'}}>
                            3. Overweight : BMI > 17.9 {' <= '} 20
                        </p>
                        <p style={{color:'white',margin:'0px'}}>
                            4. Obese : BMI > 20
                        </p>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }

    // Bootstrap the body element once the DOM is rendered
    componentDidMount(){        
        let bod = document.getElementById('bod');

        if(bod)
            bod.classList.add('bod');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;  
    }
}

export { BMI };