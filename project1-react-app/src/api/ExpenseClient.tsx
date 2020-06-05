import axios from 'axios';
import { User } from '../models/User';
import { Reimbursement } from '../models/Reimbursement';
import { FailedLogin } from '../errors/FailedLogin';

const expenseClient = axios.create({
    baseURL: 'http://3.235.223.124:2400',
    // if you don't have the following line, your Login won't work!
    withCredentials: true, // If you have this line, you'll be fine. 
})

// Library-express is running on my EC2 with public IP 3.235.223.124
// Promise<void> works too with no return type. 
export async function getAllReimbursements() : Promise<Reimbursement[]> {
    const response = await expenseClient.get('/reimbursements');
    // we're going to get an array back if we hit the url listed above. w/ /books
    return response.data.map((reimbursementObj: any) => {
        const {id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type} = reimbursementObj;
        return new Reimbursement(id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type);
    })  
}
 
export async function getReimbursementByUser(user_id: number) : Promise<Reimbursement[]> {
    const response = await expenseClient.get(`/reimbursements/author/userId/${user_id}`);
    // Get an array of reimbursement info back
    return response.data.map((reimbursementObj: any) => {
        const {id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type} = reimbursementObj;
        return new Reimbursement(id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type);
    })
}

// post new reimbursement
export async function postNewReimbursement(r: Reimbursement): Promise<any> {
    try {
      
      const response = await expenseClient.post("/reimbursements", {
        id: 0,
        title: r.author,
        amount: r.amount,
        date_submitted: r.date_submitted,
        date_resolved: r.date_resolved,
        description: r.description,
        resolver: r.resolver,
        status: r.status,
        reimbursement_type: r.reimbursement_type
      });
    } catch (e) {
      throw e;
    }
}

export async function getAllUsers() : Promise<User[]> {
    const response = await expenseClient.get('/users');
    return response.data.map((userObj: any) => {
        const {user_id, username, password, first_name, last_name, email, role} = userObj;
        return new User(user_id, username, password, first_name, last_name, email, role);
    });
}

export async function login(un: string, pw: string) {
    try {
        const response = await expenseClient.post('/login', {username: un, password: pw});
        const {user_id, username, password, first_name, last_name, email, role} = response.data;
        return new User(user_id, username, password, first_name, last_name, email, role);
    } catch (e) {
        if(e.resopnse.status === 401) {
            throw new FailedLogin(`Failed to authenticate with username ${un}`);
        } else {
        // We can only send info to the user via alerts or console, since we can't commmunicate with the Dom directly
        // So, we need to throw another error here, just might be a diff one. 
        throw new Error("There was a problem logging in.");
        }
    }
}
/* The pattern above will serve you well on project 1
Axios intertprets non-200s responses statuses as errors
This means you can handle auth problems using try-catch.*/