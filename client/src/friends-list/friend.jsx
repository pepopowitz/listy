import React from 'react';
import './friend.css';

export default function({ friend, lists }) {
  return (
    <div className="friend">
      <div className="identity">
        <img src={friend.profileImageUrl} alt={friend.name} />
        <h4>{friend.name}</h4>
      </div>
      {lists.map(list => (
        <div key={list.id} className="list-checkbox">
          <input type="checkbox" checked={friendIsInList(friend, list)} />
        </div>
      ))}
    </div>
  );
}

function friendIsInList(friend, list) {
  return friend.lists.includes(list.id);
}
