import React from 'react';

import ThemeContext from '../theme/context';
import List from './list';
import Friend from './friend';

import './friends-list.css';

export default function({ friends, lists, onListMemberChanged }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div id="friends-list" className={theme}>
          <h2>My Friends!</h2>
          <div id="friends-grid">
            <div id="friends-header">
              <div className="friend-column">Friend</div>
              {lists.map(list => (
                <List list={list} key={list.id} />
              ))}
            </div>
            <div id="friends-rows">
              {friends.map(friend => (
                <Friend
                  friend={friend}
                  lists={lists}
                  key={friend.id}
                  onListMemberChanged={onListMemberChanged}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
