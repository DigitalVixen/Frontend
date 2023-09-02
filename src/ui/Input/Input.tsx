import React, { FC, InputHTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  return <input {...props} type="text" placeholder={placeholder} className="ui-input" />;
};

export default Input;
