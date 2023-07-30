import {
  AxiosUserAction,
  AxiosUserErrorAction,
  AxiosUserSuccessAction,
  IUserState,
  UserAction,
  UserActionTypes,
} from '../../types/user';

const initialState: IUserState = {
  user: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.AXIOS_USER:
      return { ...state, loading: true, error: null };
    case UserActionTypes.AXIOS_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserActionTypes.AXIOS_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const axiosUserReducerAction = (): AxiosUserAction => ({
  type: UserActionTypes.AXIOS_USER,
});
export const axiosUserSuccessReducerAction = (payload: any[]): AxiosUserSuccessAction => ({
  type: UserActionTypes.AXIOS_USER_SUCCESS,
  payload,
});
export const axiosUserErrorReducerAction = (payload: string): AxiosUserErrorAction => ({
  type: UserActionTypes.AXIOS_USER_ERROR,
  payload,
});
