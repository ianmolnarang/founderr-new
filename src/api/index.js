import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken} from '../utils/helper';

export const host = __DEV__
  ? 'https://founderr-mu.vercel.app/api/'
  : 'https://founderr-mu.vercel.app/api/';

let axiosInstance = axios.create({
  baseURL: host,
});

console.log('base url.........', host);

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

function network() {
  return new Promise((resolve, reject) => {
    NetInfo.fetch().then(state => {
      resolve(state.isConnected);
    });
  });
}

axiosInstance.interceptors.request.use(
  async config => {
    /** In dev, intercepts request and logs it into console for dev */
    // const loginToken = JSON.parse(
    //   await AsyncStorage.getItem(appConstant.token),
    // );

    // let isLogin = JSON.parse(data);

    if (await network()) {
      const newConfig = {
        ...config,
      };

      if (config.url === 'registerUser') {
        return newConfig;
      } else {
        const token = `${await getToken()}`;
        newConfig.headers = {
          Authorization: token,
          ...config.headers,
        };
      }

      // if (requireToken) {
      //   const token = `Bearer ${await getToken()}`;
      //   newConfig.headers = {
      //     Authorization: token,
      //     ...config.headers,
      //   };
      // }

      // if(token !== null){
      //   newConfig.headers = {
      //     // token: loginToken,
      //     Authorization: token,
      //     ...config.headers,
      //   };
      // }else{
      //   newConfig.headers = {
      //     // token: loginToken,
      //     Authorization: "",
      //     ...config.headers,
      //   };
      // }
      return newConfig;
    } else {
      return Promise.reject('No Internet Connection');
    }
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    console.log('================ Res frim Main Api ===============', response);

    return response?.data;
  },
  error => {
    console.log('main error log-------', error, error?.response.data.message);
    if (error?.response?.data?.message) {
      return Promise.reject(error?.response?.data?.message);
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
