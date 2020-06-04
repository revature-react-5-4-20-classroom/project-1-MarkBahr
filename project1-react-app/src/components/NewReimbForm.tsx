import React from 'react';
import { Reimbursement } from '../models/Reimbursement'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { postNewReimbursement } from '../api/ExpenseClient';
import { toast } from 'react-toastify';

interface INewReimbFormProps {
    addReimbursement: ()=>void
}

interface INewReimbFormState {
    author: number;
    amount: number;
    date_submitted : Date; // not null
    date_resolved : Date; // not null
    description : string; // not null
    resolver : number; // foreign key -> User
    status : number; // foreign key -> ReimbursementStatus, not null
    reimbursement_type : number; // foreign key -> Reimbursement Type
}

export class NewReimbForm extends React.Component<INewReimbFormProps, INewReimbFormState> {
    constructor(props: any) {
        super(props);
        let date: Date = new Date();
        let date2: Date = new Date("2100/01/01");
        this.state = {
            author: 0,
            amount: 0,
            date_submitted: date, // not null
            date_resolved: date2, // not null
            description: '', // not null
            resolver: 0, // foreign key -> User
            status: 0, // foreign key -> ReimbursementStatus, not null
            reimbursement_type: 0, // foreign key -> Reimbursement Type
        }
    }

    submitReimbursement = async (submitEvent: any) => {
        submitEvent.preventDefault();
        try {
            const reimbursement = new Reimbursement(0, this.state.author, this.state.amount, this.state.date_submitted, this.state.date_resolved, this.state.description, this.state.resolver, this.state.status, this.state.reimbursement_type);
            await postNewReimbursement(reimbursement);
            toast(`${reimbursement.author} added successfully!`, {type: "success"});
            this.props.addReimbursement();
            this.clearForm();
        } catch (e) {
            toast(e.message, {type:"error"});
        }
    }

    clearForm = () => {
      let date: Date = new Date();
      let date2: Date = new Date("2100/01/01");
        this.setState({
          author: 0,
          amount: 0,
          date_submitted: date, // not null
          date_resolved: date2, // not null
          description: '', // not null
          resolver: 0, // foreign key -> User
          status: 0, // foreign key -> ReimbursementStatus, not null
          reimbursement_type: 0, // foreign key -> Reimbursement Type
        })
    }

    bindInputChangeToState = (changeEvent:any) => {
        //@ts-ignore
        this.setState({[changeEvent.currentTarget.name] : changeEvent.currentTarget.value})
    }

    render() {
        return (
            <Form onSubmit={this.submitReimbursement}>
              <FormGroup>
              <Label for="author">Author</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.author}
                  type="number"
                  name="author"
                  id="author"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="amount">Amount</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.amount}
                  type="number"
                  name="amount"
                  id="amount"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="date_submitted">Date Submitted</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.date_submitted}
                  type="date"
                  name="date_submitted"
                  id="date_submitted"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="date_resolved">Date Resolved</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.date_resolved}
                  type="date"
                  name="date_resolved"
                  id="date_resolved"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="description">Description</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.description}
                  type="text"
                  name="description"
                  id="description"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="resolver">Resolver</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.resolver}
                  type="number"
                  name="resolver"
                  id="resolver"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="status">Status</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.status}
                  type="number"
                  name="status"
                  id="status"
                  required
                />
              </FormGroup>
              <FormGroup>
              <Label for="reimbursement_type">Reimbursement Type</Label>
                <Input
                  onChange={this.bindInputChangeToState}
                  value={this.state.reimbursement_type}
                  type="number"
                  name="reimbursement_type"
                  id="reimbursement_type"
                />
              </FormGroup>
              <Button>Add Book</Button>
            </Form>
        );
    }
}