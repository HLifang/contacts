import React from 'react';

class User extends React.Component{
    render(){
        return (
            <p>Username:{this.props.username}</p>
            <p>Is friend? :{this.props.friend}</p>
        )
    }
}


<User username="Michael" friend={true} />