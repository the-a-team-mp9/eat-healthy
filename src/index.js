import React from "react";
import ReactDOM from "react-dom";
import {Game_1} from "./game-1-controller";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Home} from './home_page';
import {Info} from './intro';
import {Games} from './games';
import {About} from './about';

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
        <Route path='/info' exact component={Info} />
        <Route path='/games' exact component={Games}/>
        <Route path='/about' exact component={About}/>
        <Route path='/game-1' exact component={Game_1} />
      </Router>
      </div>
             
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root'));