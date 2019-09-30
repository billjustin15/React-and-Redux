import React, { Component } from 'react';
import User from './first-component'; // imports the component using the class Name
        // './' is used to specify root folder

class App extends Component {
  state = {
    users: [
      {name: 'Bill Justin', age: '25', email: 'billjustin.manalo@gmail.com', id: 1},
      {name: 'Jerome', age: '28', email: 'jerome@gmail.com', id: 2},
      {name: 'Gab', age: '21', email: 'gab@gmail.com', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome,</p>
        <User users = { this.state.users } />
      </div>
    ); 
  }
}

export default App;
