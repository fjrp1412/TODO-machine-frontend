import React from 'react';
import { ButtonStyles } from './ButtonStyles';

const Button = ({ children, handleClick, sx, type }) => {
  return (
    <ButtonStyles type={type || 'button'} onClick={handleClick} {...sx}>
      {children}
    </ButtonStyles>
  );
};

export { Button };
