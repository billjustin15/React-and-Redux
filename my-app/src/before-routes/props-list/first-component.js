import React, { Component } from 'react';

class User extends Component {
    render() {
        // grabs the user properties array from the state
        // each list should have a unique identifier or id to pinpoint the item to be deleted/updated
        const { users } = this.props
        const userList = users.map(user => {
            return (
                <div className="user-info" key={ user.id }>
                    <div>Name: { user.name } </div>
                    <div>Age: { user.age } </div>
                    <div>Email: { user.email } </div>
                </div>
            )
        })
        return(
            <div className="user-list">
                { userList }
            </div>
        )
    }
}

export default User;