import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userWorkspaces, setUserWorkspaces] = useState(null);
  const token = window.localStorage.getItem("token");
  const [value, setValue] = useState({});

  useEffect(() => {
    if(token) {
        setUserWorkspaces(JSON.parse(window.localStorage.getItem("userWorkspaces")));
    }
  }, [token])

  useEffect(() => {
    setValue({ token, userWorkspaces });
  }, [token, userWorkspaces]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
