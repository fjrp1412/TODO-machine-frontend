import React from 'react';
import { LabelStyles } from './LabelStyle';

const Label = ({ children, sx }) => {
  return <LabelStyles {...sx }>{children}</LabelStyles>;
};

export { Label };