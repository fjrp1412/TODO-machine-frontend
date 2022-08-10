import React from 'react';

import { Layout } from '@components/Layout';

const Home = () => {
  const sidebarItems = [
    {
      title: 'workspace 1',
      id: 1,
    },
    {
      title: 'workspace 2',
      id: 2,
    },
    {
      title: 'workspace 3',
      id: 3,
    },
  ];
  return (
    <Layout sidebarItems={sidebarItems}>
      <h1>Hola mundo</h1>
    </Layout>
  );
};

export { Home };
