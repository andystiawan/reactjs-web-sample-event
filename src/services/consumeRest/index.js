import {
  path_api_login,
  path_api_register
} from './Config';

import PostLogin from './PostLogin';
import PostRegister from './PostRegister';

const postLoginUser = (data) => PostLogin(path_api_login, data);
const postRegisterUser = (data) => PostRegister(path_api_register, data);

const API = {
  postLoginUser,
  postRegisterUser
}

export default API;
