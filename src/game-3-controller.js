import React from 'react';
import {brekkie,lunch,dinner,breakkie_h,lunch_h,dinner_h} from './food-list';
import {Modal,Container,Row,Col,Button} from 'react-bootstrap';

// Creating a helper funtion to shuffle an array
let shfl = (arr) =>{
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
}

class Game3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {gState:'start',disp_modal:true,isBoy:true,foodSelected:false};
        let lunch_arr=[];
        let break_arr=[];
        let dinner_arr=[];
        let choice;
        //Randomly pick 2 foods each from breakkie, lunch and dinner        
        for(let i=0;i<3;i++){
            for(let j=0;j<2;j++){                 
                if(i==0){
                    choice = Math.floor(Math.random()*(brekkie.length-1));
                    while(break_arr.indexOf(choice)!=-1){
                        choice = Math.floor(Math.random()*(brekkie.length-1));
                    }
                    break_arr.push(choice);
                }
                else if(i==1){
                    choice = Math.floor(Math.random()*(lunch.length-1));
                    while(lunch_arr.indexOf(choice)!=-1){
                        choice = Math.floor(Math.random()*(lunch.length-1));
                    }
                    lunch_arr.push(choice);
                }
                else{
                    choice = Math.floor(Math.random()*(dinner.length-1))
                    while(dinner_arr.indexOf(choice)!=-1){
                        choice = Math.floor(Math.random()*(dinner.length-1))
                    }
                    dinner_arr.push(choice);
                }
            }
        }        
        this.brekkie_list = [brekkie[break_arr[0]],brekkie[break_arr[1]]];
        this.lunch_list = [lunch[lunch_arr[0]],lunch[lunch_arr[1]]];
        this.dinner_list = [dinner[dinner_arr[0]],dinner[dinner_arr[1]]];

        this.brekkie_list.push(breakkie_h[Math.floor(Math.random()*(breakkie_h.length-1))]);
        this.lunch_list.push(lunch_h[Math.floor(Math.random()*(lunch_h.length-1))]);
        this.dinner_list.push(dinner_h[Math.floor(Math.random()*(dinner_h.length-1))]);

        shfl(this.brekkie_list);
        shfl(this.lunch_list);
        shfl(this.dinner_list);
        this.selected_food = [];
        // console.log(dinner_arr);
        // console.log(lunch_arr);
        // console.log(break_arr);        
    }
    renderButton(){
        if(this.state.gState=='start')
            return(
                <div id='menu-button' onClick={this.start.bind(this)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/START_button.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
            );
        else if(this.state.gState=='confirm')
            return(
                <div id='menu-button' onClick={this.calculateScore.bind(this)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/Confirm_button.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
            );
        else if(this.state.gState=='score')
            return(
                <div id='game-3-restart-btn' onClick={()=>{window.location.href='/game-3';}}></div>
            );
    }
    renderClocks(){
        if(this.state.gState=='breakfast')
            return(
                <div id='game-3-clock' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/clock_morning.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>                    
                </div>
            );
        else if(this.state.gState=='lunch')
            return(
                <div id='game-3-clock' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/clock_noon.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>                    
                </div>
            );
        else if(this.state.gState=='dinner')
            return(
                <div id='game-3-clock' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/clock_evening.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}>                    
                </div>
            );
    }
    renderFoods(){
        // console.log(this.state.gState,'rndr_foods');
        // console.log(this.brekkie_list);
        // console.log(this.lunch_list);
        // console.log(this.dinner_list);
        if(this.state.gState=='breakfast')
            return(
                <div>
                    <div id='menu-item1' onClick={this.getMealChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getMealChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getMealChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='lunch')
            return(
                <div>
                    <div id='menu-item1' onClick={this.getMealChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getMealChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getMealChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='dinner')
            return(
                <div>
                    <div id='menu-item1' onClick={this.getMealChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getMealChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getMealChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
    }
    renderSelectedFood(){
        if(this.state.gState=='lunch')
            return(
                <div>
                    <div id='breakfast-clock'></div>
                    <div id='selected-item1' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.selected_food[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='dinner')
            return(
                <div>
                    <div id='breakfast-clock'></div>
                    <div id='selected-item1' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.selected_food[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='lunch-clock'></div>
                    <div id='selected-item2' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.selected_food[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='confirm' || this.state.gState=='score')
            return(
                <div>
                    <div id='breakfast-clock'></div>
                    <div id='selected-item1' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.selected_food[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='lunch-clock'></div>
                    <div id='selected-item2' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.selected_food[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='dinner-clock'></div>
                    <div id='selected-item3' style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.selected_food[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
    }
    renderGameChar(){
        if(this.state.gState=='score'){
            if(this.state.isBoy){
                if(this.state.score<21)
                    return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/boy/0-20.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<41)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/boy/20-40.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<61)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/boy/40-60.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<81)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/boy/60-80.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/boy/80-100.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
            }
            else{
                if(this.state.score<21)
                    return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/girl/0-20.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<41)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/girl/20-40.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<61)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/girl/40-60.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else if(this.state.score<81)
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/girl/60-80.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );
                else
                    return(
                        <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/girl/80-100.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    );

            }
            
        }
            
    }
    renderScore(){
        let score_msg;
        if(this.state.score>=80)
            score_msg='Congratulations!!! You chose a balanced diet';
        else if(this.state.score>=60 && this.state.score<80 )
            score_msg='Good Job. You choose good foods';
        else if(this.state.score>=40 && this.state.score< 60)
            score_msg='You can eat better. Keep trying';
        else
            score_msg='Oh No. You choose unhealthy foods. Try again';
        if(this.state.gState=='score')
            return(
                <div>
                    <div id='game3-msg'>
                        <h2 style={{fontSize:'1.5em',color:'white'}}>Score: {this.state.score}</h2>
                    </div>
                    <div id='game-3-start-msg1'><h3 style={{color:'white',textAlign:'justify'}}>{score_msg}</h3></div>
                </div>                
            );            
    }
    renderGameMsgs(){
        // if(this.state.gState=='start')
        //     return(
        //         <div>
        //             <div id='game-3-start-msg1'><h2 style={{color:'white',textAlign:'justified',fontSize:'1.5em'}}>Click the red button to begin</h2></div>
        //             <div id='game-3-start-msg2'><h2 style={{color:'white',textAlign:'justified',fontSize:'1.5em'}}>Choose the menu for today</h2></div>
        //         </div>
        //     );
        if(this.state.gState=='breakfast' || this.state.gState=='lunch' || this.state.gState=='dinner')
            return(
                <div id='game-3-select-msg'><h2 style={{color:'white',textAlign:'center',fontSize:'1.5em'}}>select {this.state.gState}</h2></div>
            );
        else if(this.state.gState=='confirm')
            return(
                <div id='game-3-start-msg1'>
                    <h2 style={{fontSize:'1.5em',color:'white'}}>Click the red button to confirm</h2>
                </div>
            );
    }
    renderModal(){        
        if(this.state.foodSelected){
            return(
                <div className='modal1' id='modal' style={{display:'block',zIndex:'10'}}>
                    <div className='modal1-content' style={{display:'block', backgroundColor: "rgba(30,30,30,0.85)", paddingBottom: '20px', maxWidth: '150px' }} id='caption'>
                        <div className='modfull'>
                            <h2>
                                {this.state.seletedFood_d}
                            </h2>
                        </div>
                        <div className='modfull'>
                            <img className='select-buttons' style={{margin: '5px'}} src='../images/Dice_and_Buttons/Yes.png' onClick={this.selectMeal.bind(this)}/>
                            <img className='select-buttons' style={{margin: '5px'}} src='../images/Dice_and_Buttons/No.png' onClick={this.cancelSelection.bind(this)}/>
                        </div>
                    </div>
                </div>
            );
        }
            
    }    
    render(){
        //console.log(brekkie);
        return(
        <div className='game-3-area'>
            <Modal show={this.state.disp_modal} onHide={this.handleClose.bind(this)} centered>
                <Modal.Title>
                    <p style={{textAlign:'center',fontSize:'1em',color:'black'}}>Balanced Diet</p>
                </Modal.Title>
                <Modal.Body style={{textAlign:'center',backgroundColor:'#333'}}>
                <p style={{marginTop:'0px'}}>
                    Choose foods that provide nutrition according to the food pyramid 
                </p>
                    <img src='../images/Game-3_Image_Assets/food_pyramid.png' className='food-pyramid' />
                </Modal.Body>                                
                <Modal.Footer style={{textAlign:'center' ,color:'white',backgroundColor:'#333'}}>
                    <Container>                            
                        <Row className='justify-content-center'>
                            <Col><p style={{margin:'0px',color:'white'}}>Select Gender</p></Col>
                        </Row>
                        <Row className="justify-content-md-center show-grid">
                            <Col md={12} xs={12} sm={12} lg={12}>
                                <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="info" onClick={this.selectGender.bind(this,true)}>
                                   BOY
                                </Button>
                                <Button style={{marginRight:'10px',marginLeft:'10px'}} variant="info" onClick={this.selectGender.bind(this,false)}>
                                    GIRL
                                </Button>
                            </Col>
                        </Row>
                    </Container>                        
                </Modal.Footer>
            </Modal>
            <div id='menu-card'></div>
            <div id='game-3-back' onClick={this.goBack.bind(this)}></div>
            {this.renderModal()}
            {this.renderClocks()}     
            {this.renderFoods()} 
            {this.renderButton()}
            {this.renderSelectedFood()}
            {this.renderGameChar()}   
            {this.renderScore()}  
            {this.renderGameMsgs()} 
        </div>
        );
    }
    handleClose(){
        this.setState({ disp_modal:false});
    }
    selectGender(isBoy){
        if(!isBoy)
            this.setState({isBoy:false,disp_modal:false});
        else   
            this.setState({disp_modal:false});
    }
    goBack(){
        if(this.state.gState=='start' || this.state.gState=='score')
            window.location.href='/games';
        else if(this.state.gState=='breakfast')
            this.setState({gState:'start'});
        else if(this.state.gState=='lunch')
            this.setState({gState:'breakfast'});
        else if(this.state.gState=='dinner')
            this.setState({gState:'lunch'});
        else if(this.state.gState=='confirm')
            this.setState({gState:'dinner'});
        // else
        //     window.location.href='/games';
    }
    start(){
        this.setState({gState:'breakfast'})
    }    
    getMealChoice(choice){
        console.log(choice);
        if(this.state.gState=='breakfast'){
            this.selected_food[0]=this.brekkie_list[choice];
            // console.log(this.selected_food);
            this.setState({seletedFood_d:this.brekkie_list[choice].description,foodSelected:true});
        }
        else if(this.state.gState=='lunch'){
            this.selected_food[1]=this.lunch_list[choice];
            console.log(this.selected_food);
            this.setState({seletedFood_d:this.lunch_list[choice].description,foodSelected:true});
        }
        else if(this.state.gState=='dinner'){
            this.selected_food[2]=this.dinner_list[choice];
            console.log(this.selected_food);
            this.setState({seletedFood_d:this.dinner_list[choice].description,foodSelected:true});
        }
    }
    selectMeal(){
        if(this.state.gState=='breakfast')
            this.setState({gState:'lunch',foodSelected:false});
        else if(this.state.gState=='lunch')
            this.setState({gState:'dinner',foodSelected:false});
        else if(this.state.gState=='dinner')
            this.setState({gState:'confirm',foodSelected:false});
    }      
    cancelSelection(){
        this.setState({foodSelected:false});
    }
    calculateScore(){
        let score = 0;
        let veg_content = 0;
        let grain_content = 0;
        let fruit = 0;
        let protien_content = 0;
        let food_score_lt_3 = false;
        this.selected_food.forEach((food)=>{
            score+=food.score;
            veg_content+=food.veg;
            protien_content+=food.protein;
            grain_content+=food.grain;
            fruit+=food.fruit;
            if(food.score<=3)
                food_score_lt_3 = true;
        });
        score*=3;        
        protien_content/=3;
        grain_content/=3;        
        console.log('sc',score);
        console.log('vg',veg_content);
        console.log('gc',grain_content);
        console.log('f',fruit);
        console.log('p',protien_content);
        if(veg_content>3)
            score+=5;
        if(fruit>=2)
            score+=5;
        if(protien_content>=1.5 && protien_content<=2.5)
            score+=5;
        if(grain_content>=1.5 && grain_content<=2.5)
            score+=5;
        if(food_score_lt_3)
            score-=8;
        if(score>100)
            score=100;
        this.setState({gState:'score',score:score});
    }
}

export {Game3}