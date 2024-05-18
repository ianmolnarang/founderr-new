import api from '../api';

const login = async data => {
  console.log('main login error wa......', data);
  return api
    .post('auth/login', data)
    .then(async response => {
      console.log('LOGIN RESPONSE: ' + JSON.stringify(response));
    })
    .catch(error => {
      console.log('ERROR:', error);
    });
};

export default {
  login,
};
