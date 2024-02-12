import React from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import './TCard.css';
import moment from 'moment';

export default function TCard({ record, edit, deleted, toggle }) {
  const footer = (
    <div className="container-button">
      <Button
        onClick={() => edit(record)}
        label="Изменить"
        icon="pi pi-pencil"
        className="button-cards"
      />
      <Button
        onClick={() => deleted(record.id)}
        label="Удалить"
        icon="pi pi-trash"
        className="p-button-outlined p-button-danger button-cards"
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
          value={record?.completed ? 'Выполнено' : 'В работе'}
          severity={record?.completed ? 'success' : 'warning'}
        />
      }
      className="container"
    >
      <p className="page">{record?.description}</p>
      <p className="page-date">До {moment(record?.startDate).format('DD.MM.YYYY HH:mm')}</p>
    </Card>
  );
}
