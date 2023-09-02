import React, { FC } from 'react';
import './Title.scss';

interface props {
  children: string;
}

const Title: FC<props> = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export default Title;
