
export interface INewReimbFormProps {
    addReimbursement: ()=>void
}

export interface INewReimbFormState {
    author: number;
    amount: number;
    date_submitted : Date; // not null
    date_resolved : Date; // not null
    description : string; // not null
    resolver : number; // foreign key -> User
    status : number; // foreign key -> ReimbursementStatus, not null
    reimbursement_type : number; // foreign key -> Reimbursement Type
}

