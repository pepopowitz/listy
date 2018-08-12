import React from 'react';
import { Link } from 'react-router-dom';

export default function({ list }) {
  return (
    <div key={list.id}>
      <Link to={`/lists/${list.id}`}>{list.name}</Link>
    </div>
  );
}
