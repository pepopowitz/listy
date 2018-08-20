import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import ThemeProvider from './theme/provider';
import Header from './Header';
import FriendsList from './friends-list';
import ListDetail from './list-detail';
import FriendDetail from './friend-detail';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider>
          <div className="App">
            <Header />
            <Route exact path="/" component={FriendsList} />
            <Route path="/lists/:id" component={ListDetail} />
            <Route path="/friends/:id" component={FriendDetail} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
