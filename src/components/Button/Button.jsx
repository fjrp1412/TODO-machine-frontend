import React from 'react';
import { ButtonStyles } from './ButtonStyles';

const Button = ({ children, handleClick }) => {
  return <ButtonStyles type="button" onClick={handleClick}>{children}</ButtonStyles>;
};

export { Button };
