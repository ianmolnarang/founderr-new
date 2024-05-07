import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {colors, fonts} from '../../assests/Theme/Color';
import {normalize, wp} from '../../utils/responsiveScreen';

const OvalButton = ({ovalValue, ovalTitle, onOvalPress}) => {
  return (
    <TouchableOpacity
      onPress={onOvalPress}
      style={{
        marginRight: wp(2),
        borderColor: colors.black,
        backgroundColor: ovalValue ? colors.black : colors.white,
        borderWidth: 1,
        borderRadius: 18,
        width: wp(22),
      }}>
      <Text
        style={{
          color: !ovalValue ? colors.black : colors.white,
          textAlign: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
          fontFamily: fonts.poppinsRegular,
          fontSize: normalize(16),
          //paddingLeft: wp(2),
        }}>
        {ovalTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default OvalButton;

const styles = StyleSheet.create({});
