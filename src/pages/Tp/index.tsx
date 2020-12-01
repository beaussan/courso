import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TpList } from './TpList';
import { TpNew } from './TpNew';
import { TpId } from './TpId';
import { NewTpGradeMetrics } from './NewTpGradeMetrics';

export const Tp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TpList />} />
        <Route path="/:id" element={<TpId />} />
        <Route path="/:id/newGradesMetrics" element={<NewTpGradeMetrics />} />
        <Route path="/new" element={<TpNew />} />
      </Routes>
    </>
  );
};

export default Tp;
