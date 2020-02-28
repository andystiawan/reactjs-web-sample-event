import axios from 'axios';
import { url_api } from './Config';

const PostLogin = (path, data) => {

  let formDataLogin = new FormData();
  formDataLogin.append('email', data.email);
  formDataLogin.append('password', data.password);
  formDataLogin.append('remember_me', data.remember_me);

  const configContentType = {
    headers: { 'content-type': 'application/x-www-form-urlencode' }
  };

  const urlApiLogin = `${url_api}/${path}`;

  const promise = new Promise((resolve, reject) => {
    axios.post(
      urlApiLogin,
      formDataLogin,
      configContentType
    ).then((result) => {
      resolve(result);
    }, (err) => {
      reject(err);
    })
  })
  return promise;
}

export default PostLogin;
