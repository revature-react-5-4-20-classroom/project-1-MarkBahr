import React from 'react';
import { prependOnceListener } from 'cluster';
import { stringify } from 'querystring';


interface IReimburseCompProps {
    reimbursement: string;
}

export class ReimburseComp extends React.Component<IReimburseCompProps> {
    /*
    constructor(props: IUserTableProps) {
        super(props);
        this.state = {
            name: string;
        }
    }
    
    printString = () => {
        this.setState({voterId : this.state.voterId + 1})
    }
    */
    render() {
        
        return ( 
            <p>Submit Reimbursements?: {this.props.reimbursement}</p>
            
        );
    }
}