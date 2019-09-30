import React, { Component } from 'react'

class AddUser extends Component {

    state = {
        name: null,
        age: null,
        email: null
    }

    handleChange = (e) => {
        this.setState({
            // to update the property depending on the input name
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 'this.props' refers to the function/props we passed down from App.js
        this.props.addUser(this.state)
    }
    render() {
        return (
            <div>
                <br /><br />
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={ this.handleChange } />
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={ this.handleChange } />
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" onChange={ this.handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

// still have to inject this to the DOM in the root
// import and call
export default AddUser