import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';

const BigButton = ({btnText, btnPress, btnStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={btnPress}
      style={[btnStyle, styles.btnContainer]}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: normalize(18),
          fontFamily: fonts.poppinsMedium,
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: hp(7),
    borderWidth: 2.5,
    borderColor: colors.blue,
    borderRadius: wp(3),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
