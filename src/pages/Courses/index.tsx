import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CourseIndex } from './CourseList';
import { CourseId } from './CourseId';
import { CourseNew } from './CourseNew';

export const Courses = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CourseIndex />} />
        <Route path=":id" element={<CourseId />} />
        <Route path="new" element={<CourseNew />} />
      </Routes>
    </>
  );
};
export default Courses;
