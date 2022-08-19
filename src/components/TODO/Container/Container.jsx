import React from 'react';
import { ContainerStyles } from './ContainerStyles';

const Container = ({ children, status }) => {
  return (
    <ContainerStyles>
      <div className={`TODOs-container ${status.toLowerCase()}`}>
        <div className="TODOs-container__head">{status}</div>
        <div className="TODOs-container__list">{children}</div>
      </div>
    </ContainerStyles>
  );
};

export { Container };
