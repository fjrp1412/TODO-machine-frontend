import React from 'react';
import { TODOStyles } from './TODOStyles';

const TODO = ({ title, priority }) => {
  return (
    <TODOStyles>
      <div className="TODO-title">{title}</div>

      <div className="TODO-priority">{priority}</div>

      <div className="TODO-options">
        <span className="TODO-options__option remove"></span>
        <span className="TODO-options__option check"></span>
      </div>
    </TODOStyles>
  );
};

export { TODO };
