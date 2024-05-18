import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, wp} from '../../utils/responsiveScreen';
import {colors} from '../../assests/Theme/Color';
import {fontStyle} from '../../utils/commonStyle';
import {useNavigation} from '@react-navigation/native';

const MainHeader = ({heading, process, navigation}) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}>
        {/* <SvgIcons.LeftIcon width={30} height={30} /> */}
      </TouchableOpacity>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, {width: process}]} />
      </View>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginHorizontal: wp(5),
  },
  backButton: {
    marginRight: wp(2),
  },
  progressContainer: {
    flex: 1,
    marginVertical: hp(1),
    backgroundColor: colors.grey[200],
    height: hp(0.8),
    borderRadius: wp(1),
  },
  progressBar: {
    backgroundColor: colors.black,
    height: hp(0.8),
    borderRadius: wp(1),
  },
  heading: {
    ...fontStyle.medium14,
    color: colors.black,
    marginTop: hp(1),
  },
});

export default MainHeader;
