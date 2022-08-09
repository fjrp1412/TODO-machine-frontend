import React from 'react';
import { TextFieldStyles } from './TextFieldStyles';

const TextField = ({ label, type, value, handleChange, placeholder }) => {
  return (
    <TextFieldStyles>
      <div className='input-container'>
        <label className="input-label"> {label} </label>
        <input
          className="input"
          type={type || "text"}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </TextFieldStyles>
  );
};

export { TextField };
