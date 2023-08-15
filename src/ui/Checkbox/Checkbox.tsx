import React, { FC, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input type="checkbox" className="ui-checkbox" {...props} />;
};

export default Checkbox;
