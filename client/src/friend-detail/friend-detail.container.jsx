import React from 'react';

// api stuff

import Loading from '../loading';
import FriendDetail from './friend-detail';

export default class FriendDetailContainer extends React.Component {
  state = {
    friend: undefined
  };

  async componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        friend: {
          // this.props.match is passed through via react router
          id: this.props.match.params.id,
          name: 'Mr. Fluffypants'
        }
      })
    }, 2000);
  }

  render() {
    if (this.state.friend === undefined) {
      return <Loading />;
    }
    
    return <FriendDetail
      friend={this.state.friend} />
  }
}