import React, { Component } from 'react';
import User from './first-component'; // imports the component using the class Name
        // './' is used to specify root folder

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome,</p>
        <User />
      </div>
    ); 
  }
}

export default App;
