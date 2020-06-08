import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { MyTable } from "./MyTable";
import { getReimbursementByUser } from "../api/ExpenseClient";
import { toast } from "react-toastify";
import { Reimbursement } from "../models/Reimbursement";
import { NewReimbForm } from "./NewReimbForm";

interface IReimbByUserState {
  reimbursements: Reimbursement[];
  reimbursementsLoaded: boolean;
  user_id: number;
}

export class ReimbByUser extends React.Component<any, IReimbByUserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reimbursements: [],
      reimbursementsLoaded: false,
      user_id: 0,
    };
  }

  async componentDidMount() {
    await this.fetchReimbursements();
  }

  getReimbursement = async () => {
    await this.fetchReimbursements();
  }

  fetchReimbursements = async () => {
    try {
      this.setState({
        reimbursements: await getReimbursementByUser(this.props.user_id),
        reimbursementsLoaded: true,
      });
      } catch (e) {
          toast(e.message, {type:"error"});
      }
  }

  render() {
    return (
      <>
        <h2>Reimbursements By Employee</h2>
			  <p>Hint: You can use this page to find Reimbursements entered by a single employee.</p>
			  <form onSubmit={this.getReimbursement}>
				  <label id="userid">Enter Employee ID: </label>
				  <input type="number" name="userid" id="userid" />
          <button onClick={this.getReimbursement}>Submit</button>
			  </form>
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <h4>Reimbursements</h4>
              {this.state.reimbursementsLoaded ? (
                <MyTable objects={this.state.reimbursements} />
              ) : (
                <Spinner />
              )}
            </Col>
            <Col md={{size: 4}}>
              {this.props.loggedInUser ? <NewReimbForm addReimbursement={this.getReimbursement} /> : <h4>Reimbursements by user view</h4>}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

