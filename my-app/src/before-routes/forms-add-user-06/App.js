import React, { Component } from 'react';
import User from './first-component'; // imports the component using the class Name
        // './' is used to specify root folder
import AddUser from './addUser';

class App extends Component {
  state = {
    users: [
      {name: 'Bill Justin', age: '25', email: 'billjustin.manalo@gmail.com', id: 1},
      {name: 'Jerome', age: '28', email: 'jerome@gmail.com', id: 2},
      {name: 'Gab', age: '21', email: 'gab@gmail.com', id: 3}
    ]
  }
  // to be able to add a new user into the array, we must first create a function
  // so that we can call the function from the addUser component
  addUser = (user) => {
      user.id = Math.random()
      // this.users.push(user)  the push will alter the original array, not add a new one. 
      // also, you cannot do this inside setState

      // this spread operator takes the this.state.users array and spreading it out by adding ... into its individual objects and
      // putting those objects as a new element in the array
      let users = [...this.state.users, user]   // will add the new element into the array
      this.setState({
        users: users    // takes the original users aray and assigning it the new array value
      })

  }
  
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome,</p>
        <User users = { this.state.users } />
        <AddUser addUser={ this.addUser } // passing this as prop
        />
      </div>
    ); 
  }
}

export default App;
