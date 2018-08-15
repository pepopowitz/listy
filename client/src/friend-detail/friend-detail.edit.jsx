import React from 'react';
import SecondaryPage from '../junk-drawer/secondary-page';

export default function FriendDetailEdit({ friend, onChange, onCancel, onSave }) {
  return (
    <SecondaryPage>
      <form onSubmit={onSave}>
        <div className="actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>

        <div className="friend-detail-edit-data">
          <div className="row">
            <img src={friend.profileImageUrl} alt={friend.name}/>
          </div>
          <div className="row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={friend.name}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </SecondaryPage>
  );
}
