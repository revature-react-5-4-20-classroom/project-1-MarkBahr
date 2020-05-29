import React from 'react';
import { prependOnceListener } from 'cluster';
import { stringify } from 'querystring';


interface IUserTableProps {
    name: string;
}

// To pass things in teh constructor, it helps to have an interface. 
// the Generics use the interface, but they don't implement it. 
export class UserTable extends React.Component<IUserTableProps> {
    
    constructor(props: IUserTableProps) {
        super(props);
        this.state = {
            name: "Your Name"
            
        }
    }
    
    myTeam = (name: string) => {
    return <h2>{this.props.name} is on your team!</h2>
    }


    render() {
        
        return ( 
            
            <div>
                <h1>Who is on your team?</h1>
                <p>{this.myTeam("Bob")}</p>
                <p>{this.myTeam("Jacob")}</p>
                <p>{this.myTeam("Javier")}</p>
                <p>{this.myTeam("Jason")}</p>
                <p>{this.myTeam("Sandra")}</p>
            </div>
            
        );
    }
}






/*
class UserTable extends React.Component<UserTableProps> {
    constructor(props: any) {
        super(props)
        this.state = {
            users: [
                {userId: 1, username: 'tWalker', password: '123password', firstName: 'Thomas', lastName: 'Walker', email: 'twalker@gmail.com', role: 1},
                {userId: 2, username: 'jWalker', password: '123password', firstName: 'Jacob', lastName: 'Walker', email: 'jwalker@gmail.com', role: 2},
                {userId: 3, username: 'aBaker', password: '123password', firstName: 'Aaron', lastName: 'Baker', email: 'abaker@gmail.com', role: 3},
                {userId: 4, username: 'jBaker', password: '123password', firstName: 'Jesse', lastName: 'Baker', email: 'jbaker@gmail.com', role: 4}
            ]
        }
    }


    renderData() {
        return this.state.users.map((user, index) => {
            const { userId, username, password, firstName, lastName, email, role } = user
            return (
                <tr key={userId}>
                    <td>{userId}</td>
                    <td>{username}</td>
                    <td>{password}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                </tr>
            )
        });
    }

    renderHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase}</th>
        })
    }


    render() {
        return (
            <div>
                <h1 id="label">User Table</h1>
                <table id="users">
                    <tbody>
                    {this.props.users.map(
                        (user: any, i) => {return <tr key={i}><td>{user}</td></tr>}
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserTable  
*/


/*
function Cell(props) {
    return ()
}
*/

/* the HTML WAY
export class UserTable extends React.Component  {
    renderTable() {
        return (
            <table>
                <caption>Users Table</caption>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>tWalker2</td>
                        <td>123password</td>
                        <td>Thomas</td>
                        <td>Walker</td>
                        <td>twalker@gmail.com</td>
                        <td>Finance Manager</td>
                    </tr>
                </thead>
                
            </table>
        )
    }
}
*/