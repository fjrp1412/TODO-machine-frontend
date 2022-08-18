import React from 'react';
import { Link } from 'react-router-dom';
import { TODOStyles } from './TODOStyles';

const TODO = ({
  title,
  priority,
  handleRemove,
  handleToggleCompleted,
  finished,
  id,
}) => {
  return (
    <TODOStyles>
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
    </TODOStyles>
  );
};

export { TODO };
