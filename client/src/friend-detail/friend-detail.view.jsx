import React from 'react';
import SecondaryPage from '../junk-drawer/secondary-page';

export default function FriendDetailView({ friend, onEdit }) {
  return (
    <SecondaryPage>
      <div className="actions">
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </div>

      <div className="friend-detail-view-data">
        <div className="row">
          <img src={friend.profileImageUrl} alt={friend.name} />
        </div>
        <dl>
          <dd>Name:</dd>
          <dt>{friend.name}</dt>
        </dl>
      </div>
    </SecondaryPage>
  );
}
