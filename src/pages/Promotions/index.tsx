import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PromotionIndex } from './PromotionList';
import { PromotionId } from './PromotionId';
import { PromotionNew } from './PromotionNew';

export const Promotions = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PromotionIndex />} />
        <Route path=":id" element={<PromotionId />} />
        <Route path="new" element={<PromotionNew />} />
      </Routes>
    </>
  );
};
export default Promotions;
