import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { MyTable } from "./MyTable";
import { getAllReimbursements } from "../api/ExpenseClient";
import { toast } from "react-toastify";
import { Reimbursement } from "../models/Reimbursement";
import { NewReimbForm } from "./NewReimbForm";

interface IReimburseCompState {
  reimbursements: Reimbursement[];
  reimbursementsLoaded: boolean;
}

export class ReimburseComp extends React.Component<any, IReimburseCompState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reimbursements: [],
      reimbursementsLoaded: false,
    };
  }

  async componentDidMount() {
    await this.fetchReimbursements();
  }

  addNewReimbursement = async () => {
    await this.fetchReimbursements();
  }

  fetchReimbursements = async () => {
    try {
      this.setState({
        reimbursements: await getAllReimbursements(),
        reimbursementsLoaded: true,
      });
      } catch (e) {
          toast(e.message, {type:"error"});
      }
  }

  render() {
    return (
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
            {this.props.loggedInUser ? <NewReimbForm addReimbursement={this.addNewReimbursement} /> : <h4>Must login to view reimbursements</h4>}
          </Col>
        </Row>
      </Container>
    );
  }
}