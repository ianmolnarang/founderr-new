import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import NewsCard from './NewsCard';

const NewsEducation = () => {
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
      style={{flex: 1, marginHorizontal: wp(6), marginVertical: hp(2)}}>
      <View style={styles.topNameContainer}>
        <SvgIcons.BackIcon />
        <Text style={styles.nameText}>&nbsp;&nbsp; Education</Text>
      </View>
      {/* <ScrollView horizontal style={styles.tabContainer}>
        {Object.keys(tabs).map(each => (
          <TouchableOpacity
            onPress={() => tabClicked(each)}
            style={[
              styles.tab,
              {backgroundColor: tabs[each] ? colors.black : colors.black},
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
      </ScrollView> */}

      <ScrollView style={{}}>
        <NewsCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsEducation;

const styles = StyleSheet.create({
  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: normalize(20),
    marginTop: hp(0.5),
  },
  tabContainer: {
    marginVertical: hp(2),
    flexDirection: 'row',
    height: hp(5),
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
