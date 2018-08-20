import React from 'react';
import classnames from 'classnames';

import ThemeContext from './theme/context';
import ThemeSwitcher from './theme/switcher';

import './Header.css';

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={classnames('header', theme)}>
          <h1 className="header-title">listy</h1>
          <h2 className="header-subtitle">an app for lists</h2>
          <div className="header-theme-switcher">
            <ThemeSwitcher />
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
