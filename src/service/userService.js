import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import {USERPROFILE} from './paths';
import {firestore} from '../helper/firebaseConfig';

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

export default {
  createUser,
  getUser,
};
