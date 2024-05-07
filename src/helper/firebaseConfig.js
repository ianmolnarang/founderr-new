import {initializeApp} from 'firebase/app';

// authentication
// import {initializeAuth} from 'firebase/auth';
// import {getReactNativePersistence} from 'firebase/auth/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// firestore
import {getFirestore} from 'firebase/firestore';

// cloud storage
import {getStorage} from 'firebase/storage';

import firebase from 'firebase/compat';
import {firebaseKey} from './config';

const firebaseConfig = {
  apiKey: firebaseKey.apiKey,
  authDomain: firebaseKey.authDomain,
  projectId: firebaseKey.projectId,
  storageBucket: firebaseKey.storageBucket,
  messagingSenderId: firebaseKey.messagingSenderId,
  appId: firebaseKey.appId,
  measurementId: firebaseKey.measurementId,
  databaseURL: firebaseKey.databaseURL,
  androidClientId: firebaseKey.androidClientId,
};

const app = initializeApp(firebaseConfig);

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// const appleOAuth = new firebase.auth.OAuthProvider("apple.com")

const firestore = getFirestore();
const storage = getStorage();

export {app, firestore, storage};
