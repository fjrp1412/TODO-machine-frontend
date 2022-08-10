import React from 'react';
import { Sidebar } from '@components/Sidebar';
import { LayoutStyles } from './LayoutStyles';

const Layout = ({ children, links }) => {
  return (
    <LayoutStyles>
      <div className="layout">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="content">
            <h1>Hola mundo</h1>
        </div>
      </div>
    </LayoutStyles>
  );
};

export { Layout };
