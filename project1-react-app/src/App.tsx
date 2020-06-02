import React from 'react';
import './App.css';
import { UserTable } from './components/UserTable';
import { ReimburseComp } from './components/ReimburseComp';
import { NavbarComponent } from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { User } from './models/User';
import { LoginComponent } from './components/LoginComponent';
// import Practice from './components/PracticeComponent';
// import { Example } from './components/NavReactstrap';
//import ../nodemodule/ (look at reactstrap docs)

interface IAppState {
  loggedInUser: User | null;
}

export class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: null,
    }
  }

  updateUser = (user:User) => {
    this.setState({
      loggedInUser: user,
    })
  }

  render() {
    // const aMessage = 'My variable message';
    return (
    <>
    <Router>
      <NavbarComponent/>
      <h1>Welcome to Expense Reimbursements System! (ERS)</h1>
      <Switch>
        <Route path='/users'>
          <UserTable />
        </Route>
        <Route path='/reimbursements'>
        <ReimburseComp reimbursement="If you have questions about submitting reimbursements, please contact the finance department: finance.dept@reimbursement.com"/>
        </Route>
        <Route path="/login" render={(props)=>{return <LoginComponent updateUser={this.updateUser} {...props} />}} />
          <p>This is where you login!</p>
      </Switch>
    </Router>
    
    </>
    );
  }
}
