import React from 'react';
import './friend.css';

export default function({friend}) {
  return (
    <div className="friend">
      <img src={friend.profileImageUrl} alt={friend.name} />
      <h4>{friend.name}</h4>
    </div>
  )
}