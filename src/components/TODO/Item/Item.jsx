import React from 'react';
import { Link } from 'react-router-dom';
import { ItemStyles } from './ItemStyles';

const Item = ({
  title,
  priority,
  handleRemove,
  handleToggleCompleted,
  finished,
  id,
}) => {
  return (
    <ItemStyles>
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
