import React from 'react';
import { User } from '../models/User';
import { Form, FormGroup, Label, Row, Col, Input, Button, Container } from 'reactstrap';
import { login } from '../api/ExpenseClient';
import { toast } from 'react-toastify';

export class LoginComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setUsername = (changeEvent: any) => {
    this.setState({
      username: changeEvent.currentTarget.value,
    });
  };

  setPassword = (changeEvent: any) => {
    this.setState({
      password: changeEvent.currentTarget.value,
    });
  };

  attemptLogin = async (submitEvent: any) => {
    submitEvent.preventDefault();
    try {
      const loggedInUser: User = await login(
        this.state.username,
        this.state.password
      );
      this.props.updateUser(loggedInUser);
      this.props.history.push("/home");
    } catch (error) {
      toast(error.message, { type: "error" });
      this.setState({
        password: "",
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.attemptLogin}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  onChange={this.setUsername}
                  value={this.state.username}
                  type="text"
                  name="username"
                  id="username"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  onChange={this.setPassword}
                  value={this.state.password}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*
//the updateUser prop takes a function that takes a user and returns voide
// it will match updateUser in App.
interface ILoginComponentProps {
  updateUser: (user:User) => void;
  // history: any;
  match: any;
}

interface ILoginComponentState {
  username: string;
  password: string;
  isError: boolean;
  errorMessage: string;
}

export class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {

  constructor(props: ILoginComponentProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMessage: '',
    }
  }

  //We'll need a few functions to modify individual pieces of our state
  // These take change events
  setUsername = (un: any) => {
    this.setState({
      username: un.currentTarget.value,
    })
  }

  setPassword = (pw: any) => {
    this.setState({
      password: pw.currentTarget.value,
    })
  }

  clearError = () => {
    this.setState({
      errorMessage: '',
      isError: false,
    })
  }

  attemptLogin = async (event: any) => {
    event.preventDefault();
    console.log(event);
    try {
      const loggedInUser : User = await login(this.state.username, this.state.password);
      this.props.updateUser(loggedInUser);
      this.setState({
        username: '',
        password: '',
      });
    } catch (error) {
      this.setState({
        password: '',
        isError: true,
        errorMessage: error.message,
      })
    }
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.attemptLogin}>
        <FormGroup row>
          <Label for="username" sm={2}>Username</Label>
          <Col sm={6}>
           // {/* onChange lets Input change state, value lets Input display state }
            <Input onChange={this.setUsername} value={this.state.username} type="text" name="username" id="username" placeholder="your username" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={6}>
            <Input onChange={this.setPassword} value={this.state.password} type="password" name="password" id="password" required />
          </Col>
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
      <Toast isOpen={this.state.isError}>
        <ToastHeader icon="danger" toggle={this.clearError}>
          Error!
        </ToastHeader>
        <ToastBody>
          {this.state.errorMessage}
        </ToastBody>

      </Toast>
      </div>
    );
  }
}
*/