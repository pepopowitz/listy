import React from 'react';
import getFriend from './api/get-friend';
import updateFriend from './api/update-friend';

import Loading from '../junk-drawer/loading';
import FriendDetail from './friend-detail';

export default class FriendDetailContainer extends React.Component {
  state = {
    friend: undefined
  };

  async componentDidMount() {
    // this.props.match is passed in via react.router
    const friendId = this.props.match.params.id;

    const friend = await getFriend(friendId);

    this.setState({
      friend
    });
  }

  render() {
    if (this.state.friend === undefined) {
      return <Loading />;
    }
    
    return <FriendDetail
      friend={this.state.friend} />
  }
}