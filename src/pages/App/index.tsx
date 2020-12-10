import React, { Suspense, lazy } from 'react';
import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { ReactComponent as HomeSvg } from '../../icons/solid/home.svg';
import { ReactComponent as Book } from '../../icons/solid/book-open.svg';
import { ReactComponent as Library } from '../../icons/solid/library.svg';
import { Dash } from '../Dash';
import { useCurrentUserRole } from '../../hooks/useCurrentUserRole';
import { RouteWithRule } from '../../components/RouteWithRule';

import { Loader } from '../../components/Loader';

const Tp = lazy(() => import('../Tp'));
const Course = lazy(() => import('../Courses'));
const HandOff = lazy(() => import('../HandOff'));

const links = [
  {
    icon: HomeSvg,
    label: 'Dashboard',
    url: '/app/dash',
    roles: ['teacher', 'student'],
  },
  { icon: Book, label: 'TPs', url: '/app/tp', roles: ['teacher'] },
  {
    icon: Library,
    label: 'Course',
    url: '/app/course',
    roles: ['teacher'],
  },
  // { icon: Book, label: 'Students', url: '/app/students', roles: ['teacher'] },
  { icon: Book, label: 'Handoff', url: '/app/handoff', roles: ['student'] },
];

export const AppShel = () => {
  const userRole = useCurrentUserRole();
  const finalRoles = links.filter((item) => item.roles.includes(userRole));

  return (
    <Nav links={finalRoles}>
      <Suspense fallback={<Loader visible={true} />}>
        <Routes>
          <Navigate to="dash" />
          <Route path="dash" element={<Dash />} />
          <RouteWithRule
            roles={['student']}
            path="handoff/*"
            element={<HandOff />}
          />
          <RouteWithRule roles={['teacher']} path="tp/*" element={<Tp />} />
          <RouteWithRule
            roles={['teacher']}
            path="promos/*"
            element={<Course />}
          />
        </Routes>
        <Outlet />
      </Suspense>
    </Nav>
  );
};

export default AppShel;
