import React from 'react';
import ReturnToHome from '../junk-drawer/return-to-home';
import ListDetailView from './list-detail-view';
import ListDetailEdit from './list-detail-edit';

export default function({ list, isEditing, onEdit, onChange, onCancel, onSave }) {
  console.log(isEditing);
  const child = isEditing ? (
    <ListDetailEdit list={list} onChange={onChange} onCancel={onCancel} onSave={onSave} />
  ) : (
    <ListDetailView list={list} onEdit={onEdit} />
  );

  return (
    <div>
      <ReturnToHome />

      {child}
    </div>
  );
}
