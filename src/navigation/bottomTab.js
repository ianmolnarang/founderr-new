import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteName} from '../utils/constant';
import Home from '../container/Home';
import News from '../container/News';
import SvgIcons from '../assests/svgs/svgIcons';
import {wp} from '../utils/responsiveScreen';
import {useSelector} from 'react-redux';
import NewsEducation from '../container/NewsEducation';
import Settings from '../container/Settings';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  // const state = console.log(
  //   useSelector(state => state.completeInformation.userData),
  // );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 10,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <SvgIcons.FounderIcon />,
        }}
        name={RouteName.home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcons.NewsIcon width={wp(8)} height={wp(8)} />
          ),
        }}
        name={RouteName.news}
        component={News}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcons.BookIcon width={wp(8)} height={wp(8)} />
          ),
        }}
        name={RouteName.newsEducation}
        component={NewsEducation}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcons.SettingsIcon width={wp(8)} height={wp(8)} />
          ),
        }}
        name={RouteName.settings}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
