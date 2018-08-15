import React from 'react';
import SecondaryPage from '../junk-drawer/secondary-page';

export default function ListDetailEdit({ list, onChange, onCancel, onSave }) {
  return (
    <SecondaryPage>
      <form onSubmit={onSave}>
        <div className="actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>

        <div className="list-detail-edit-data">
          <div className="row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={list.name}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </SecondaryPage>
  );
}
