import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import {REGISTER_USER, REGISTER_WORK, USERPROFILE} from './paths';
import {firestore} from '../helper/firebaseConfig';
import api from '../api';
import {setLoading} from '../redux/slice/authSlice';
import {saveDataLocal} from '../utils/helper';
import {RouteName} from '../utils/constant';

const createUser = async data => {
  try {
    const ref = collection(firestore, USERPROFILE);
    const res = await addDoc(ref, data);
    return res;
    console.log('create suer was........', res);
  } catch (e) {
    console.log('createEvent e', e, data);
  }
};

const getUser = async () => {
  try {
    let data = [];
    const ref = collection(firestore, USERPROFILE);
    const res = await getDocs(ref);

    console.log('get collection was........', res);
    if (res.size > 0) {
      res.forEach(async doc => {
        let d = doc.data();
        data.push({
          ...d,
          id: doc.id,
        });
      });
      return data;
    }
  } catch (error) {
    console.log('error was......', error);
  }
};

const registerUser = (data, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await api.post(REGISTER_USER, data);
    dispatch(setLoading(false));
    navigation.navigate(RouteName.education);
    await saveDataLocal('token', response.data.data.token);
  } catch (error) {
    dispatch(setLoading(false));
  }
};

const registerWorkEdu = (url, data, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await api.post(url, data);
    dispatch(setLoading(false));
    if (url === REGISTER_WORK) {
      return true;
    } else {
      navigation.navigate(RouteName.skills);
    }
    // await saveDataLocal('token', response.data.data.token);
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export default {
  createUser,
  getUser,
  registerUser,
  registerWorkEdu,
};
