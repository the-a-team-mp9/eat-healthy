import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import {Nav, Navbar} from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';
//import Container from 'react-bootstrap/Container';



class BMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'height': 1, 'weight': 1, 'gender': 'm', 'isCm': true, 'isKg': true, 'show': false, 'bmi':0, cat:'Normal'};
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.changeHUnit = this.changeHUnit.bind(this);
        this.changeWUnit = this.changeWUnit.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    handleHeightChange(e) {
        // console.log(e.target.value);
        this.setState({ 'height': e.target.value });
        //alert(e);
    }
    handleWeightChange(e) {
        this.setState({ 'weight': e.target.value });
    }
    getClass(){
        if(this.state.cat=='Underweight' || this.state.cat == 'Overweight')
            return 'info1'
        else if(this.state.cat == 'Obese')
            return 'danger1'
        return 'success1'
    }
    handleSubmit(event) {        
        // console.log(this.state);
        let hinMeters;
        let winKg;
        let bmiCat;
        if(this.state.isCm)
            hinMeters = 0.01* this.state.height;
        else
            hinMeters = 0.01*this.state.height*2.54;            
        if(this.state.isKg)
            winKg = this.state.weight;
        else
            winKg = this.state.weight*0.453592;
        event.preventDefault();
        // console.log('hinm',hinMeters);
        // console.log('winK',winKg);
        let bMi = (winKg/(hinMeters*hinMeters)).toFixed(2);
        if(bMi<18.5)
            bmiCat='Underweight';
        else if(bMi>=18.5 && bMi<25)
            bmiCat='Normal';
        else if(bMi>=25 && bMi<30)
            bmiCat='Overweight';
        else
            bmiCat='Obese';
        this.setState({'bmi':bMi,'cat':bmiCat});
        this.showModal();
        
    }
    changeHUnit(e) {
        // console.log(e);
        this.setState({ 'isCm': e });
    }
    changeWUnit(e) {
        // console.log(e);
        this.setState({ 'isKg': e });
    }
    changeGender(e) {
        this.setState({ 'gender': e });
    }

    handleClose() {
        this.setState({ show: false });
    }
    showModal(){
        if(document.getElementById('modal')){
            // console.log('found modal');
            document.getElementById('modal').style.display = 'block';
            document.getElementById('caption').style.display = 'block';
            document.getElementById('modal').style.zIndex = 10;
        }
        
    }
    hideModal(){
        if(document.getElementById('modal')){
            document.getElementById('modal').style.display = 'none';
            document.getElementById('caption').style.display = 'none';
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
                        <Nav fill variant="tabs" defaultActiveKey="/bmi" variant="pills">
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
            <div className='modal1' id='modal'>
                <div className='modal1-content' id='caption'>
                    <div className='modfull'>
                        BMI = {this.state.bmi}
                    </div>
                    <div className='modfull'>
                        BMI Category <span className={this.getClass()}><strong>{this.state.cat}</strong></span>
                    </div>
                    <div className='modfull'>
                        <Button style={{marginLeft:'10px',marginRight:'10px'}} variant='primary' onClick={()=>{alert('This feature is currently under development');}}> Recommended Diet
                        </Button >
                        <Button style={{marginLeft:'10px',marginRight:'10px'}} variant='danger' onClick={this.hideModal}>Close
                        </Button>
                    </div>                                   
                </div>
            </div>            
                {/* <h1 className='heading'>
                    Calculate BMI
                </h1> */}
                <div className='bmi-container' style={{zIndex:'2',marginBottom:'20px'}}>
                    <div className='bmi-card' style={{marginTop:'20px'}}>
                        <div className='card1-h'>
                            Calculate BMI
                        </div>

                    </div>
                    <form className='form-card' onSubmit={this.handleSubmit} >
                        <div>
                            <label id='hlabel' htmlFor='height' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                                Height
                                    </label>
                            <input onChange={this.handleHeightChange} id='height' type='number' step='0.01' min='5' required max='170' placeholder='height' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black',maxWidth:'70px' }} />
                            <ButtonToolbar className='cs'>
                                <ToggleButtonGroup type="radio" name="height" defaultValue={true} onChange={this.changeHUnit}>
                                    <ToggleButton className='pad' value={true} variant='info' className='btn1c'>cm</ToggleButton>
                                    <ToggleButton value={false} variant='info' className='btn1c'>in</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <label id='wlabel' htmlFor='weight' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                                Weight
                                    </label>
                            <input onChange={this.handleWeightChange} id='weight' type='number' min='1' step='0.01' required max='180' placeholder='weight' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black', maxWidth:'70px' }} />
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
                
            </div>
        );
    }
    componentDidMount(){        
        let bod = document.getElementById('bod');

        if(bod)
            bod.classList.add('bod');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;  
    }
}

export { BMI };