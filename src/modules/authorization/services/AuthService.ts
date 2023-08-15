import { AxiosResponse } from 'axios';

import api from '../http';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/', { username, password });
  }

  static async registration(
    username: string,
    password: string,
    double_password: string,
    email: string,
    first_name: string,
    last_name: string,
    middle_name: string,
    is_staff: boolean,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/create/', {
      username,
      password,
      double_password,
      email,
      first_name,
      last_name,
      middle_name,
      is_staff,
    });
  }
}
