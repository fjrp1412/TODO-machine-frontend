import React from 'react';
import { ButtonStyles } from './ButtonStyles';

const Button = ({ children, handleClick, sx }) => {
  return <ButtonStyles type="button" onClick={handleClick} {...sx} >{children}</ButtonStyles>;
};

export { Button };
