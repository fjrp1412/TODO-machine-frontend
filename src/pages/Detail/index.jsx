import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { DetailStyles } from './DetailStyles';
import { TextArea } from '@components/Inputs/TextArea';
import { CheckBox } from '@components/Inputs/CheckBox/CheckBox';
import { SimpleSelect } from '@components/Inputs/Selects';
import { Label } from '@components/Label';
import useApi from '@hooks/useApi';

const TODODetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [TODOUrlParam, setTODOUrlParam] = useState(null);
  const [TODO, setTODO] = useState({});
  const [stopGet, setStopGet] = useState(false);
  const [editableTODO, setEditableTODO] = useState({});

  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
  ];

  useEffect(() => {
    setTODOUrlParam(searchParams.get('TODO'));
  }, [searchParams]);

  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem('token'))
  );
  const TODOresponse = useApi({
    url: `todo/${id ? id : TODOUrlParam}/`,
    method: (id || TODOUrlParam) && !stopGet && 'GET',
    token,
  });

  const TODOUpdateResponse = useApi({
    url: `todo/${id ? id : TODOUrlParam}/`,
    method: (id || TODOUrlParam) && 'PATCH',
    body: TODO,
    token,
  });

  useEffect(() => {
    console.log(TODOresponse);
    if (!TODOresponse.loading && TODOresponse.response?.data && !stopGet) {
      console.log('entre');
      setEditableTODO(TODOresponse.response?.data);
      setStopGet(true);
    }
  }, [TODOresponse]);

  useEffect(() => {
    return () => {
      if (!id) {
        setSearchParams({}, { replace: true });
      }
    };
  }, []);

  const handleChange = (key, e) => {

    if (key === 'completed') {
      console.log('check', e.target.checked);
      setEditableTODO(previous => {
        return { ...previous, [key]: e.target.checked, 'status': 'finished' };
      });
    } else {
      setEditableTODO(previous => {
        return { ...previous, [key]: e.target.value };
      });
    }
  };

  const handleChangeSelect = (key, value) => {
    setEditableTODO(previous => {
      return { ...previous, [key]: value.toLowerCase() };
    });
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setTODO(editableTODO);
    }, 1000);

    return () => clearTimeout(delay);
  }, [editableTODO]);

  return (
    <DetailStyles>
      <div className="form-container">
        <div className="form-container__head">
          <div className="form-todo-title field">
            <TextArea
              value={editableTODO?.title}
              handleChange={e => handleChange('title', e)}
              name="title"
            ></TextArea>
          </div>

          <div className="form-todo__completed field">
            <Label
              sx={{
                margin: '0px 10px 0px 0px',
                color: 'rgba(255, 255, 255, .7)',
                fontSize: '1.8rem',
              }}
            >
              Completed
            </Label>
            <CheckBox
              value={editableTODO?.completed || false}
              handleChange={e => handleChange('completed', e)}
              name="completed"
              checked={editableTODO?.completed}
            />
          </div>

          <div className="form-todo__priority field">
            <SimpleSelect
              options={options}
              handleChange={choice =>
                handleChangeSelect('priority', choice.value)
              }
              value={editableTODO?.priority}
            />
          </div>
        </div>

        <div className="form-todo__description field">
          <TextArea
            name="description"
            value={editableTODO?.description}
            handleChange={e => handleChange('description', e)}
            sx={{
              height: '100%',
              fontSize: '1.6rem',
            }}
          />
        </div>
      </div>
    </DetailStyles>
  );
};

export default TODODetail;
