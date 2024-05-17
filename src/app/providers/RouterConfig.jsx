import React, { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuNav from '../../components/Menu/Menu';
import { useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';

export default function RouterConfig({ children }) {
  const { toast } = useSelector((state) => state.notifications);
  const toastTopRight = useRef(null);

  useEffect(() => {
    toastTopRight.current.show(toast);
  }, [toast]);

  return (
    <BrowserRouter>
      <MenuNav />
      <Toast ref={toastTopRight} position="top-right" />
      {children}
    </BrowserRouter>
  );
}
