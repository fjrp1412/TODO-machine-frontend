import React from 'react';
import { SidebarStyles } from './SidebarStyles';
import UserDefaultImg from '@assets/user-default.png';

const SidebarUI = ({
  items,
  handleItemSelect,
  selected,
  selectedWorkspace,
  user,
}) => {
  return (
    <SidebarStyles>
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header__img">
            <img src={UserDefaultImg} alt="user" className="img" />
          </div>
          <div className="sidebar-header__description">
            <span className="sidebar-header__username">{user?.email}</span>
            <span className="sidebar-header__workspace">
              {selectedWorkspace?.title}
            </span>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-content__container">
            {items &&
              items.map(item => (
                <div
                  className={`sidebar-content__item ${
                    selected.id === item.id ? 'selected' : ''
                  }`}
                  onClick={() => handleItemSelect(item)}
                  key={item.id}
                >
                  <span>{item.title}</span>
                </div>
              ))}
          </div>
        </div>
      </nav>
    </SidebarStyles>
  );
};

export { SidebarUI };
