import React from 'react';

export default function ListDetailView({ list, onEdit }) {
  return (
    <div className="list-detail-view">
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
    </div>
  );
}