import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HandOffIndexPage = lazy(() => import('./list/index'));
const HandOffIdPage = lazy(() => import('./HandOffId'));

export const HandOff = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HandOffIndexPage />} />
        <Route path="/:handoffId" element={<HandOffIdPage />} />
      </Routes>
    </>
  );
};

export default HandOff;
