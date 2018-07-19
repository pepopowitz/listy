import React, { Component } from 'react';
import './App.css';

import FriendsList from './friends-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">listy</h1>
          <h2 className="App-subtitle">an app for lists</h2>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
