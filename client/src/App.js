import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import FriendsList from './friends-list';
import ListDetail from './list-detail';
import FriendDetail from './friend-detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">listy</h1>
            <h2 className="App-subtitle">an app for lists</h2>
          </header>
          <Route exact path="/" component={FriendsList} />
          <Route path="/lists/:id" component={ListDetail} />
          <Route path="/friends/:id" component={FriendDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
