import React, { FC } from 'react';

import './RedirectPart.scss';
import Button from '../../../../ui/Button/Button';

interface RedirectPart {
  redirectText: string;
  redirectButtonText: string;
}

const RedirectPart: FC<RedirectPart> = ({ redirectText, redirectButtonText }) => {
  return (
    <div className="redirect-part">
      <div className="redirect-part__content redirect-content">
        <div className="redirect-content__logo redirect-logo">
          <img className="redirect-logo__img" src="../img/logo.jpg" alt="logo" />
          <div className="redirect-logo__title">
            <span>Digital</span>Vixen
          </div>
          <h2 className="redirect-logo__quote">Не просто магазин бытовой техники</h2>
        </div>
        <div className="redirect-content__text">{redirectText}</div>
        <Button big={true} bgColor="#93C6E4">
          {redirectButtonText}
        </Button>
      </div>
    </div>
  );
};

export default RedirectPart;
