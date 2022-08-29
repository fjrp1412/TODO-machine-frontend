import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeUI } from './HomeUI';
import { AppContext } from '@context';
import useApi from '@hooks/useApi';
import { PATCH } from '@utils/api';

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
    setSelectedWorkspace,
    selectedWorkspace,
  } = useContext(AppContext);

  const userResponse = useApi({
    url: 'user/me/',
    method: 'GET',
    token,
  });

  const workspaceResponse = useApi({
    url: `workspace/${selectedWorkspace ? selectedWorkspace.id + '/' : ''}`,
    method: 'GET',
    token,
  });

  const [pendings, setPendings] = useState([]);
  const [doings, setDoings] = useState([]);
  const [finisheds, setFinisheds] = useState([]);

  const [filteredTOODs, setFilteredTODOs] = useState();
  const [open, setOpen] = useState(false);
  const [editableWorkspace, setEditableWorkspace] = useState(null);

  useEffect(() => {
    setUser(userResponse.response?.data.user);
  }, [userResponse]);

  useEffect(() => {
    setTODOItems(workspaceResponse.response?.data.TODOs);
    if (!selectedWorkspace) {
      setUserWorkspaces(workspaceResponse.response?.data);
      setSelectedWorkspace(workspaceResponse.response?.data[0]);
      setEditableWorkspace(workspaceResponse.response?.data[0]);
    }
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
  const [selectedItemRemove, setSelectedItemRemove] = useState(null);
  const deleteItemResponse = useApi({
    url: `todo/${selectedItemRemove ? selectedItemRemove + '/' : ''}`,
    method: selectedItemRemove && 'DELETE',
    token,
  });

  const handleRemoveItem = id => {
    setSelectedItemRemove(id);
    setFilteredTODOs(previous => previous.filter(item => item.id !== id));
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

  useApi({
    token,
    url: `todo/${itemDragged?.id ? itemDragged.id + '/' : ''}`,
    body: itemDragged?.id && itemDragged,
    method: itemDragged?.id && 'PATCH',
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
            item.status = status;
            item.completed = status === 'finished';
            setItemDragged(item);
          }
          return item;
        })
      );
    }
  };

  const [createTODOBody, setCreateTODOBody] = useState(null);

  const createTODOResponse = useApi({
    method: createTODOBody && 'POST',
    token,
    url: 'todo/',
    body: createTODOBody,
  });
  const handleAddTODO = () => {
    setCreateTODOBody({ workspace: selectedWorkspace.id });
  };

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (createTODOResponse.response) {
      setFilteredTODOs([
        ...filteredTOODs,
        { ...createTODOResponse.response.data },
      ]);
      setSearchParams({ TODO: createTODOResponse.response.data.id });
    }
  }, [createTODOResponse.response]);

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

  const handleUpdateWorkspace = (field, value) => {
    console.log('field', field);
    console.log('value', value);
    setEditableWorkspace({ ...editableWorkspace, [field]: value });
  };

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (editableWorkspace) {
        const response = await PATCH({
          url: `workspace/${selectedWorkspace.id}/`,
          body: editableWorkspace,
          token,
        });
        console.log('response', response);
        setSelectedWorkspace({ ...response.data });
        setUserWorkspaces(previous => {
          return [
            ...previous.map(item =>
              item.id === response.data.id ? response.data : item
            ),
          ];
        });
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [editableWorkspace]);

  console.log('selected workspace', selectedWorkspace);

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
      workspace={editableWorkspace}
      handleAddTODO={handleAddTODO}
      handleUpdateWorkspace={handleUpdateWorkspace}
    />
  );
};

export default Home;
