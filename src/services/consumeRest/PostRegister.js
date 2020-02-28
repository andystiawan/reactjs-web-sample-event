import axios from 'axios';
import { url_api } from './Config';

const PostRegister = (path, data) => {

  let formDataRegister = new FormData();
  formDataRegister.append('fullname', data.fullname);
  formDataRegister.append('username', data.username);
  formDataRegister.append('phone', data.phone);
  formDataRegister.append('address', data.address);
  formDataRegister.append('email', data.email);
  formDataRegister.append('password', data.password);

  const configContentType = {
    headers: { 'content-type': 'application/x-www-form-urlencode' }
  };

  const urlApiRegis = `${url_api}/${path}`;
  
  const promise = new Promise((resolve, reject) => {
    axios.post(
      urlApiRegis,
      formDataRegister,
      configContentType
    ).then((result) => {
      resolve(result);
    }, (err) => {
      reject(err.response);
    })
  })
  return promise;
}

export default PostRegister;
