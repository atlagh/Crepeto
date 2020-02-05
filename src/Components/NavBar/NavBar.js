import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
	      <Navbar color="light" light expand="md">
	        <NavbarBrand href="/">Crepeto Restaurant</NavbarBrand>
	        <NavbarToggler onClick={toggle} />
	        <Collapse isOpen={isOpen} navbar>
	          <Nav className="mr-auto" navbar>
	            <NavItem>
	              <NavLink href="/components/">Menu</NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
	            </NavItem>
	          </Nav>
	          <NavbarText>Simple Text</NavbarText>
	        </Collapse>
	      </Navbar>
    </div>
  );
}

export default NavBar;