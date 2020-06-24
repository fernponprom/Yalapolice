import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
   
const today  = new Date().toDateString()

const Navbar = (props) => {
  const renderNavbar = () => {
    return (
      <div className="nav-links">
        <Link to="/Home">หน้าหลัก</Link>
        <Link to="/">ระบบห้องประชุมทางไกล</Link>
        <Link to="/">ข้อมูลการประชุม</Link>
        <Link to="/Login">เข้าสู่ระบบ</Link>
      </div>
    )
  }

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
        { renderNavbar() }
      <div className="date">
        
        { today }
      </div>
    </div>
  )
}
  

export default Navbar