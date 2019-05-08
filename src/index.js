/*
          Entry point to the application. 
          Import all pages from the respective classes and set up react routes 
*/



import React from "react";
import ReactDOM from "react-dom";
import {Game_1} from "./game-1-controller";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Home} from './home_page';
import {Info} from './info';
import {Games} from './games';
import {About} from './about';
import {Game1Results} from './game1Results';
import {ComingSoon} from './coming-soon';
import {BMI} from './bmi';
import {Tutorial} from './tutorial1';
import {Game2} from './game-2-controller';
import {Tutorial2} from './tutorial2';
import {DLL} from './dll';
import {Game3} from './game-3-controller';
import {Tutorial3} from './tutorial3';

class App extends React.Component
{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div>
        <Router>        
        <Route path='/' exact component={Home}>
        </Route>        
        <Route path='/info' exact render={()=>(<Info section_id='0' />)} />
        <Route path='/info-1' exact render={()=>(<Info section_id='1' />)} />
        <Route path='/info-2' exact render={()=>(<Info section_id='2' />)} />
        <Route path='/info-3' exact render={()=>(<Info section_id='3' />)} />
        <Route path='/games' exact component={Games}/>
        <Route path='/about' exact component={About}/>
        <Route path='/game-1' exact component={Game_1} />
        <Route path='/game-1-results' exact component={Game1Results} />
        <Route path='/coming-soon' exact component = {ComingSoon} />
        <Route path='/bmi' exact component = {BMI} />
        <Route path='/tutorial1' exact component = {Tutorial} />
        <Route path='/tutorial2' exact component = {Tutorial2} />
        <Route path='/game-2' exact component={Game2} />
        <Route path='/data' exact component={DLL} />
        <Route path='/game-3' exact component={Game3} />
        <Route path='/tutorial3' exact component = {Tutorial3} />
      </Router>
      </div>
             
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root'));