import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <label color="White">TaxReturn:&nbsp; 
          <input type="textbox" id="textbox1"></input>&nbsp;
          <input type="button" id="button1" value="Submit" ></input>    
        </label>              
      </header>
    </div>
  );
}

export default App;
