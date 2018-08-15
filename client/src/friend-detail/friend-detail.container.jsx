import React from 'react';
import getFriend from './api/get-friend';
import updateFriend from './api/update-friend';

import Loading from '../junk-drawer/loading';
import FriendDetailView from './friend-detail.view';
import FriendDetailEdit from './friend-detail.edit';

export default class FriendDetailContainer extends React.Component {
  state = {
    friend: undefined,
    isEditing: false,
  };

  async componentDidMount() {
    // this.props.match is passed in via react.router
    const friendId = this.props.match.params.id;

    const friend = await getFriend(friendId);

    this.setState({
      friend,
    });
  }

  render() {
    if (this.state.friend === undefined) {
      return <Loading />;
    }

    if (this.state.isEditing) {
      return (
        <FriendDetailEdit
          friend={this.state.friend}
          onChange={this.handleChange}
          onCancel={this.handleCancel}
          onSave={this.handleSave}
        />
      );
    }

    return <FriendDetailView friend={this.state.friend} onEdit={this.handleEdit} />;
  }

  handleEdit = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        friend: {
          ...prevState.friend,
          name: value,
        },
      };
    });
  };

  handleCancel = () => {
    this.setState({
      isEditing: false,
    });
  };

  handleSave = async event => {
    event.preventDefault();

    await updateFriend(this.state.friend);
    this.setState({
      isEditing: false,
    });
  };
}
