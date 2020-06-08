import React, { Component } from 'react';
import { getReimbursementByStatus} from '../api/ExpenseClient';
import { Reimbursement } from '../models/Reimbursement';
import { Container, Row, Col, Spinner } from "reactstrap";
import { getUser } from '../api/ExpenseClient';
import { toast } from "react-toastify";
import { myTable } from ''

interface IReimbApprovalState {
    reimbursements: Reimbursement[];
    reimbursementsLoaded: boolean;
    approve: boolean;
    user_id: number;
  }

export class ReimbApproval extends Component<IReimbApprovalState>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
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
            reimbursements: await getReimbursementByStatus(1),
            reimbursementsLoaded: true,
          });
          } catch (e) {
              toast(e.message, {type:"error"});
          }
      }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col md={{ size: 8 }}>
                            <h4>All Reimbursements</h4>
                            {this.state.reimbursementsLoaded ? (
                            <MyTable objects={this.state.user} />
                            ) : (
                            <Spinner />
                            )}
                        </Col>
                        <Col md={{size: 4}}>
                            {this.props.loggedInUser ? <NewUserTable addReimbursement={this.addUser} /> : <h4>Must login to view reimbursements</h4>}
                        </Col>
                    </Row>
                </Container>

                <button >Approve</button>
                <button>Deny</button>
            </div>
        );
    }
}