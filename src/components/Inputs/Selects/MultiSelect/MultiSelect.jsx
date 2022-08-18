import React from 'react';
import Select from 'react-select';
import { MultiSelectStyles } from './MultiSelectStyles';

const options = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];

const MultiSelect = () => {
  return (
    <MultiSelectStyles>
      <Select
        options={options}
        className="select-container"
        classNamePrefix="react-select"
        isMulti
      />
    </MultiSelectStyles>
  );
};

export default MultiSelect;
