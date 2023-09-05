import React, { FC, useState } from 'react';
import './LoginForm.scss';

import { login } from '../../asyncActions/login';
import { useActions } from '../../../../hooks/useActions';
import Title from '../../UI/Title/Title';
import Input from '../../../../ui/Input/Input';
import Button from '../../../../ui/Button/Button';

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useActions();

  return (
    <div className="login-form">
      <div className="login-form__arrow">
        <img src="./../../../../img/arrowleft.svg" alt="Back" />
      </div>
      <div className="login-form__container container-login-form">
        <Title>Войти в личный кабинет</Title>
        <div className="container-login-form__inputs">
          <Input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Имя пользователя" />
          <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Пароль" />
        </div>
        <div className="container-login-form__button">
          <Button onClick={() => login(username, password)} medium={true} bgColor="#93C6E4">
            Войти
          </Button>
        </div>
        <div className="container-login-form__button container-login-form__button-registration">
          <Button medium={true} bgColor="#93C6E4">
            Зарегистрироваться
          </Button>
        </div>
        <div className="container-login-form__link">Забыли пароль?</div>
      </div>
    </div>
  );
};

export default LoginForm;
