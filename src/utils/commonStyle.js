import {StyleSheet} from 'react-native';
import {hp, wp} from './responsiveScreen';
import {colors, fonts} from '../assests/Theme/Color';

export const commonStyle = StyleSheet.create({
  headerMainView: {
    marginTop: hp(2),
    marginHorizontal: wp(3),
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
});

export const fontStyle = StyleSheet.create({
  medium14: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
  },
  regular16: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
  },
  semiBold16: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
  },
});
