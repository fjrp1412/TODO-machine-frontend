import React from 'react';
import { SidebarStyles } from './SidebarStyles';
import UserDefaultImg from "@assets/user-default.png";

const Sidebar = () => {
  return (
    <SidebarStyles>
      <nav className="sidebar">

        <div className="sidebar-header">
          <div className="sidebar-header__img">
            <img src={UserDefaultImg} alt="user" className="img" />
          </div>
          <div className="sidebar-header__description">
            <span className="sidebar-header__username">Francisco Ruiz</span>
            <span className="sidebar-header__workspace">Workspace</span>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-content__container">
            <div className="sidebar-content__item selected">
              <span>Workspace 1</span>
            </div>
            <div className="sidebar-content__item">
              <span>Workspace 1</span>
            </div>{' '}
            <div className="sidebar-content__item">
              <span>Workspace 1</span>
            </div>{' '}
            <div className="sidebar-content__item">
              <span>Workspace 1</span>
            </div>
          </div>
        </div>
      </nav>
    </SidebarStyles>
  );
};

export { Sidebar };
