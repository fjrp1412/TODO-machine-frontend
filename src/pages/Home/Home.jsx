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
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      priority: 'Low',
      status: 'pending',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      priority: 'Medium',
      status: 'doing',
      completed: false,
    },
    {
      id: 4,
      title: 'Todo 4',
      priority: 'Medium',
      status: 'doing',
      completed: false,
    },
    {
      id: 5,
      title: 'Todo 5',
      priority: 'High',
      status: 'finished',
      completed: true,
    },
    {
      id: 6,
      title: 'Todo 6',
      priority: 'High',
      status: 'finished',
      completed: true,
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
    setTODOItems(previous => previous.filter(item => item.id !== id));
  };

  const handleToggleCompleted = id => {
    setTODOItems(
      TODOItems.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;

          if (item.completed && item.status === 'pending') {
            item.status = 'finished';
            console.log('item post modificarse pending', item);
            return item;
          }
          if (item.completed && item.status === 'doing') {
            item.status = 'finished';
            console.log('item post modificarse doing', item);
            return item;
          }

          item.status = 'pending';
        }

        return item;
      })
    );
  };

  return (
    <HomeUI
      query={query}
      handleChangeQuery={handleChangeQuery}
      pendings={pendings}
      doings={doings}
      finisheds={finisheds}
      handleRemoveItem={handleRemoveItem}
      handleToggleCompleted={handleToggleCompleted}
    />
  );
};

export { Home };
