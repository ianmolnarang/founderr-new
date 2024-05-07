import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';

const LabelBorder = ({lable, value, isBorder, index, iconLabel, icon}) => {
  return (
    <View
      style={[
        styles.mainView,
        {
          borderBottomWidth: !isBorder ? 0.5 : 0,
          marginVertical: index === 1 ? 0 : hp(0.5),
          paddingTop: index === 1 ? 0 : hp(1),
        },
      ]}>
      {iconLabel ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon}
          <Text
            style={[styles.valueStyle, {paddingTop: 0, paddingLeft: wp(2)}]}>
            {lable}
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.labelStyle}>{lable}</Text>
          <Text style={styles.valueStyle}>{value}</Text>
        </>
      )}
    </View>
  );
};

export default LabelBorder;

const styles = StyleSheet.create({
  mainView: {
    borderColor: colors.borderColor,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  labelStyle: {
    fontSize: normalize(10),
    fontFamily: fonts.poppinsRegular,
    color: colors.black[100],
  },
  valueStyle: {
    paddingTop: hp(0.5),
    fontSize: normalize(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.black[100],
  },
});
