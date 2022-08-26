import React, {useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarUI } from './SidebarUI';
import { AppContext } from '@/context';

const Sidebar = ({ items, selected, setSelected }) => {
  const navigate = useNavigate();
  const { id } = useParams() 
  const { user, selectedWorkspace } = useContext(AppContext); 

  const handleItemSelect = item => {
    setSelected(item);
    if(id) {
      navigate('/', {replace: true})
    }
  };
  return (
    <SidebarUI
      user={user}
      selectedWorkspace={selectedWorkspace}
      items={items}
      handleItemSelect={handleItemSelect}
      selected={selected}
    />
  );
};

export { Sidebar };
