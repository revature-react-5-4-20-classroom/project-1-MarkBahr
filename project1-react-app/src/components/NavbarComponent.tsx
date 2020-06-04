import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../models/User';

interface INavbarComponent {
  logoutUser: ()=>void;
  loggedInUser: User | null
}

export class NavbarComponent extends React.Component<INavbarComponent> {
    render() {
      return (
      <Nav>
        <NavItem>
          <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!!this.props.loggedInUser} to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/users" className="nav-link" activeClassName="active">All Employees</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/reimbursements" className="nav-link" activeClassName="active">Reimbursements</NavLink>
        </NavItem>
        <NavItem tag={()=>{return <Button  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
      </Nav>
      )
    }
}