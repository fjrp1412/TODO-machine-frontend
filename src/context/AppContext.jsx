import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userWorkspaces, setUserWorkspaces] = useState(null);
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')));
  const [value, setValue] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localStorage = window.localStorage.getItem(
      'token',
      JSON.stringify(token)
    );
    if (token && !localStorage) {
      window.localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    setValue({
      token,
      setToken,
      userWorkspaces,
      setUserWorkspaces,
      user,
      setUser,
    });
  }, [token, userWorkspaces, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
