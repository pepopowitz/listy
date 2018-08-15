import React from 'react';
import getList from './api/get-list';
import updateList from './api/update-list';

import Loading from '../junk-drawer/loading';
import ListDetailView from './list-detail.view';
import ListDetailEdit from './list-detail.edit';

export default class ListDetailContainer extends React.Component {
  state = {
    list: undefined,
    isEditing: false,
  };

  async componentDidMount() {
    // this.props.match is passed in via react.router
    const listId = this.props.match.params.id;

    const list = await getList(listId);

    this.setState({
      list,
    });
  }

  render() {
    if (this.state.list === undefined) {
      return <Loading />;
    }

    if (this.state.isEditing) {
      return (
        <ListDetailEdit
          list={this.state.list}
          onChange={this.handleChange}
          onCancel={this.handleCancel}
          onSave={this.handleSave}
        />
      );
    }

    return <ListDetailView list={this.state.list} onEdit={this.handleEdit} />;
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
        list: {
          ...prevState.list,
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

    await updateList(this.state.list);
    this.setState({
      isEditing: false,
    });
  };
}
