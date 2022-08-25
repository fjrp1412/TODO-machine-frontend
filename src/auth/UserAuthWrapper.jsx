import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context';

const UserAuthWrapper = ({ children }) => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      navigate('/login', { replace: true });
    }
  }, [token]);

  return <>{children}</>;
};

export { UserAuthWrapper };
