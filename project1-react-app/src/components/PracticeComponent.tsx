import React from 'react';

/**
interface IPracticeProps {
    user: string;
}
*/

export default class Practice extends React.Component {
  
    manMan() {
        return <this.Greeting name="Jim" age={30} />;
    }

    Greeting (props: any) {
    return (
        <p>
            Hello I'm {props.name}. I'm {props.age} years old.
        </p>
    );
}

    render() {
        
        return (
            <h1>It's {this.manMan()}</h1>
        );
    }
}

