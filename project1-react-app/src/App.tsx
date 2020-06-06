import React from 'react';
import { UserTable } from './components/UserTable';
import { ReimburseComp } from './components/ReimburseComp';
import { NavbarComponent } from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { User } from './models/User';
import { LoginComponent } from './components/LoginComponent';
import { Redirect } from "react-router-dom"; 
import { toast, ToastContainer} from 'react-toastify';
import './index.css';
import { ReimbByUser } from './components/ReimbByUser';
// import { Jumbotron } from 'react-strap';
// import { Example } from './components/NavReactstrap';
//import ../nodemodule/ (look at reactstrap docs)

/*
interface IAppState {
  loggedInUser: User | null;
}
*/

export class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: null,
    };
  }

  updateLoggedInUser = (user:User) => {
    this.setState({
      loggedInUser: user,
    });
  };

  logoutUser = () => {
    this.setState({
      loggedInUser: null,
    });
  };

  render() {
    // const aMessage = 'My variable message';
    return (
      <div className="App">
        <Router>
          <NavbarComponent
            logoutUser={this.logoutUser}
            loggedInUser={this.state.loggedInUser}
          />
          <Switch>
            {/* This Route redirects people hitting the root url to either home or login, just a QoL thing */}
            <Route exact path="/">
              {this.state.loggedInUser ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            {/* This is a Route to a login form */}
            <Route
              path="/login"
              render={(props: any) => {
                return (
                  <LoginComponent {...props} updateUser={this.updateLoggedInUser} />
                );
              }}
            />
            {/* This route is just a placeholder for a homepage */}
            <Route path="/home">
              <h2>
                Welcome{" "}
                {this.state.loggedInUser
                  ? `to ERS Home Page, ${this.state.loggedInUser.username}!`
                  : "to ERS (Expense Reimbursement System)!"}
              </h2>
            </Route>
              {/* Private route for users to view their own info */}
            <Route path='/users'>
              <UserTable loggedInUser={this.state.loggedInUser} />
            </Route>
            {/* This is a Route to a private users page, only accessible by Admins */}
            <Route path="/users">
              {(this.state.loggedInUser && this.state.loggedInUser.role === 1) ? <UserTable /> : <h4>Only admins can see all users</h4>}
            </Route>
            <Route path='/reimbursements'>
              <ReimburseComp />
            </Route>
            <Route path='/reimbursements/author/userId/user_id'>
              <ReimbByUser />
            </Route>
            {/* This is a catchall route that redirects the user if they enter a route we dont have */}
            <Route
              path="*"
              render={(props: any) => {
                toast(`No route found for ${props.location.pathname}`);
                return <Redirect to="/" />;
              }}
            ></Route>
            </Switch>
        </Router>
        <ToastContainer /> 
      </div>
    );
  }
}

// <Redirect to='/homepage' {...props} />
