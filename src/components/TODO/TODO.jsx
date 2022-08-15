import React from 'react';
import { TODOStyles } from './TODOStyles';

const TODO = ({
  title,
  priority,
  handleRemove,
  handleToggleCompleted,
  finished,
}) => {
  return (
    <TODOStyles>
      <div className="TODO-title">{title}</div>

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
