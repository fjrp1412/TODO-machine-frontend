import React, { useState, useEffect, useContext } from 'react';
import { HomeUI } from './HomeUI';
import { AppContext } from '@context';
import useApi from '@hooks/useApi';

const Home = () => {
  const [query, setQuery] = useState({
    low: false,
    medium: false,
    high: false,
    all: true,
  });
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setScreenSize(window.innerWidth);
  });

  const [TODOItems, setTODOItems] = useState([]);

  const token = JSON.parse(window.localStorage.getItem('token'));

  const {
    setUser,
    setUserWorkspaces,
    user,
    userWorkspaces,
    setSelectedWorkspace,
    selectedWorkspace,
  } = useContext(AppContext);

  const userResponse = useApi({
    url: 'user/me/',
    method: 'GET',
    token,
  });

  const workspaceResponse = useApi({
    url: `workspace/${selectedWorkspace ? selectedWorkspace + '/' : ''}`,
    method: 'GET',
    token,
  });

  const [pendings, setPendings] = useState([]);
  const [doings, setDoings] = useState([]);
  const [finisheds, setFinisheds] = useState([]);

  const [filteredTOODs, setFilteredTODOs] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser(userResponse.response?.data.user);
    setUserWorkspaces(userResponse.response?.data.workspaces);
    if (!selectedWorkspace) {
      setSelectedWorkspace(userResponse.response?.data.workspaces[0].id);
    }
  }, [userResponse]);

  useEffect(() => {
    setTODOItems(workspaceResponse.response?.data.TODOs);
  }, [workspaceResponse]);

  /*
  Setting the filteredTODOs to the TODOItems every time TODOItems change. 

  It is called when component is mountend and when TODOItems change
*/
  useEffect(() => {
    setFilteredTODOs(TODOItems);
  }, [TODOItems]);

  /* Filtering the TODOItems by the query. */
  useEffect(() => {
    let auxFiltered = [...TODOItems];
    if (query['all']) {
      setFilteredTODOs(TODOItems);
      return;
    }

    if (!query['low'] && !query['medium'] && !query['high'] && !query['all']) {
      setQuery({ ...query, all: true });
      setFilteredTODOs(TODOItems);
      return;
    }

    for (const property in query) {
      if (!query[property]) {
        auxFiltered = auxFiltered.filter(
          item => item.priority.toLowerCase() !== property
        );
      }
    }

    setFilteredTODOs(auxFiltered);
  }, [query]);

  /**
   * The function takes a field as an argument, and then sets the query state to the current query state,
   * but with the field that was passed in toggled
   */
  const handleChangeQuery = field => {
    setQuery({ ...query, [field]: !query[field] });
  };

  /**
   * If the id of the item is not equal to the id of the item we want to remove, then keep it in the
   * array.
   */
  const handleRemoveItem = id => {
    setTODOItems(previous => previous.filter(item => item.id !== id));
  };


/**
 * We're mapping over the TODOItems array, and if the item's id matches the id passed in, we're
 * toggling the item's completed property and setting the item's status to either 'finished' or
 * 'pending' depending on the item's completed property
 */
  const handleToggleCompleted = id => {
    setTODOItems(
      TODOItems.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
          item.status = item.completed ? 'finished' : 'pending';
          return item;
        }

        return item;
      })
    );
  };


  const [itemDragged, setItemDragged] = useState(null);

  const dndTodoItemResponse = useApi({
    token,
    url: `todo/${itemDragged?.id}/`,
    body: itemDragged,
    method: 'PATCH',
  });


/**
 * It takes an id and a status as parameters, and if the status sended is different from the status of the item,
 * it maps through the todo items and sets the status of the item with the matching id to the status passed in.
 * 
 * Also, set the ItemDragged for update state in useApi hook to send PATCH method to the api on the purpose of update
 * the status and completed attributes of the item
 * 
 */
  const handleDrop = (id, status) => {
    if (status) {
      setTODOItems(previous =>
        previous.map(item => {
          if (item.id === id && item.status !== status) {
            console.log('entre')
            item.status = status;
            item.completed = status === 'finished';
            console.log('item', item);
            setItemDragged(item);
          }
          return item;
        })
      );
    }
  };

  /* Setting the pendings, doings and finisheds to the filteredTODOs every time filteredTODOs change. */
  useEffect(() => {
      setPendings(
        filteredTOODs?.filter(item => item.status.toLowerCase() === 'pending')
      );
      setDoings(
        filteredTOODs?.filter(item => item.status.toLowerCase() === 'doing')
      );
      setFinisheds(
        filteredTOODs?.filter(item => item.status.toLowerCase() === 'finished')
      );
  }, [filteredTOODs]);

  return (
    <HomeUI
      query={query}
      handleChangeQuery={handleChangeQuery}
      pendings={pendings}
      doings={doings}
      finisheds={finisheds}
      handleRemoveItem={handleRemoveItem}
      handleToggleCompleted={handleToggleCompleted}
      open={open}
      onOpenModal={() => setOpen(true)}
      onCloseModal={() => setOpen(false)}
      screenSize={screenSize}
      handleDrop={handleDrop}
    />
  );
};

export default Home;
