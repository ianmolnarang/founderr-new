import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyle, fontStyle} from '../../utils/commonStyle';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import {colors, fonts} from '../../assests/Theme/Color';
import {STRINGS} from '../../utils/strings';
import Input from '../../components/Input';
import {Actionsheet} from 'native-base';
import {Calendar} from 'react-native-calendars';
import BigButton from '../../components/BigButton';
import MainHeader from '../../components/MainHeader';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import RadioButton from '../../components/RadioButton';
import ImagePicker from 'react-native-image-crop-picker';
import userService from '../../service/userService';
import {RouteName} from '../../utils/constant';

const PersonalDetails = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setdob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [profile, setProfile] = useState(null);
  const [calendarOpen, setcalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [genderVisible, setGenderVisible] = useState(false);

  //Error
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [errorText, seterrorText] = useState('');
  const onCalendarPress = () => {
    setcalendarOpen(true);
  };

  const onCameraPress = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setProfile(res.path);
    });
  };

  const onGalleryPress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setProfile(res.path);
    });
  };

  const onSavePress = async () => {
    if (firstName.length === 0) {
      setFirstNameError(true);
      seterrorText('Please Enter First Name');
    } else if (lastName.length === 0) {
      setLastNameError(true);
      setFirstNameError(false);
      seterrorText('Please Enter Last Name');
    } else if (dob.length === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setDobError(true);
      seterrorText('Please Select Date of Birth');
    } else if (gender.length === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setDobError(false);
      setGenderError(true);
      seterrorText('Please Select Gender');
    } else if (phoneNo.length === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setDobError(false);
      setGenderError(false);
      setPhoneNoError(true);
      seterrorText('Please Enter Phone Number');
    } else if (email.length === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setDobError(false);
      setGenderError(false);
      setPhoneNoError(false);
      setEmailError(true);
      seterrorText('Please Enter Email address');
    } else if (location.length === 0) {
      setFirstNameError(false);
      setLastNameError(false);
      setDobError(false);
      setGenderError(false);
      setPhoneNoError(false);
      setEmailError(false);
      setLocationError(true);
      seterrorText('Please Enter Your Location');
    } else {
      const data = {
        profileImage: profile,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dob,
        gender: gender,
        phoneNo: phoneNo,
        email: email,
        location: location,
      };
      console.log('========', data);
      navigation.navigate(RouteName.education, {userData: data});
    }
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setDate(date);
          setdob(moment(date).format('MM/DD/YYYY'));
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
      <MainHeader
        process={wp(40)}
        heading={`(0/6) ${STRINGS.PERSONALDETAILS}`}
      />
      <ScrollView>
        <View
          style={{alignItems: 'center', marginTop: hp(7), marginBottom: hp(2)}}>
          {profile !== null ? (
            <Image
              source={{uri: profile}}
              style={{width: wp(40), height: wp(40)}}
              resizeMode="cover"
              borderRadius={wp(20)}
            />
          ) : (
            <SvgIcons.ProfileUser />
          )}
          <TouchableOpacity
            onPress={() => setImageVisible(true)}
            activeOpacity={0.7}
            style={{
              position: 'absolute',
              bottom: hp(0),
              left: wp(55),
            }}>
            <SvgIcons.EditIcon />
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: wp(7)}}>
          <Input
            placeholder={STRINGS.FIRSTNAME}
            value={firstName}
            onChangeText={setFirstName}
            error={firstNameError}
            errorText={errorText}
          />

          <Input
            placeholder={STRINGS.LASTNAME}
            value={lastName}
            onChangeText={setLastName}
            error={lastNameError}
            errorText={errorText}
          />

          <Input
            placeholder={STRINGS.DOB}
            value={dob}
            editable={false}
            icon={<SvgIcons.CalendarIcon />}
            onIconPress={() => setOpen(true)}
            error={dobError}
            errorText={errorText}
          />

          <Input
            onInputPress={() => setGenderVisible(true)}
            inputText={gender?.length > 0 ? gender : STRINGS.GENDER}
            error={genderError}
            errorText={errorText}
          />

          {/* <Input
            placeholder={STRINGS.GENDER}
            value={gender}
            editable={false}
            onInputPress={() => setGenderVisible(true)}
            onChangeText={setGender}
          /> */}

          <Input
            placeholder={STRINGS.PHONENO}
            value={phoneNo}
            onChangeText={setPhoneNo}
            error={phoneNoError}
            errorText={errorText}
          />

          <Input
            placeholder={STRINGS.EMAIL}
            value={email}
            onChangeText={setEmail}
            error={emailError}
            errorText={errorText}
          />

          <Input
            placeholder={STRINGS.LCOATION}
            value={location}
            onChangeText={setLocation}
            error={locationError}
            errorText={errorText}
          />
        </View>

        <Actionsheet
          isOpen={genderVisible}
          onClose={() => setGenderVisible(false)}>
          <Actionsheet.Content>
            <Actionsheet.Item>
              <Text
                style={{
                  fontFamily: fonts.poppinsMedium,
                  fontSize: normalize(18),
                  color: colors.black,
                }}>
                {STRINGS.SELECTGENDER}
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item>
              <RadioButton
                radioTitle={STRINGS.MALE}
                onRadioPress={() => setGender(STRINGS.MALE)}
                radioValue={gender}
              />
            </Actionsheet.Item>
            <Actionsheet.Item>
              <RadioButton
                radioTitle={STRINGS.FEMALE}
                onRadioPress={() => setGender(STRINGS.FEMALE)}
                radioValue={gender}
              />
            </Actionsheet.Item>
            <Actionsheet.Item>
              <RadioButton
                radioTitle={STRINGS.NONBINARY}
                onRadioPress={() => setGender(STRINGS.NONBINARY)}
                radioValue={gender}
              />
            </Actionsheet.Item>
            <Actionsheet.Item>
              <RadioButton
                radioTitle={STRINGS.PREFERNOT}
                onRadioPress={() => setGender(STRINGS.PREFERNOT)}
                radioValue={gender}
              />
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
        <Actionsheet
          isOpen={imageVisible}
          onClose={() => setImageVisible(false)}>
          <Actionsheet.Content>
            {/* <Actionsheet.Item> */}
            <View
              style={{
                flexDirection: 'row',
                marginVertical: hp(2),
              }}>
              <TouchableOpacity onPress={onCameraPress}>
                <SvgIcons.Camera width={wp(15)} height={wp(15)} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onGalleryPress}
                style={{marginLeft: wp(10)}}>
                <SvgIcons.GalleryIcon width={wp(15)} height={wp(15)} />
              </TouchableOpacity>
            </View>
            {/* </Actionsheet.Item> */}
          </Actionsheet.Content>
        </Actionsheet>
        <View style={{marginHorizontal: wp(7), marginVertical: wp(3)}}>
          <BigButton btnPress={onSavePress} btnText={STRINGS.SAVE} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({});


