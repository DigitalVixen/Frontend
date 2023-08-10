export interface IUserState {
  user: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  AXIOS_USER = 'AXIOS_USER',
  AXIOS_USER_SUCCESS = 'AXIOS_USER_SUCCESS',
  AXIOS_USER_ERROR = 'AXIOS_USER_ERROR',
}

// запрос
export interface AxiosUserAction {
  type: UserActionTypes.AXIOS_USER;
}

// если запрос успешен
export interface AxiosUserSuccessAction {
  type: UserActionTypes.AXIOS_USER_SUCCESS;
  payload: any[];
}

// если запрос успешен
export interface AxiosUserErrorAction {
  type: UserActionTypes.AXIOS_USER_ERROR;
  payload: string;
}

export type UserAction = AxiosUserAction | AxiosUserSuccessAction | AxiosUserErrorAction;
