import React from 'react';
import { MyTable } from './MyTable';
import { Container, Row, Col, Spinner } from "reactstrap";
import { toast } from "react-toastify";
import { getUser } from "../api/ExpenseClient";
import { User } from '../models/User';

interface IUserHome {
    user: User;
    user_id: number;

}


export class UserHome extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: [],
      user_id: 0,
      usersLoaded: false,
    };
  }

  async componentDidMount() {
    try {
  this.setState({
    users: await getUser(1),
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