import React from 'react';
import getList from './api/get-list';

import Loading from '../loading';
import ListDetail from './list-detail';

export default class ListDetailContainer extends React.Component {
  state = {
    list: undefined,
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

    return <ListDetail list={this.state.list} />;
  }
}
