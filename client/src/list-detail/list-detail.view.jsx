import React from 'react';
import SecondaryPage from '../junk-drawer/secondary-page';

export default function ListDetailView({ list, onEdit }) {
  return (
    <SecondaryPage>
      <div className="actions">
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </div>

      <div className="list-detail-view-data">
        <dl>
          <dd>Name:</dd>
          <dt>{list.name}</dt>
        </dl>
      </div>
    </SecondaryPage>
  );
}