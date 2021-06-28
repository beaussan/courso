import React from 'react';
import { LoginComponent } from '@/components/LoginComponent';
import { getOutLayout } from '@/layouts/WithUserOut';

export const Login = () => {
  return <LoginComponent hero="Login into the app" />;
};

Login.getLayout = getOutLayout;

export default Login;
