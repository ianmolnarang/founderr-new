import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, wp} from '../../utils/responsiveScreen';

const RoundButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.nextView}>
      <SvgIcons.NextIcon />
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  nextView: {right: wp(8), position: 'absolute', bottom: hp(8)},
});
