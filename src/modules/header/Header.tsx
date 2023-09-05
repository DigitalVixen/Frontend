import React, { FC } from 'react';

import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';

const Header: FC = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
