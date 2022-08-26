import React from 'react';
import Select from 'react-select';
import { SimpleSelectStyles } from './SimpleSelectStyles';


const SimpleSelect = ({options, handleChange, value}) => {
  return (
    <SimpleSelectStyles>
      <Select
        options={options}
        className="select-container"
        classNamePrefix="react-select"
        onChange={handleChange}
        defaultValue={value}
      />
    </SimpleSelectStyles>
  );
};

export { SimpleSelect };
