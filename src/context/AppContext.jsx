import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userWorkspaces, setUserWorkspaces] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [value, setValue] = useState({});

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    setValue({ token, setToken, userWorkspaces, setUserWorkspaces });
  }, [token, userWorkspaces]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
