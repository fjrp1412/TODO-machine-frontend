import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailStyles } from './DetailStyles';
import { TextArea } from '@components/Inputs/TextArea';
import { CheckBox } from '@components/Inputs/CheckBox/CheckBox';
import { SimpleSelect } from '@components/Inputs/Selects';
import { Label } from '@components/Label';

const TODODetail = () => {
  const { id } = useParams();
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
  const [TODO, setTODO] = useState({});
  useEffect(() => {
    console.log('id', id);
    if (id) {
      setTODO(TODOItemsTest.filter(item => parseInt(id) === item.id)[0]);
    }
  }, [id]);
  console.log('TODO', TODO)
  return (
    <DetailStyles>
      <div className="form-container">
        <div className="form-container__head">
          <div className="form-todo-title field">
            <TextArea
              value={TODO.title || 'Un titulo con mucho texto'}
              handleChange={e => console.log(e.target.value)}
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
              value={TODO.completed || false}
              handleChange={e => console.log(e.target.value)}
              name="completed"
              checked={TODO.completed || false}
            />
          </div>

          <div className="form-todo__priority field">
            <SimpleSelect />
          </div>
        </div>

        <div className="form-todo__description field">
          <TextArea
            name="description"
            value={TODO.description || 'Description'}
            handleChange={e => console.log(e.target.value)}
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
