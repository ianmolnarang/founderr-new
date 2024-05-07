import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Profile = ({route}) => {
  const userId = route?.params && route?.params?.userId;
  const [userData, setUserData] = useState();
  console.log('USER ID ', userId);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const userData = await firestore()
        .collection('userProfile')
        .doc(userId)
        .get();
      setUserData(userData?.data());
      console.log('USERDATA ===', userData?.data());
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>dateOfBirth : {userData?.personalDetails?.dateOfBirth}</Text>
      <Text>email : {userData?.personalDetails?.email}</Text>
      <Text>gender : {userData?.personalDetails?.gender}</Text>
      <Text>lastName : {userData?.personalDetails?.lastName}</Text>
      <Text>location : {userData?.personalDetails?.location}</Text>
      <Text>phoneNo : {userData?.personalDetails?.phoneNo}</Text>
    </SafeAreaView>
  );
};

export default Profile;
