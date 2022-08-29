import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarUI } from './SidebarUI';
import { AppContext } from '@/context';
import { POST } from '@utils/api';

const Sidebar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem('token'))
  );
  const { id } = useParams();
  const { user, selectedWorkspace, setUserWorkspaces, userWorkspaces, setSelectedWorkspace } =
    useContext(AppContext);
  const handleItemSelect = item => {
    setSelectedWorkspace(item);
    if (id) {
      navigate('/', { replace: true });
    }
  };

  const handleAddWorkspace = async () => {
    const response = await POST({ token, url: 'workspace/' });
    setUserWorkspaces([...userWorkspaces, response.data]);
  };
  return (
    <SidebarUI
      user={user}
      selectedWorkspace={selectedWorkspace}
      items={userWorkspaces}
      handleItemSelect={handleItemSelect}
      selected={selectedWorkspace}
      handleAddWorkspace={handleAddWorkspace}
    />
  );
};

export { Sidebar };
