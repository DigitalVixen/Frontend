import { Dispatch } from 'redux';
import Cookies from 'universal-cookie';

import { UserAction } from '../types/user';
import AuthService from '../services/AuthService';
import { setUserAction } from '../store/reducers/userReducer';
const cookies = new Cookies();

export const registration = (
  username: string,
  password: string,
  double_password: string,
  email: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  is_staff: boolean,
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.registration(
        username,
        password,
        double_password,
        email,
        first_name,
        last_name,
        middle_name,
        is_staff,
      );
      console.log(response);
      localStorage.setItem('ob_', response.data.access);
      cookies.set('ob_', response.data.refresh);
      dispatch(setUserAction(response.data));
      console.log(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};
