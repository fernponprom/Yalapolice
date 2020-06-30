import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
   
const today  = new Date().toDateString()

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
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
          <NavbarText>{today}</NavbarText>
        </Collapse>
      </Navbar>
    </div>  
  )
}
  

export default MainNavbar