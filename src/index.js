import React from "react";
import ReactDOM from "react-dom";
import {Game_1} from "./game-1-controller"

class App extends React.Component
{
  constructor(props){
    super(props);
    
  }
  
  render(){
    return(
      <Game_1 />
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root'));