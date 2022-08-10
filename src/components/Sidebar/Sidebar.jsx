import React, { useState } from 'react';
import { SidebarUI } from './SidebarUI';

const Sidebar = ({ items }) => {
  const [selected, setSelected] = useState(0);

  const handleItemSelect = idx => {
    setSelected(idx);
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
