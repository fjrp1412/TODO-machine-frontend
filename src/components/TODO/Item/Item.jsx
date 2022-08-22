import React from 'react';
import { useDrag } from 'react-dnd';
import ItemType from '@utils/DnD/DndTypes.js';
import { Link } from 'react-router-dom';
import { ItemStyles } from './ItemStyles';

const Item = ({
  title,
  priority,
  handleRemove,
  handleToggleCompleted,
  finished,
  id,
  handleDrop,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.TODO,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(item, monitor) {
      const result = monitor.getDropResult();
      handleDrop(id, result?.status);
    },
  }));
  return (
    <ItemStyles
      ref={drag}
      opacity={isDragging ? 0.5 : 1}
      cursor={isDragging ? 'grabbing' : 'grab'}
    >
      <div className="TODO-container__head">
        <div className="TODO-title">{title}</div>
        <Link className="TODO-arrow" to={`/${id}`}></Link>
      </div>

      <div className="TODO-priority">{priority}</div>

      <div className="TODO-options">
        <span
          className="TODO-options__option remove"
          onClick={handleRemove}
        ></span>
        <span
          className={`TODO-options__option ${
            finished ? 'green-check' : 'check'
          } `}
          onClick={handleToggleCompleted}
        ></span>
      </div>
    </ItemStyles>
  );
};

export { Item };
