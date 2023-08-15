import React, { FC, useState } from 'react';

import { useActions } from '../../../../hooks/useActions';
import Title from '../../UI/Title/Title';
import Input from '../../../../ui/Input/Input';
import Button from "../../../../ui/Button/Button";

import "./RegistrationForm.scss"

const RegistrationForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [double_password, setDoublePassword] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [is_staff, setIsStaff] = useState(false);

  const { registration } = useActions();

  return (
    <div className="registration-form">
      <div className="registration-form__arrow">
        <img src="./../../../../img/arrowleft.svg" alt="Back" />
      </div>
      <div className="registration-form__container container-registration-form">
        <Title>Регистрация</Title>
        <div className="container-registration-form__inputs inputs">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Имя пользователя *"
            type="text"
          />
          <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Пароль *" type="text" />
          <Input
            onChange={(e) => setDoublePassword(e.target.value)}
            value={double_password}
            placeholder="Подтвердите пароль *"
            type="text"
          />
          <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail *" type="text" />
          <div className="inputs__name">
            <Input onChange={(e) => setFirstName(e.target.value)} value={first_name} placeholder="Имя *" type="text" />
            <Input onChange={(e) => setLastName(e.target.value)} value={last_name} placeholder="Отчество" type="text" />
          </div>
          <Input
            onChange={(e) => setMiddleName(e.target.value)}
            value={middle_name}
            placeholder="Фамилия *"
            type="text"
          />
        </div>
        <div className="container-registration-form__button">
          <Button
            medium={true}
            bgColor="#93C6E4"
            onClick={() =>
              registration(username, password, double_password, email, first_name, last_name, middle_name, is_staff)
            }
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className="container-registration-form__button container-registration-form__button-login">
          <Button medium={true} bgColor="#93C6E4">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
