import axios from 'axios';
import { User } from '../models/User';
import { Reimbursement } from '../models/Reimbursement';
import { FailedLoginError } from '../errors/FailedLoginError';
// NEED TO EDIT THIS DOC TO MATCH MY PROJECT 0 W/ IMPORTS & ENDPTS.


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
        const {id, author, amount, datewordCount} = reimbursementObj;
        return new Book(id, author, yearPublished, wordCount);
    })  
}

export async function getAllUsers() {
    const response = await libraryClient.get('/users');
    return response.data.map((userObj: any) => {
        const {id, username, password, email, role} = userObj;
        return new User(id, username, password, email, role);
    });
}

export async function login(un: string, pw: string) {
    try {
        const response = await libraryClient.post('/login', {username: un, password: pw});
        const {userId, username, password, email, role} = response.data;
        return new User(userId, username, password, , email, role);
    } catch (e) {
        if(e.resopnse.status === 401) {
            throw new FailedLoginError('Failed to authenticate', un);
        } else {
        // We can only send info to the user via alerts or console, since we can't commmunicate with the Dom directly
        // So, we need to throw another error here, just might be a diff one. 
        throw e;
    }
}
/* The pattern above will serve you well on project 1
Axios intertprets non-200s responses statuses as errors
This means you can handle auth problems using try-catch.*/