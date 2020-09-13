import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
//function App()
class App extends Component {


  render(){
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
