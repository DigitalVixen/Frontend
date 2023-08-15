import { IUser } from '../models/IUser';

export interface UserState {
  user: IUser;
}

export enum UserActionTypes {
  SET_USER = 'SET_USER',
}

export interface AxiosUserAction {
  type: UserActionTypes.SET_USER;
}

export type UserAction = AxiosUserAction;
