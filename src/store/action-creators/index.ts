import * as LoginActionCreators from '../../modules/authorization/asyncActions/login';
import * as RegistrationActionCreators from '../../modules/authorization/asyncActions/registration';

import * as UserActionCreators from './user';

export default {
  ...UserActionCreators,
  ...LoginActionCreators,
  ...RegistrationActionCreators,
};
