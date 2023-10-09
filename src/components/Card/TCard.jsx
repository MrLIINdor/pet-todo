import React from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './TCard.css';

export default function TCard({ record, edit, deleted }) {
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
      title={record?.title}
      subTitle={
        <Tag
          value={record?.completed ? 'Выполнино' : 'Начато'}
          severity={record?.completed ? 'success' : 'warning'}
        />
      }
      className="container"
    >
      <p className="page">{record?.description}</p>
    </Card>
  );
}
