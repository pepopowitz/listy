import React from 'react';

import getFriends from './get-friends';
import getLists from './get-lists';

import FriendsList from './friends-list';

export default class FriendsListContainer extends React.Component {
  state = {
    friends: [],
    lists: [],
  };

  async componentDidMount() {
    const [friends, lists] = await Promise.all([
      getFriends(),
      getLists()
    ]);

    this.setState({
      friends,
      lists,
    });
  }

  render() {
    return <FriendsList friends={this.state.friends} lists={this.state.lists} />;
  }
}
