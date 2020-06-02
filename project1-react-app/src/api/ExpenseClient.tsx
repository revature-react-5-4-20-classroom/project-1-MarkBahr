import axios from 'axios';
import { User } from '../models/User';
import { Reimbursement } from '../models/Reimbursement';
import { FailedLogin } from '../errors/FailedLogin';

const libraryClient = axios.create({
    baseURL: 'http://3.235.223.124:2400',
    // if you don't have the following line, your Login won't work!
    withCredentials: true, // If you have this line, you'll be fine. 
})

// Library-express is running on my EC2 with public IP 3.235.223.124
// Promise<void> works too with no return type. 
export async function getAllReimbursements() : Promise<Reimbursement[]> {
    const response = await libraryClient.get('/reimbursements');
    // we're going to get an array back if we hit the url listed above. w/ /books
    return response.data.map((reimbursementObj: any) => {
        const {id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type} = reimbursementObj;
        return new Reimbursement(id, author, amount, date_submitted, date_resolved, description, resolver, status, reimbursement_type);
    })  
}

export async function getAllUsers() : Promise<User[]> {
    const response = await libraryClient.get('/users');
    return response.data.map((userObj: any) => {
        const {user_id, username, password, first_name, last_name, email, role} = userObj;
        return new User(user_id, username, password, first_name, last_name, email, role);
    });
}

export async function login(un: string, pw: string) {
    try {
        const response = await libraryClient.post('/login', {username: un, password: pw});
        const {user_id, username, password, first_name, last_name, email, role} = response.data;
        return new User(user_id, username, password, first_name, last_name, email, role);
    } catch (e) {
        if(e.resopnse.status === 401) {
            throw new FailedLogin('Failed to authenticate', un);
        } else {
        // We can only send info to the user via alerts or console, since we can't commmunicate with the Dom directly
        // So, we need to throw another error here, just might be a diff one. 
        throw e;
    }
    }
}
/* The pattern above will serve you well on project 1
Axios intertprets non-200s responses statuses as errors
This means you can handle auth problems using try-catch.*/