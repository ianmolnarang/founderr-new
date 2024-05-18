import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

export const getToken = async () => {
  const userData = await AsyncStorage.getItem('token');
  const token = JSON.parse(userData);

  console.log('token was.....', token);
  return token;
  // return userData
  // return AsyncStorage.getItem('loginData')
};

export const resetNavigation = (navigation, routeName) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
};

export const saveDataLocal = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('Error updating data:', error);
  }
};
