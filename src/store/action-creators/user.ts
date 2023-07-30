import { Dispatch } from 'redux';
import axios from 'axios';

import { UserAction } from '../../types/user';
import {
  axiosUserErrorReducerAction,
  axiosUserReducerAction,
  axiosUserSuccessReducerAction,
} from '../reducers/userReducer';

export const axiosGetUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(axiosUserReducerAction());
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(axiosUserSuccessReducerAction(response.data));
    } catch (e) {
      dispatch(axiosUserErrorReducerAction('Ошибка при получение пользователей'));
    }
  };
};
