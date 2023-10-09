import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
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
    <div>
      <Button label="Отмена" icon="pi pi-times" onClick={close} className="p-button-text" />
      <Button
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
      footer={footerContent}
      visible={isModal.isOpen}
      onHide={close}
    >
      <div className="container">
        <InputText
          placeholder="Название"
          value={record.title}
          onChange={(e) => setRecord({ ...record, title: e.target.value })}
        />
        <InputTextarea
          placeholder="Описание"
          value={record.description}
          onChange={(e) => setRecord({ ...record, description: e.target.value })}
          className="input-d"
        />
        <InputSwitch
          checked={record.completed}
          onChange={(e) => setRecord({ ...record, completed: e.value })}
        />
      </div>
    </Dialog>
  );
}
