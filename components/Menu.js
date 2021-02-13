
import 'bootstrap/dist/css/bootstrap.min.css';
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







const Menu =() =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  


    return(
        <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Projeto Recode</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/sobre">Quem somos </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem >

              <NavItem>
                <NavLink href="/faleconosco">Fale conosco</NavLink>
              </NavItem >

              <NavItem>
                <NavLink href="/index">index.html</NavLink>
              </NavItem >


                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PROJETO RECODE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/faleconosco">
                    fale conosco
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Menu;