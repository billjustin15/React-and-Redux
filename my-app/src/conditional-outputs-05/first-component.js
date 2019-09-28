// import React, { Component } from 'react'; // we will no longer need this component because we are no longer extending that class
import React from 'react'

// const User = (props) => {   // to destructure this, use the one below
const User = ({users}) => {
    // using a functional component we dont automatically gets the props passed on to it
    // what we need to do is to take those props in as a parameter and access the props

        // const { users } = this.props    // we are no longer referring to an instance of a class anymore 
        // const { users } = props     // this is a parameter we passed on to the function // no longer needed on destructure
        const userList = users.map(user => {
            // conditional statements 
            if (user.age > 25) {
                return (
                    <div className="user-info" key={ user.id }>
                        <div>Name: { user.name } </div>
                        <div>Age: { user.age } </div>
                        <div>Email: { user.email } </div>
                    </div>
                )
            }
            else {
                return null
            }
            
        })
        // another format for conditional statements (ternary operator)
        const userList2 = users.map(user1 => {
            return user1.age > 24 ? (
                <div className="user-info" key={ user1.id }>
                    <div>Name: { user1.name } </div>
                    <div>Age: { user1.age } </div>
                    <div>Email: { user1.email } </div>
                </div>
            ) : (null)
        })

        return (
            <div className="user-list">
                { userList2 }
            </div>
        )
}

export default User;