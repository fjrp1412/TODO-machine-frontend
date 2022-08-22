import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import ItemType from '@utils/DnD/DndTypes.js';
import { ContainerStyles } from './ContainerStyles';

const Container = ({ children, status }) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemType.TODO,
    drop(item, monitor) {
      return {
        status: status.toLowerCase() || '',
      };
    },
  }));
  return (
    <ContainerStyles ref={drop}>
      <div className={`TODOs-container ${status.toLowerCase()}`}>
        <div className="TODOs-container__head">{status}</div>
        <div className="TODOs-container__list">{children}</div>
      </div>
    </ContainerStyles>
  );
};

export { Container };
