import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {fonts} from '../../assests/Theme/Color';
import {normalize, wp} from '../../utils/responsiveScreen';

const RadioButton = ({radioValue, radioTitle, onRadioPress}) => {
  return (
    <TouchableOpacity
      onPress={onRadioPress}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      {radioValue === radioTitle ? (
        <SvgIcons.RadioOnIcon />
      ) : (
        <SvgIcons.RadioOffIcon />
      )}
      <Text
        style={{
          fontFamily: fonts.poppinsMedium,
          fontSize: normalize(16),
          paddingLeft: wp(2),
        }}>
        {radioTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
