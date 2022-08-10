import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAuthWrapper = ({ children }) => {
  const token = window.localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  });

  return <>{children}</>;
};

export { UserAuthWrapper };
