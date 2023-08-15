import { Dispatch } from 'redux';

import Cookies from 'universal-cookie';

import AuthService from '../services/AuthService';
import { setUserAction } from '../store/reducers/userReducer';
import { UserAction } from '../types/user';
const cookies = new Cookies();

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.login(username, password);
      console.log(response);
      localStorage.setItem('ob_', response.data.access);
      cookies.set('ob_', response.data.refresh);
      dispatch(setUserAction(response.data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};
