import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: colors.black[100]},
  headerView: {
    marginVertical: hp(2),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  founderrText:{
    fontSize:80,
    color: colors.white,
    fontFamily: fonts.poppinsRegular,
  },
  userText: {
    fontSize: normalize(24),
    color: colors.white,
    marginLeft: 170,
    top: 10,
    fontFamily: fonts.poppinsRegular,
  },
  subView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    paddingHorizontal: wp(2),
  },
  subImg: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(25),
    marginLeft: wp(10),
    position: 'absolute',
    top: -wp(15),
  },
  cameraView: {
    position: 'absolute',
    bottom: wp(1),
    right: wp(1),
    zIndex: 1,
  },
  imgView: {width: '100%', height: '100%'},
  editView: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(5),
    backgroundColor: colors.grey[100],
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  commonInfo: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    padding: wp(3),
    paddingVertical: hp(2),
    marginTop: hp(9),
    borderRadius: wp(2),
  },
  font10: {
    fontSize: normalize(10),
    color: colors.black,
    fontFamily: fonts.poppinsRegular,
  },
  labelBorder: {
    borderWidth: 1,
    padding: hp(2),
    paddingBottom: hp(1),
    marginVertical: hp(4),
    borderRadius: wp(2),
    borderColor: colors.borderColor,
  },
  boxView: {
    fontSize: normalize(16),
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    position: 'absolute',
    top: hp(-1.5),
    left: wp(5),
    backgroundColor: colors.white,
    paddingHorizontal: wp(2),
  },
  titleStyle: {
    borderWidth: 1,
    borderRadius: wp(4),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(4),
    marginRight: wp(4),
    marginBottom: wp(3),
  },
  skillsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
