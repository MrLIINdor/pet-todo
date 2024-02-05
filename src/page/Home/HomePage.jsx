import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { v4 as uuidv4 } from 'uuid';
import TModal from '../../components/Modal/TModal';
import TCard from '../../components/Card/TCard';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { deleteTodo } from '../../app/api/todo';
import './HomePage.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.todos);
  const [todoData, setTodoData] = useState({});
  const [modalData, setModalData] = useState({ isOpen: false, isEdit: false });

  function createModal() {
    setTodoData({
      id: uuidv4(),
      title: '',
      description: '',
      completed: false,
    });
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: true, isEdit: false }));
  }

  function editModal(todo) {
    setTodoData({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    });
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: true, isEdit: true }));
  }

  function deleteModal(todoId) {
    confirmDialog({
      message: 'Вы уверены, что хотите удалить задачу ?',
      header: 'Удаление',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        dispatch(deleteTodo(todoId));
      },
      reject: () => {},
    });
  }

  function closeModal() {
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: false, isEdit: false }));
  }

  return (
    <div>
      <div className="box-button">
        <Button className="button-create" label="Созадть" onClick={createModal} />
      </div>
      <div className="container-box">
        {data.length !== 0 ? (
          <div className="container-card">
            {data.map((item, index) => (
              <TCard key={index} record={item} edit={editModal} deleted={deleteModal} />
            ))}
          </div>
        ) : (
          <p className="page-task">Пока нет задач</p>
        )}
      </div>
      <ConfirmDialog />
      <TModal record={todoData} setRecord={setTodoData} isModal={modalData} close={closeModal} />
    </div>
  );
}
