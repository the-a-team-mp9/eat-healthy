import React from 'react';
import {brekkie,lunch,dinner} from './food-list';


class Game3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {gState:'start'};
        let lunch_arr=[];
        let break_arr=[];
        let dinner_arr=[];
        let choice;
        //Randomly pick 3 foods each from breakkie, lunch and dinner        
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){ 
                choice = Math.floor(Math.random()*22);               
                if(i==0){                    
                    while(break_arr.indexOf(choice)!=-1){
                        choice = Math.floor(Math.random()*22);
                    }
                    break_arr.push(choice);
                }
                else if(i==1){                    
                    while(lunch_arr.indexOf(choice)!=-1){
                        choice =  Math.floor(Math.random()*22);
                    }
                    lunch_arr.push(choice);
                }
                else{
                    while(dinner_arr.indexOf(choice)!=-1){
                        choice =  Math.floor(Math.random()*22);
                    }
                    dinner_arr.push(choice);
                }
            }
        }
        // console.log('b_rr',break_arr);
        // console.log('l_rr',lunch_arr);
        // console.log('d_rr',dinner_arr);
        // initialise the 3 lists that store the details for brekfast,lunch and dinner choices
        this.brekkie_list = [brekkie[break_arr[0]],brekkie[break_arr[1]],brekkie[break_arr[2]]];
        this.lunch_list = [lunch[lunch_arr[0]],lunch[lunch_arr[1]],lunch[lunch_arr[2]]];
        this.dinner_list = [dinner[dinner_arr[0]],dinner[dinner_arr[1]],dinner[dinner_arr[2]]];
        this.selected_food = [];
        // console.log(dinner_arr);
    }
    renderButton(){
        if(this.state.gState=='start')
            return(
                <div id='menu-button' onClick={this.start.bind(this)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/Start_button1.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
            );
        else if(this.state.gState=='confirm')
            return(
                <div id='menu-button' onClick={this.calculateScore.bind(this)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Background/Confirm_button.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
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
                    <div id='menu-item1' onClick={this.getBreakfastChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getBreakfastChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getBreakfastChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Breakfast/'+this.brekkie_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='lunch')
            return(
                <div>
                    <div id='menu-item1' onClick={this.getLunchChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getLunchChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getLunchChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Lunch/'+this.lunch_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                </div>
            );
        else if(this.state.gState=='dinner')
            return(
                <div>
                    <div id='menu-item1' onClick={this.getDinnerChoice.bind(this,0)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[0].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item2' onClick={this.getDinnerChoice.bind(this,1)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[1].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                    <div id='menu-item3' onClick={this.getDinnerChoice.bind(this,2)} style={{backgroundImage:'url(../images/Game-3_Image_Assets/Meals/Dinner/'+this.dinner_list[2].imgName+')',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
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
        else if(this.state.gState=='confirm')
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
            if(this.state.score<21)
                return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/0-20.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                );
            else if(this.state.score<41)
                return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/20-40.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                );
            else if(this.state.score<61)
                return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/40-60.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                );
            else if(this.state.score<81)
                return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/60-80.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                );
            else
                return(
                    <div id='game3-char' style={{backgroundImage:'url(../images/Game-3_Image_Assets/FinishPoses/80-100.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'}}></div>
                );
        }
            
    }
    renderScore(){
        if(this.state.gState=='score')
            return(
                <div id='game3-msg'>
                    <p style={{fontSize:'x-large',textAlign:'left',color:'white'}}>Score: {this.state.score}</p>
                </div>
            );            
    }    
    render(){
        //console.log(brekkie);
        return(
        <div className='game-3-area'>
            <div id='menu-card'></div>
            <div id='game-3-back' onClick={this.goBack.bind(this)}></div>
            {this.renderClocks()}     
            {this.renderFoods()} 
            {this.renderButton()}
            {this.renderSelectedFood()}
            {this.renderGameChar()}   
            {this.renderScore()}   
        </div>
        );
    }
    goBack(){
        if(this.state.gState=='start')
            window.location.href='/games';
        else if(this.state.gState=='breafast')
            this.setState({gState:'start'});
        else if(this.state.gState=='lunch')
            this.setState({gState:'breakfast'});
        else if(this.state.gState=='dinner')
            this.setState({gState:'lunch'});
        else if(this.state.gState=='confirm')
            this.setState({gState:'dinner'});
        else
            window.location.href='/game-3'
    }
    start(){
        this.setState({gState:'breakfast'})
    }    
    getBreakfastChoice(choice){
        this.selected_food[0]=this.brekkie_list[choice];
        console.log(this.selected_food);
        this.setState({gState:'lunch'})
    }
    getLunchChoice(choice){
        this.selected_food[1]=this.lunch_list[choice];
        // console.log(this.selected_food);
        this.setState({gState:'dinner'})
    }
    getDinnerChoice(choice){
        this.selected_food[2]=this.dinner_list[choice];
        console.log(this.selected_food);
        this.setState({gState:'confirm'})
    }
    calculateScore(){
        let score = 0;
        let veg_content = 0;
        let grain_content = 0;
        let fruit = 0;
        let protien_content = 0;
        this.selected_food.forEach((food)=>{
            score+=food.score;
            veg_content+=food.veg;
            protien_content+=food.protein;
            grain_content+=food.grain;
            fruit+=food.fruit
        });
        score*=3
        veg_content/=3
        protien_content/=3
        grain_content/=3
        console.log('sc',score);
        console.log('vg',veg_content);
        console.log('gc',grain_content);
        console.log('f',fruit);
        console.log('p',protien_content);
        this.setState({gState:'score',score:score});
    }
}

export {Game3}