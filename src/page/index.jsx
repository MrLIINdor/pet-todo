import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './Home/HomePage';
import ReviewPage from './Review/ReviewPage';

export default function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/review'} element={<ReviewPage />} />
    </Routes>
  );
}
