import React from 'react';
import { TextAreaStyles } from './TextAreaStyles';

const TextArea = ({ value, handleChange, name, sx }) => {
  return (
    <TextAreaStyles
      value={value}
      onChange={handleChange}
      name={name}
      {...sx}
    />
  );
};

export { TextArea };
