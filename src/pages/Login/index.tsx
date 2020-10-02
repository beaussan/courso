import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../../hooks/useAuthState';
import { LoginComponent } from '../../components/LoginComponent';

export const Login = () => {
  const authState = useAuthState();
  const navigate = useNavigate();
  useEffect(() => {
    if (authState === 'in') {
      navigate('/app');
    }
  }, [authState, navigate]);

  return <LoginComponent hero="Login into the app" />;
};

export default Login;
