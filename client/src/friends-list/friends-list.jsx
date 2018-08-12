import React from 'react';
import List from './list';
import Friend from './friend';
import './friends-list.css';

export default function({ friends, lists, onListMemberChanged }) {
  return (
    <div id="friends-list">
      <h2>My Friends!</h2>
      <div id="friends-grid">
        <div id="friends-header">
          <div className="friend-column">Friend</div>
          {lists.map(list => <List list={list} key={list.id} />)}
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
  );
}
