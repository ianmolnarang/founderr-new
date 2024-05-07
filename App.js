import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OneSplash from './Source/Screens/OneSplash';
import SecondSplash from './Source/Screens/SecondSplash';
import ThirdSplash from './Source/Screens/ThirdSplash';
import EnterName from './Source/Screens/OnBoarding/EnterName';
import {Provider} from 'react-redux';
import Routes from './src/navigation/routes';
import store from './src/redux/store';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    <NativeBaseProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
