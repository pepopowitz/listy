import React from 'react';

import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="return-to-home">
      <Link to="/">&lt; Return To List</Link>
    </div>
  );
}
