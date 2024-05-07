import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';

const IconHeader = ({icon, iconTitle}) => {
  return (
    <View style={styles.mainView}>
      {icon}

      <Text style={styles.headerText}>{iconTitle}</Text>
    </View>
  );
};

export default IconHeader;

const styles = StyleSheet.create({
  mainView: {
    marginTop: hp(2),
    marginHorizontal: wp(6),
  },
  headerText: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fonts.poppinsSemiBold,
    paddingTop: hp(2),
    width: wp(60),
  },
});
