import React, { useContext } from 'react';
import { Sidebar } from '@components/Sidebar';
import { LayoutStyles } from './LayoutStyles';
import { AppContext } from '@context/AppContext';

const Layout = ({ children }) => {
  const { userWorkspaces } = useContext(AppContext);
  return (
    <LayoutStyles>
      <div className="layout">
        <div className="sidebar">
          <Sidebar items={userWorkspaces}></Sidebar>
        </div>

        <div className="content">{children}</div>
      </div>
    </LayoutStyles>
  );
};

export { Layout };
