import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import AddData from './components/AddData/AddData'
import FormData from './components/Form/FormData'
import { Routes, Route, useNavigate } from 'react-router-dom';


import './App.css';
import './components/Navbar/Navbar.css'

const App = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(
    localStorage.getItem('loginState')
  )
  
  console.log(localStorage.getItem('loginState'))
  console.log(localStorage.getItem('role'))
  useEffect(() => {
    if(!login){
      navigate('/login')
    }else{
      navigate('/form')
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