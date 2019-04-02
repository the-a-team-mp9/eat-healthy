import React from "react";
import ReactDOM from "react-dom";
import {Game_1} from "./game-1-controller";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends React.Component
{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div>
        <Router>        
        <Route path='/' exact render={()=>{return(
          <div>
            <h1>
            Home page
          </h1>
          <Link to='/game-1'>Game 1</Link>
          </div>
        );}}>
        </Route>
        <Route path='/game-1' exact component={Game_1} />                
      </Router>
      </div>
             
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root'));