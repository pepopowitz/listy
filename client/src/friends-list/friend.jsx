import React from 'react';
import './friend.css';

export default function({ friend, lists }) {
  return (
    <tr className="friend">
      <td className="identity">
        <img src={friend.profileImageUrl} alt={friend.name} />
        <h4>{friend.name}</h4>
      </td>
      {lists.map(list => (
        <td key={list.id}>
          <input type="checkbox" checked={friendIsInList(friend, list)} />
        </td>
      ))}
    </tr>
  );
}

function friendIsInList(friend, list) {
  return friend.lists.includes(list.id);
}
