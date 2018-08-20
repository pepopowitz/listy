import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import ThemeContext from '../theme/context';

import './friend.css';

export default function({ friend, lists, onListMemberChanged }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={classnames('friend', theme)}>
          <div className="identity">
            <Link to={'/friends/' + friend.id}>
              <img src={friend.profileImageUrl} alt={friend.name} />
            </Link>
            <Link to={'/friends/' + friend.id}>
              <h4>{friend.name}</h4>
            </Link>
          </div>
          {lists.map(list => (
            <div key={list.id} className="list-checkbox">
              <input
                type="checkbox"
                checked={friendIsInList(friend, list)}
                onChange={() => onListMemberChanged(friend, list)}
              />
            </div>
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

function friendIsInList(friend, list) {
  return friend.lists.includes(list.id);
}
