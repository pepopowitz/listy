import React from 'react';
import getList from './api/get-list';
import updateList from './api/update-list';

import Loading from '../loading';
import ListDetail from './list-detail';

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

    return (
      <ListDetail
        list={this.state.list}
        isEditing={this.state.isEditing}
        onEdit={this.handleEdit}
        onChange={this.handleChange}
        onCancel={this.handleCancel}
        onSave={this.handleSave}
      />
    );
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

  handleSave = async (event) => {
    event.preventDefault();
    
    await updateList(this.state.list);
    this.setState({
      isEditing: false,
    });
  };
}
