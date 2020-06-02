import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export class NavbarComponent extends React.Component<any,any> {
    render() {
      return (
      <div>
        {/* just writing the name of a prop is shorthand for prop={true}*/}
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/homepage">Home</NavLink>
              <NavLink to="/users">Users</NavLink>
              <NavLink to="/reimbursements">Reimbursements</NavLink>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </Nav>
  
        </Navbar>
      </div>
      )
    }
}