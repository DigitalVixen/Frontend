import React, { FC } from 'react';

import LoginForm from '../../modules/authorization/components/LoginForm/LoginForm';
import RedirectPart from '../../modules/authorization/components/RedirectPart/RedirectPart';

import './Login.scss';

const Login: FC = () => {
  return (
    <div className="login">
      <LoginForm />
      <div className="login__redirect">
        <RedirectPart redirectText="У вас ещё нет аккаунта?" redirectButtonText="Зарегистрироваться" />
      </div>
    </div>
  );
};

export default Login;
