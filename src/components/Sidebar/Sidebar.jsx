import React, { useState } from 'react';
import { SidebarUI } from './SidebarUI';

const Sidebar = ({ items, selected, setSelected }) => {

  const handleItemSelect = id => {
    setSelected(id);
  };
  return (
    <SidebarUI
      items={items}
      handleItemSelect={handleItemSelect}
      selected={selected}
    />
  );
};

export { Sidebar };
