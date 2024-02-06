import React from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import './TCard.css';

export default function TCard({ record, edit, deleted, toggle }) {
  const footer = (
    <div className="container-button">
      <Button onClick={() => edit(record)} label="Изменить" icon="pi pi-pencil" />
      <Button
        onClick={() => deleted(record.id)}
        label="Удалить"
        icon="pi pi-trash"
        className="p-button-outlined p-button-danger"
      />
    </div>
  );

  return (
    <Card
      footer={footer}
      title={
        <div className="container-title">
          <p className="container-title__page">{record?.title}</p>
          <Checkbox checked={record?.completed} onChange={() => toggle(record.id)} />
        </div>
      }
      subTitle={
        <Tag
          value={record?.completed ? 'Выполнено' : 'Начато'}
          severity={record?.completed ? 'success' : 'warning'}
        />
      }
      className="container"
    >
      <p className="page">{record?.description}</p>
    </Card>
  );
}
