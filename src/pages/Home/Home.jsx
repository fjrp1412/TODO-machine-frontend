import React, { useState, useEffect } from 'react';
import { HomeUI } from './HomeUI';

const Home = () => {
  const [query, setQuery] = useState({});
  const TODOItemsTest = [
    {
      id: 1,
      title: 'Todo 1',
      priority: 'Low',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Todo 2',
      priority: 'Low',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Todo 3',
      priority: 'Medium',
      status: 'doing',
    },
    {
      id: 4,
      title: 'Todo 4',
      priority: 'Medium',
      status: 'doing',
    },
    {
      id: 5,
      title: 'Todo 5',
      priority: 'High',
      status: 'finished',
    },
    {
      id: 6,
      title: 'Todo 6',
      priority: 'High',
      status: 'finished',
    },
  ];
  const [pendings, setPendings] = useState([]);
  const [doings, setDoings] = useState([]);
  const [finisheds, setFinisheds] = useState([]);

  const [TODOItems, setTODOItems] = useState(TODOItemsTest);

  useEffect(() => {
    setPendings(
      TODOItems.filter(item => item.status.toLowerCase() === 'pending')
    );
    setDoings(TODOItems.filter(item => item.status.toLowerCase() === 'doing'));
    setFinisheds(
      TODOItems.filter(item => item.status.toLowerCase() === 'finished')
    );
  }, [TODOItems]);

  const handleChangeQuery = field => {
    setQuery({ ...query, [field]: !query[field] });
  };

  const handleRemoveItem = id => {
    console.log(id);
    setTODOItems(previous => previous.filter(item => item.id !== id));
  };
  return (
    <HomeUI
      query={query}
      handleChangeQuery={handleChangeQuery}
      pendings={pendings}
      doings={doings}
      finisheds={finisheds}
      handleRemoveItem={handleRemoveItem}
    />
  );
};

export { Home };
