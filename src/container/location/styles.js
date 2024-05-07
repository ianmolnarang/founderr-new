import {StyleSheet} from 'react-native';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
export const styles = StyleSheet.create({
  headerMainView: {
    // marginTop: hp(2),
    marginHorizontal: wp(6),
    flex: 1,
  },
  headerText: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fonts.poppinsSemiBold,
    paddingTop: hp(2),
    width: wp(60),
  },
});
