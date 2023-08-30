import React, { FC } from 'react';

import RegistrationForm from '../../modules/authorization/components/RegistrationForm/RegistrationForm';
import RedirectPart from '../../modules/authorization/components/RedirectPart/RedirectPart';

import './Registration.scss';

const Registration: FC = () => {
  return (
    <div className="registration">
      <div className="registration__redirect">
        <RedirectPart redirectText="Уже зарегистрированы?" redirectButtonText="Войти" />
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
