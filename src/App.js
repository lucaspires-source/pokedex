import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/layout/NavBar"

import './App.css';
import Dashboard from './components/layout/Dashboard';
import backgroundImg from "./pattern.png"
class App extends Component{
  render(){
  return (
    <div className="App" style={{background: `url(${backgroundImg})`}}>
      <NavBar/>
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}
}
export default App;
