import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import AddData from './components/AddData/AddData'
import FormData from './components/Form/FormData'
import Test from './components/Test'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { firestore } from './index'
import { useCookies } from 'react-cookie'

import './App.css';
import './components/Navbar/Navbar.css'
// function App() {

const App = () => {
  const [loginState, setLoginState] = useState(true)
  const [cookies, setCookie ] = useCookies(['name'])
  
  const navigate = useNavigate()
  useEffect(() => {
    if(!loginState){
      navigate('/login')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/form" element={<FormData />} />
      </Routes>
    </div>
  );
}

export default App;