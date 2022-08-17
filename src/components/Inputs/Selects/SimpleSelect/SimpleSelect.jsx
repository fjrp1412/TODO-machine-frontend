import React from 'react';
import Select from 'react-select';
import { SimpleSelectStyles } from './SimpleSelectStyles';

const options = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];

const SimpleSelect = () => {
  return (
    <SimpleSelectStyles>
      <Select
        options={options}
        className="select-container"
        classNamePrefix="react-select"
      />
    </SimpleSelectStyles>
  );
};

export { SimpleSelect };
