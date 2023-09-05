import { combineReducers } from 'redux';

import { userReducer } from '../../modules/authorization/store/reducers/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
