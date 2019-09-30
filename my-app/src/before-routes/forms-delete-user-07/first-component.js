// import React, { Component } from 'react'; // we will no longer need this component because we are no longer extending that class
import React from 'react'

// const User = (props) => {   // to destructure this, use the one below
const User = ({users, deleteUser}) => {
    // using a functional component we dont automatically gets the props passed on to it
    // what we need to do is to take those props in as a parameter and access the props

        // const { users } = this.props    // we are no longer referring to an instance of a class anymore 
        // const { users } = props     // this is a parameter we passed on to the function // no longer needed on destructure
        const userList = users.map(user => {
            // conditional statements 
            if (user.age > 20) {
                return (
                    <div className="user-info" key={ user.id }>
                        <div>Name: { user.name } </div>
                        <div>Age: { user.age } </div>
                        <div>Email: { user.email } </div>
                        <button onClick={ _ => deleteUser(user.id) }>Delete User</button>
                    </div>
                ) // each time we output a user, we output a button for delete
                    // and then we will need to get the id and pass it on to the delete function
                    // <button onClick={ deleteUser(user.id) }>Delete User</button> will automatically fire the function every time
            }
            else {
                return null
            }  
        })

        return (
            <div className="user-list">
                { userList }
            </div>
        )
}

export default User;