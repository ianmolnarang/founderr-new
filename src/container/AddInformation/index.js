import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import RoundButton from '../../components/RoundButton';
import {STRINGS} from '../../utils/strings';
import SvgIcons from '../../assests/svgs/svgIcons';
import {colors, fonts} from '../../assests/Theme/Color';
import {RouteName} from '../../utils/constant';
import UploadPhoto from './UploadPhoto';
import SocialLinks from './SocialLinks';
import {useDispatch, useSelector} from 'react-redux';
import {allSocialLinks} from '../../redux/slice/completeInformation';
const AddInformation = ({navigation}) => {
  const [socialLinks, setSocialLinks] = useState({
    linkedin: '',
    instagram: '',
    facebook: '',
    link: '',
  });
  const dispatch = useDispatch();
  const sendDataFn = async () => {
    dispatch(allSocialLinks(socialLinks));
    await navigation.navigate(RouteName.completeProfile);
  };

  console.log(useSelector(state => state));
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.topNameContainer}>
        <SvgIcons.BackIcon />
        <Text style={styles.nameText}>&nbsp;&nbsp; John Doe</Text>
      </View>

      <RoundButton onPress={sendDataFn} />

      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp(6),
        }}>
        {/* resume */}

        {/* photos and videos */}
        <View>
          <Text style={styles.headings}>{STRINGS.PHOTOS_VIDEOS_HEADING}</Text>

          <View style={styles.imageContainer}>
            <UploadPhoto />
            <UploadPhoto />
          </View>
        </View>

        {/* social links */}
        <View>
          <Text style={styles.headings}>{STRINGS.PHOTOS_VIDEOS_HEADING}</Text>

          <View style={styles.socialLinkContainer}>
            <SocialLinks
              socialLinks={socialLinks}
              setSocialLinks={setSocialLinks}
            />
          </View>
        </View>

        {/* upload resume */}
        <View style={{marginTop: hp(5)}}>
          <View style={styles.uploadResumeContainer}>
            <SvgIcons.UploadResumeIcon style={{marginRight: wp(2)}} />
            <Text style={styles.headings}>{STRINGS.RESUME_HEADING}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddInformation;

const styles = StyleSheet.create({
  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: hp(2),
    marginHorizontal: wp(6),
  },
  headings: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black50,
    fontSize: normalize(14),
    marginVertical: hp(0.5),
  },

  nameText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: normalize(20),
    marginTop: hp(0.5),
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialLinkContainer: {
    justifyContent: 'center',
    width: wp(90),
    height: hp(25),
    borderWidth: 1,
    borderColor: colors.black30,
    borderRadius: 10,
    paddingBottom: hp(2),
  },
  uploadResumeContainer: {
    width: wp(90),
    height: hp(8),
    borderWidth: 1,
    borderColor: colors.black30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
