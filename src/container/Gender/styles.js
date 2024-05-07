import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';

const styles = StyleSheet.create({
  headerMainView: {
    marginTop: hp(2),
    marginHorizontal: wp(6),
    flex: 1,
  },
  subContainer: {marginVertical: hp(2.5)},
  titleText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(16),
    color: colors.black,
    paddingVertical: hp(1),
  },
  borderView: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.black30,
  },
 
});

export default styles;
