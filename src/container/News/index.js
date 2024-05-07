import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {ScrollView} from 'native-base';
import AllNews from './AllNews';
import {colors, fonts} from '../../assests/Theme/Color';
import {getFacilities} from '../../api/News';

const News = () => {
  const [tabs, setTabs] = useState({
    All: false,
    Tech: false,
    Startup: false,
    Business: false,
  });

  const tabClicked = tab => {
    Object.keys(tabs).forEach(eachTab => {
      if (eachTab == tab) {
        tabs[tab] = true;

        setTabs({...tabs});
      } else {
        tabs[eachTab] = false;
        setTabs({...tabs});
      }
    });
  };

  console.log(tabs);
  return (
    <SafeAreaView
      style={{flex: 1, marginVertical: hp(2), marginHorizontal: wp(6)}}>
      {/* top */}
      <View>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.nameText}>Hello John</Text>
            <Text
              style={{
                color: colors.black30,
                fontFamily: fonts.poppinsRegular,
                fontSize: normalize(12),

                color: colors.black30,
              }}>
              Have a nice day
            </Text>
          </View>

          <View style={{height: hp(3)}}>
            <Image
              style={{}}
              source={require('../../assests/Images/demoUser.png')}></Image>
          </View>
        </View>

        {/* tabs */}
        <ScrollView horizontal style={styles.tabContainer}>
          {Object.keys(tabs).map(each => (
            <TouchableOpacity
              onPress={() => tabClicked(each)}
              style={[
                styles.tab,
                {backgroundColor: tabs[each] ? colors.black : colors.white},
              ]}>
              <Text
                style={[
                  styles.tabOptions,
                  {color: tabs[each] ? colors.white : colors.black},
                ]}>
                {each}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* news */}
      <View>
        <AllNews />
      </View>
    </SafeAreaView>
  );
};
export default News;

const styles = StyleSheet.create({
  nameText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(18),

    color: colors.charcoal,
  },
  topContainer: {
    marginVertical: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    height: hp(4),
    // width: wp(),
    borderWidth: 1,
    paddingHorizontal: wp(4),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(4),
  },
  tabOptions: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(14),

    color: colors.charcoal,
  },
});
