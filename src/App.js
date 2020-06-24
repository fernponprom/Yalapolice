import React from 'react';
// import logo from './logo.svg';
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AddData from './components/AddData/AddData'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './components/Navbar/Navbar.css'
// function App() {
  const App = () => {

  const Header = () => {  
    const today  = new Date().toDateString()
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        {/* <div className="nav-links">
          <h>ระบบห้องประชุมทางไกล</h>
        </div> */}
        <div className="date">
          { today }
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AddData" element={<AddData />} />
      </Routes>
    </div>
  );
}

export default App;