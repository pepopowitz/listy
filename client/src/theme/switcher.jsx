import React from 'react';

import ThemeContext from './context';

export default function() {
  return (
    <ThemeContext.Consumer>
      {({ theme, onThemeChanged }) => (
        <button onClick={onThemeChanged}>Change Theme</button>
      )}
    </ThemeContext.Consumer>
  );
}
