import React from 'react';

import getFriends from './get-friends';

import FriendsList from './friends-list';

export default class FriendsListContainer extends React.Component {
  state = {
    friends: [],
  };

  async componentDidMount() {
    const friends = await getFriends();

    this.setState({
      friends,
    });
  }

  render() {
    return <FriendsList friends={this.state.friends} />;
  }
}
