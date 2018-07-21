import React from 'react';
import Friend from './friend';
import './friends-list.css';

export default function({ friends }) {
  if (!friends || friends.length === 0) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="friends-list">
      <h2>My Friends!</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <Friend friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
