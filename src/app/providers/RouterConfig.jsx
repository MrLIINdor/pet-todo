import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuNav from '../../components/Menu/Menu';

export default function RouterConfig({ children }) {
  return (
    <BrowserRouter>
      <MenuNav />
      {children}
    </BrowserRouter>
  );
}
