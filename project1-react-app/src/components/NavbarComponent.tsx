import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../models/User';
import React from 'react';

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
        <NavItem tag={()=>{return <Button  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/users" className="nav-link" activeClassName="active">All Employees</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && (this.props.loggedInUser.role === 1 || 2))} to="/reimbursements" className="nav-link" activeClassName="active">Add Reimbursement</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/reimbursements/author/userId/user_id" className="nav-link" activeClassName="active">Reimbursements by Employee</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/reimbursements/status/status_id" className="nav-link" activeClassName="active">Pending Reimbursements</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/reimbursements/status/status_id" className="nav-link" activeClassName="active">Resolved Reimbursements</NavLink>
        </NavItem>
      </Nav>
      )
    }
}