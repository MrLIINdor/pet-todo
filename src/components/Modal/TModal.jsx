import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useDispatch } from 'react-redux';
import { createTodo, editTodo } from '../../app/api/todo';
import './TModal.css';

export default function TModal({ record, setRecord, isModal, close }) {
  const dispatch = useDispatch();

  function addTodo() {
    dispatch(createTodo({ ...record }));
    close();
  }

  function updateTodo() {
    dispatch(editTodo({ ...record }));
    close();
  }

  const footerContent = (
    <div className="button-box">
      <Button
        className="p-button-text button-dialog"
        label="Отмена"
        icon="pi pi-times"
        onClick={close}
      />
      <Button
        className="button-dialog"
        label={isModal.isEdit ? 'Изменить' : 'Создать'}
        icon="pi pi-check"
        onClick={isModal.isEdit ? updateTodo : addTodo}
      />
    </div>
  );

  return (
    <Dialog
      modal
      header={isModal.isEdit ? 'Изменение' : 'Создание'}
      className="box"
      contentStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      footer={footerContent}
      visible={isModal.isOpen}
      onHide={close}
    >
      <InputText
        placeholder="Название"
        value={record.title}
        onChange={(e) => setRecord({ ...record, title: e.target.value })}
      />
      <InputTextarea
        autoResize
        placeholder="Описание"
        value={record.description}
        onChange={(e) => setRecord({ ...record, description: e.target.value })}
        className="input-d"
      />
      <Calendar
        showIcon
        showTime
        dateFormat="dd.mm.yy"
        placeholder="Когда выполнить ?"
        value={record.startDate && new Date(record.startDate)}
        onChange={(e) => setRecord({ ...record, startDate: e.value.toString() })}
      />
    </Dialog>
  );
}
