import React from 'react';

import getFriends from './api/get-friends';
import getLists from './api/get-lists';
import addFriendToList from './api/add-friend-to-list';
import removeFriendFromList from './api/remove-friend-from-list';

import Loading from '../loading';
import FriendsList from './friends-list';

export default class FriendsListContainer extends React.Component {
  state = {
    friends: [],
    lists: [],
  };

  async componentDidMount() {
    const [friends, lists] = await Promise.all([getFriends(), getLists()]);

    this.setState({
      friends,
      lists,
    });
  }

  render() {
    if (this.state.friends === undefined || this.state.friends.length === 0) {
      return <Loading />;
    }

    return (
      <FriendsList
        friends={this.state.friends}
        lists={this.state.lists}
        onListMemberChanged={this.handleListMemberChanged}
      />
    );
  }

  handleListMemberChanged = async (friend, list) => {
    if (friend.lists.includes(list.id)) {
      await removeFriendFromList(friend, list);
      this.setState(prevState => ({
        ...prevState,
        friends: removeFriendFromListInState(prevState.friends, friend, list),
      }));
    } else {
      await addFriendToList(friend, list);
      this.setState(prevState => ({
        ...prevState,
        friends: addFriendToListInState(prevState.friends, friend, list),
      }));
    }
  };
}

// extract this somewhere?
// talk about immutability somehow.
//  maybe set them up with some unit tests for this?
function removeFriendFromListInState(friends, friend, list) {
  return friends.map(f => {
    if (f.id !== friend.id) {
      return f;
    }
    return {
      ...f,
      lists: f.lists.filter(l => l !== list.id),
    };
  });
}

// extract this somewhere?
// talk about immutability somehow.
//  maybe set them up with some unit tests for this?
function addFriendToListInState(friends, friend, list) {
  return friends.map(f => {
    if (f.id !== friend.id) {
      return f;
    }
    return {
      ...f,
      lists: [...f.lists, list.id],
    };
  });
}
