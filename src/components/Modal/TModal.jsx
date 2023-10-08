import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { createTodo, deleteTodo, editTodo } from '../../app/api/todo';
import './TModal.css';

export default function TModal({ record, setRecord, isModal, close }) {
  const dispatch = useDispatch();

  function addTodo() {
    dispatch(createTodo({ ...record }));
    close();
  }

  const footerContent = (
    <div>
      <Button label="No" icon="pi pi-times" onClick={close} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={addTodo} />
    </div>
  );

  return (
    <Dialog
      style={{ width: '50vw' }}
      footer={footerContent}
      visible={isModal.isOpen}
      onHide={close}
    >
      <div className="container">
        <InputText
          value={record.title}
          onChange={(e) => setRecord({ ...record, title: e.target.value })}
        />
        <InputTextarea
          value={record.description}
          onChange={(e) => setRecord({ ...record, description: e.target.value })}
          className="input-d"
          rows={5}
          cols={30}
        />
        <InputSwitch
          checked={record.completed}
          onChange={(e) => setRecord({ ...record, completed: e.value })}
        />
      </div>
    </Dialog>
  );
}
