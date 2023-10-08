import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TModal from '../../components/Modal/TModal';
import { Button } from 'primereact/button';
import { v4 as uuidv4 } from 'uuid';
import TCard from '../../components/Card/TCard';

export default function HomePage() {
  const { data, isLoading } = useSelector((state) => state.todos);
  const [todoData, setTodoData] = useState({});
  const [arrData, setArrData] = useState([]);
  const [modalData, setModalData] = useState({ isOpen: false, isEdit: false });

  function createModal() {
    setTodoData({
      id: uuidv4(),
      title: '',
      description: '',
      completed: true,
    });
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: true, isEdit: false }));
  }

  async function editModal(todo) {
    setTodoData({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    });
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: true, isEdit: true }));
  }

  function closeModal() {
    setModalData((prevModalData) => ({ ...prevModalData, isOpen: false, isEdit: false }));
  }

  useEffect(() => {
    setArrData(data);
  }, [data]);
  console.log(arrData);

  return (
    <div>
      <Button label="Созадть" onClick={createModal} />
      <div>
        {arrData.length !== 0 ? (
          arrData.map((item, index) => <TCard key={index} record={item} />)
        ) : (
          <p>sdfsdfsf</p>
        )}
      </div>

      <TModal record={todoData} setRecord={setTodoData} isModal={modalData} close={closeModal} />
    </div>
  );
}
