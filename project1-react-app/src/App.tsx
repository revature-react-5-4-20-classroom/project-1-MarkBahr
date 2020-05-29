import React from 'react';
import './App.css';
import { UserTable } from './components/UserTable';
import { ReimburseComp } from './components/ReimburseComp';
import { NavbarComponent } from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends React.Component {
  render() {
    // const aMessage = 'My variable message';
    return (
    <>
    <Router>
      <NavbarComponent/>
      <Switch>
      <Route path='/users'>
          <UserTable name="Someone important"/>
        </Route>
        <Route path='/reimbursements'>
        <ReimburseComp reimbursement="If you have questions about submitting reimbursements, please contact the finance department: finance.dept@reimbursement.com"/>
        </Route>
        <Route path="/login">
          <p>This is where you login!</p>
          {/* <LoginComponent updateUser={this.updateUser} /> */}
        </Route>
      </Switch>
    </Router>
    
    <h1>Welcome to Expense Reimbursements System! (ERS)</h1>
    </>
    );
  }
}
