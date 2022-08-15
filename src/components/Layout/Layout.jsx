import React, { useContext, useState } from 'react';
import { Sidebar } from '@components/Sidebar';
import { LayoutStyles } from './LayoutStyles';
import { AppContext } from '@context/AppContext';

const Layout = ({ children }) => {
  const { userWorkspaces } = useContext(AppContext);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setScreenSize(window.innerWidth);
  });
  return (
    <LayoutStyles>
      <div className="layout">
        <div className={`sidebar ${screenSize <= 710 ? 'hide' : ''}`}>
          <Sidebar items={userWorkspaces}></Sidebar>
        </div>

        <div className="content">
          {children}
        </div>
      </div>
    </LayoutStyles>
  );
};

export { Layout };
