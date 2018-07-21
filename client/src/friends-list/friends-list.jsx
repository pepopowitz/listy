import React from 'react';
import Friend from './friend';
import './friends-list.css';

export default function({ friends, lists }) {
  if (!friends || friends.length === 0) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="friends-list">
      <h2>My Friends!</h2>
      <table>
        <thead>
          <tr>
            <th>Friend</th>
            {lists.map(list => <th key={list.id}>{list.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </tbody>
      </table>
    </div>
  );
}
