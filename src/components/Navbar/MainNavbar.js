import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app'
   
const today  = new Date().toDateString()

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(
    localStorage.getItem('loginState')
  )
  const logout = async () => {
    await firebase.auth().signOut().catch(err => console.log(err))
    localStorage.removeItem('loginState');
    window.location.reload()
  }

  const toggle = () => setIsOpen(!isOpen);
  console.log(JSON.stringify(user))
  return  (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home"><img src="http://localhost:3000/Logo.png" alt="logo" width="40" height="40"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">หน้าหลัก</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              ระบบห้องประชุมทางไกล
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/form">
                  แบบฟอร์ม
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{}}><b>สวัสดี,</b> {user}</NavbarText>
          <div style={{margin: '10px 10px 10px 10px'}}>
            <Button color="danger" size="sm" onClick={logout}>ลงชื่อออก</Button>
          </div>
          <NavbarText>{today}</NavbarText>
        </Collapse>
      </Navbar>
    </div>  
  )
}
  

export default MainNavbar