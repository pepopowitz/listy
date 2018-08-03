import React from 'react';

export default function({friend}) {
  return <div>
    <h2>{friend.id}: {friend.name}</h2>
    </div>;
}
