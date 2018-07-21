import React from 'react';

import getFriends from './get-friends';
import mapFriendsAndLists from './map-friends-and-lists';

import FriendsList from './friends-list';

export default class FriendsListContainer extends React.Component {
  state = {
    friends: [],
    lists: [],
  };

  async componentDidMount() {
    const friends = await getFriends();
    const lists = [
      {
        id: '1',
        name: 'list 1',
      },
      {
        id: '2',
        name: 'list 2',
      },
      {
        id: '3',
        name: 'list 3',
      },
    ];

    const friendsWithLists = mapFriendsAndLists(friends);

    this.setState({
      friends: friendsWithLists,
      lists,
    });
  }

  render() {
    return <FriendsList friends={this.state.friends} lists={this.state.lists} />;
  }
}
