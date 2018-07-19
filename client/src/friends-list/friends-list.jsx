import React from 'react';

export default function({ friends }) {
  if (!friends || friends.length === 0) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h2>My Friends!</h2>
      <ul>{friends.map(friend => <li key={friend.id}>{friend.name}</li>)}</ul>
    </div>
  );
}
