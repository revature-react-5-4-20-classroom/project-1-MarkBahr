import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../models/User';
import React from 'react';

interface INavbarComponent {
  logoutUser: ()=>void;
  loggedInUser: User | null
}

export class NavbarComponent extends React.Component<INavbarComponent> {
  
  /*
  Example = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  */
  
    render() {
      return (
      <Nav>
        <NavItem>
          <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/users" className="nav-link" activeClassName="active">All Employees</NavLink>
        </NavItem>
        <NavItem>
          <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 1)} to="/reimbursements" className="nav-link" activeClassName="active">Reimbursements</NavLink>
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
        <NavItem>
          <NavLink hidden={!!this.props.loggedInUser} to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        </NavItem>
        <NavItem tag={()=>{return <Button  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
      </Nav>
      )
    }
}