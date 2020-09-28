import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/layout/NavBar"

import './App.css';
import Dashboard from './components/layout/Dashboard';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
