import React from 'react';
import { Sidebar } from '@components/Sidebar';
import { LayoutStyles } from './LayoutStyles';

const Layout = ({ children, sidebarItems }) => {
  return (
    <LayoutStyles>
      <div className="layout">
        <div className="sidebar">
          <Sidebar items={sidebarItems}></Sidebar>
        </div>

        <div className="content">{children}</div>
      </div>
    </LayoutStyles>
  );
};

export { Layout };
