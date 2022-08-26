import React from 'react';
import { CheckBoxStyles } from './CheckBoxStyles';

const CheckBox = ({ sx, value, name, handleChange, checked }) => {
  return (
    <CheckBoxStyles
      {...sx}
      name={name}
      onChange={handleChange}
      type="checkbox"
      checked={checked}
    ></CheckBoxStyles>
  );
};

export { CheckBox };
