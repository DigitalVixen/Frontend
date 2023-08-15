import { UserActionTypes, UserState } from '../../types/user';
import { IUser } from '../../models/IUser';

export interface UserAction {
  type: string;
  payload: IUser;
}

export const initialUserState: UserState = {
  user: {
    username: '',
    password: '',
    double_password: '',
    email: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    is_staff: false,
  },
};

export const userReducer = (state = initialUserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { user: { ...action.payload } };
    default:
      return state;
  }
};

export const setUserAction = (payload: {}) => ({ type: UserActionTypes.SET_USER, payload });
