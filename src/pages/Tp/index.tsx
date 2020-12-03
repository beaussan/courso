import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TpList } from './TpList';
import { TpNew } from './TpNew';
import { TpId } from './TpId';
import { NewTpGradeMetrics } from './NewTpGradeMetrics';

const Grading = lazy(() => import('./grading/index'));

export const Tp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TpList />} />
        <Route path="/:tpId" element={<TpId />} />
        <Route path="/:tpId/grading/:promoId" element={<Grading />} />
        <Route path="/:tpId/newGradesMetrics" element={<NewTpGradeMetrics />} />
        <Route path="/new" element={<TpNew />} />
      </Routes>
    </>
  );
};

export default Tp;
