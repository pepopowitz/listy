import React from 'react';
import './friend.css';

export default function({ friend }) {
  return (
    <tr className="friend">
      <td className="identity">
        <img src={friend.profileImageUrl} alt={friend.name} />
        <h4>{friend.name}</h4>
      </td>
      {friend.lists.map(list => (
        <td key={list.id}>
          {list.id}: <input type="checkbox" checked={list.selected} />
        </td>
      ))}
    </tr>
  );
}
