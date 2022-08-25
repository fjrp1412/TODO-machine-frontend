import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userWorkspaces, setUserWorkspaces] = useState(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [value, setValue] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    setValue({
      userWorkspaces,
      setUserWorkspaces,
      user,
      setUser,
      selectedWorkspace,
      setSelectedWorkspace,
    });
  }, [userWorkspaces, user, selectedWorkspace]);


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
