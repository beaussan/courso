import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HandOffIndex } from './HandOffIndex';
import { HandOffId } from './HandOffId';

export const HandOff = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HandOffIndex />} />
        <Route path="/:handoffId" element={<HandOffId />} />
      </Routes>
    </>
  );
};

export default HandOff;
