import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        console.log(this.state);
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
        console.log('hinm',hinMeters);
        console.log('winK',winKg);
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
            console.log('found modal');
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal').style.zIndex = 10;
        }
        
    }
    hideModal(){
        if(document.getElementById('modal')){
            document.getElementById('modal').style.display = 'none';
            document.getElementById('modal').style.zIndex = 0;
        }
        
    }

    render() {
        return (
            <div className='page hero'>
            <div className='modal1' id='modal'>
                <div className='modal1-content' id='caption'>
                    <div className='modfull'>
                        BMI = {this.state.bmi}
                    </div>
                    <div className='modfull'>
                        BMI Category <span className={this.getClass()}><strong>{this.state.cat}</strong></span>
                    </div>
                    <div className='modfull'>
                        <Button variant='danger' onClick={this.hideModal}>Close
                        </Button>
                    </div>                
                </div>
            </div>            
                {/* <h1 className='heading'>
                    Calculate BMI
                </h1> */}
                <div className='bmi-container' style={{zIndex:'2'}}>
                    <div className='bmi-card'>
                        <div className='card1-h'>
                            Calculate BMI
                        </div>

                    </div>
                    <form className='form-card' onSubmit={this.handleSubmit} >
                        <div>
                            <label id='hlabel' htmlFor='height' style={{ paddingRight: '5px', width: '25%', marginTop: '15px' }}>
                                Height
                                    </label>
                            <input onChange={this.handleHeightChange} id='height' type='number' min='5' required max='170' placeholder='height' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black',maxWidth:'70px' }} />
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
                            <input onChange={this.handleWeightChange} id='weight' type='number' min='1' required max='180' placeholder='weight' style={{ width: '50%', left: '25%', marginTop: '15px',color:'black', maxWidth:'70px' }} />
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
                                    <ToggleButton className='btn1c' value={'m'} variant="info">BOY</ToggleButton>
                                    <ToggleButton className='btn1c' value={'f'} variant="info">GIRL</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <input className='btn btn-success btn-lg' name='submit' type='submit' value='Calculate BMI' />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export { BMI };