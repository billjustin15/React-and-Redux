import React, { Component } from 'react';

class User extends Component {
    render() {
        // // gets the 'User' properties and values from app.js
        // // <User name="Bill" age="24" email="billjustin.manalo@gmail.com" />
        // // console.log(this.props)
        // return (
        //     <div className="user-info">
        //         <div>{ this.props.name }</div>
        //         <div>{ this.props.age }</div>
        //         <div>{ this.props.email }</div>
        //     </div>
        // )

        // will store the this. 'User' properties in a const
        // this will make the components reusable - you can declare property values as many as you want
        const { name, age, email} = this.props
        return(
            <div className="user-info">
                <div>{ name }</div>
                <div>{ age }</div>
                <div>{ email }</div>
            </div>
        )
    }
}

export default User;