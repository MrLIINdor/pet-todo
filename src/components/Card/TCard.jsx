import React from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function TCard({ record, edit, deleted }) {
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button
        // onClick={edit}
        label="Изменить"
        icon="pi pi-pencil"
      />
      <Button
        // onClick={deleted}
        label="Удалить"
        icon="pi pi-trash"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  return (
    <Card
      footer={footer}
      title={record?.title}
      subTitle={<Tag value="Primary" severity={record?.completed ? 'success' : 'warning'} />}
      className="md:w-25rem"
    >
      <p className="m-0">{record?.description}</p>
    </Card>
  );
}
