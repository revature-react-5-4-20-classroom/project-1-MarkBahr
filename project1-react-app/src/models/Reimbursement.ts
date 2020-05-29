/* Any class that implements IReimbursement must have a reimbursementId, author, amount,
dateSubmitted, dateResolved, description, resolver, status, and type.
*/
export class Reimbursement {
    id : number; // primary key
        author : number; // foreign key -> User, not null
        amount : number; // not null
    dateSubmitted : Date; // not null
    dateResolved : Date; // not null
    description : string; // not null
    resolver : number; // foreign key -> User
    status : number; // foreign key -> ReimbursementStatus, not null
    reimbursementType : number; // foreign key -> Reimbursement Type
    
    constructor(id:number, author:number, amount:number, dateSubmitted:Date, dateResolved:Date, description:string, resolver:number, status:number, reimbursementType:number){
        this.id = id;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status = status;
        this.reimbursementType =reimbursementType;
    }
}

