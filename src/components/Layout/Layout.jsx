import React, { useState } from 'react';
import { Sidebar } from '@components/Sidebar';
import { LayoutStyles } from './LayoutStyles';

const Layout = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setScreenSize(window.innerWidth);
  });
  return (
    <LayoutStyles>
      <div className="layout">
        <div className={`sidebar ${screenSize <= 710 ? 'hide' : ''}`}>
          <Sidebar></Sidebar>
        </div>

        <div className="content">{children}</div>
      </div>
    </LayoutStyles>
  );
};

export { Layout };
