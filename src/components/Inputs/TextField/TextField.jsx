import React from 'react';
import { TextFieldStyles } from './TextFieldStyles';

const TextField = ({ type, value, handleChange, placeholder, name, sx }) => {
  return (
    <TextFieldStyles
      className="input"
      type={type || 'text'}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
      {...sx}
    ></TextFieldStyles>
  );
};

export { TextField };
