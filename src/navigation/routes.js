import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteName} from '../utils/constant';
import Gender from '../container/Gender/gender';
import Location from '../container/location';
import Exprience from '../container/Exprience';
import Education from '../container/Education';
import Skills from '../container/Skills';
import Home from '../container/Home';
import BottomTab from './bottomTab';

import Profile from '../container/Profile';
// import Splash1 from '../container/OnBoading/Splash1';
// import Splash2 from '../container/OnBoading/Splash2';
// import Splash3 from '../container/OnBoading/Splash3';
// import SignUp from '../container/OnBoading/SignUp';

import CompleteProfile from '../container/CompleteProfile';
import News from '../container/News';
import NewsPage from '../container/News/NewsPage';
import NewsChapters from '../container/NewsEducation/NewsChapters';
import EachChapterNews from '../container/NewsEducation/EachChapterNews';
import ScreenOne from '../container/onBoardingScreens/screenOne.onBoarding';
import ScreenTwo from '../container/onBoardingScreens/screenTwo.onBoarding';
import ScreenThree from '../container/onBoardingScreens/screenThree.onBoarding';
import Login from '../container/LoginFounderr';
import HomeScreen from '../container/HomeScreen';
import Settings from '../container/Settings';
import Main from '../container/UserDetails';
import {MarkerAnimated} from 'react-native-maps';
import Work from '../container/UserDetails/work';
import Conditions from '../container/Settings/conditions';
import Policy from '../container/Settings/policy';
import Splash from '../container/onBoardingScreens/splashScreen';
import PersonalDetails from '../container/UserDetails/personalInformation';
import AddInformation from '../container/AddInformation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName?.personalDetails}>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="ScreenOne"
          options={{headerShown: false}}
          component={ScreenOne}
        />
        <Stack.Screen
          name="ScreenTwo"
          options={{headerShown: false}}
          component={ScreenTwo}
        />
        <Stack.Screen
          name="ScreenThree"
          options={{headerShown: false}}
          component={ScreenThree}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Main"
          options={{headerShown: false}}
          component={Main}
        />
        <Stack.Screen
          name={RouteName.work}
          options={{headerShown: false}}
          component={Work}
        />
        <Stack.Screen
          name="Conditions"
          options={{headerShown: false}}
          component={Conditions}
        />
        <Stack.Screen
          name="Policy"
          options={{headerShown: false}}
          component={Policy}
        />
        {/* <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        /> */}
        <Stack.Screen
          name={RouteName.gender}
          component={Gender}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.settings}
          component={Settings}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.location}
          component={Location}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.exprience}
          component={Exprience}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.education}
          component={Education}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={RouteName.addInformation}
          component={AddInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteName.completeProfile}
          component={CompleteProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={RouteName.news}
          component={News}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={RouteName.newsPage}
          component={NewsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteName.skills}
          component={Skills}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.personalDetails}
          component={PersonalDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.profile}
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.bottomTab}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={RouteName.newsChapters}
          component={NewsChapters}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={RouteName.eachChapterNews}
          component={EachChapterNews}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
