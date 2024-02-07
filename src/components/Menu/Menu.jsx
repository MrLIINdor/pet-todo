import { TabMenu } from 'primereact/tabmenu';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Menu.css';

export default function MenuNav() {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Задачи',
      icon: 'pi pi-fw pi-home',
      command: () => {
        navigate('/');
      },
    },
    {
      label: 'Календарь',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        navigate('/review');
      },
    },
    {
      label: 'Зарисовки',
      icon: 'pi pi-fw pi-paperclip',
      command: () => {
        navigate('/draw');
      },
    },
  ];

  return (
    <div className="container-menu">
      <div className="card">
        <TabMenu model={items} />
      </div>
    </div>
  );
}
