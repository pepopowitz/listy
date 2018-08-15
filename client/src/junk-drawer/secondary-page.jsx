import React from 'react';
import ReturnToHome from './return-to-home';

export default function({ children }) {
  return (
    <div className="secondary-page">
      <ReturnToHome />

      {children}
    </div>
  );
}
