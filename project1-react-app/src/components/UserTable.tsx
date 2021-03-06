import React from 'react';
import { MyTable } from './MyTable';
import { Container, Row, Col, Spinner } from "reactstrap";
import { toast } from "react-toastify";
import { getAllUsers } from "../api/ExpenseClient";


export class UserTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      usersLoaded: false,
    };
  }

  async componentDidMount() {
    try {
  this.setState({
    users: await getAllUsers(),
    usersLoaded: true,
  });
  } catch (e) {
      toast(e.message, {type:"error"});
  }
}

render() {
  return (
    <Container>
      <Row>
        <Col md={{ size: 5 }}>
          <h4>Users</h4>
          {this.state.usersLoaded ? (
            <MyTable objects={this.state.users} />
          ) : (
            <Spinner />
          )}
        </Col>
      </Row>
    </Container>
  );
}
}

/*

interface IUserTableState {
    size: number[];
}

export default class UserTable extends React.Component<IUserTableState> {
    constructor(props: any){
      super(props);
      this.state = {
          size: []
      }
    }
    render(){
      let rows = [];
      for (var i = 0; i < this.state.size; i++){
        let rowID = `row${i}`
        let cell = []
        for (var idx = 0; idx < this.state.size; idx++){
          let cellID = `cell${i}-${idx}`
          cell.push(<td key={cellID} id={cellID}></td>)
        }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
      }
      return(
        <div className="container">
          <div className="row">
            <div className="col s12 board">
              <table id="simple-board">
                 <tbody>
                   {rows}
                 </tbody>
               </table>
            </div>
          </div>
        </div>
      )
    }
}

*/

/*
class UserTable extends React.Component<UserTableProps> {
    constructor(props: any) {
        super(props)
        this.state = {
            users: [
                {userId: 1, username: 'tWalker', password: '123password', firstName: 'Thomas', lastName: 'Walker', email: 'twalker@gmail.com', role: 1},
                {userId: 2, username: 'jWalker', password: '123password', firstName: 'Jacob', lastName: 'Walker', email: 'jwalker@gmail.com', role: 2},
                {userId: 3, username: 'aBaker', password: '123password', firstName: 'Aaron', lastName: 'Baker', email: 'abaker@gmail.com', role: 3},
                {userId: 4, username: 'jBaker', password: '123password', firstName: 'Jesse', lastName: 'Baker', email: 'jbaker@gmail.com', role: 4}
            ]
        }
    }


    renderData() {
        return this.state.users.map((user, index) => {
            const { userId, username, password, firstName, lastName, email, role } = user
            return (
                <tr key={userId}>
                    <td>{userId}</td>
                    <td>{username}</td>
                    <td>{password}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                </tr>
            )
        });
    }

    renderHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase}</th>
        })
    }


    render() {
        return (
            <div>
                <h1 id="label">User Table</h1>
                <table id="users">
                    <tbody>
                    {this.props.users.map(
                        (user: any, i) => {return <tr key={i}><td>{user}</td></tr>}
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserTable  
*/


/*
function Cell(props) {
    return ()
}
*/

/* the HTML WAY
export class UserTable extends React.Component  {
    renderTable() {
        return (
            <form>
                <table>
                    <caption>Users Table</caption>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Role</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>tWalker2</td>
                            <td>123password</td>
                            <td>Thomas</td>
                            <td>Walker</td>
                            <td>twalker@gmail.com</td>
                            <td>Finance Manager</td>
                     </tr>
                    </thead>
                </table>
            </form>
        )
    }
}
*/