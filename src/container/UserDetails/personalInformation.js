import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import AppLoader from '../../components/Apploader/appLoader';

const PersonalDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setdob] = useState('');
  // const [date, setdate] = useState();
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
  const [showError, setShowError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [errorText, seterrorText] = useState('');

  const onCameraPress = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setProfile(res.path);
      setImageVisible(false);
    });
  };

  const onGalleryPress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setProfile(res.path);
      setImageVisible(false);
    });
  };

  const onSavePress = async () => {
    if (
      firstName.length !== 0 &&
      lastName.length !== 0 &&
      dob.length !== 0 &&
      gender.length !== 0 &&
      phoneNo.length !== 0 &&
      location.length !== 0
    ) {
      setShowError(false);
      const data = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dob,
        gender: gender,
        phoneNumber: phoneNo,
        email: '1234567@gmail.com',
        location: location,
      };

      dispatch(userService.registerUser(data, navigation));
    } else {
      setShowError(true);
    }
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <AppLoader visible={loading} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <Text style={styles.mainHeading}>(0/6) Personal Details</Text>
          <View style={{flex: 1}}>
            <View style={styles.subView}>
              <View style={styles.subImg}>
                <TouchableOpacity
                  onPress={() => setImageVisible(true)}
                  activeOpacity={0.7}
                  style={styles.cameraView}>
                  <SvgIcons.CameraIcon />
                </TouchableOpacity>
                <Image
                  source={{
                    uri:
                      profile !== null
                        ? profile
                        : 'https://source.unsplash.com/random?user',
                  }}
                  style={styles.imgView}
                  resizeMode="cover"
                  borderRadius={wp(25)}
                />
              </View>
              {/* <ScrollView> */}
              <View style={{marginHorizontal: wp(7), marginTop: hp(10)}}>
                <Input
                  placeholder={STRINGS.FIRSTNAME}
                  value={firstName}
                  onChangeText={setFirstName}
                  error={showError}
                  errorText={
                    firstName.length === 0 &&
                    showError &&
                    'Please Enter First Name'
                  }
                />
                <Input
                  placeholder={STRINGS.LASTNAME}
                  value={lastName}
                  onChangeText={setLastName}
                  error={showError}
                  errorText={
                    lastName.length === 0 &&
                    showError &&
                    'Please Enter Last Name'
                  }
                />
                <Input
                  placeholder={STRINGS.DOB}
                  value={dob}
                  editable={false}
                  icon={<SvgIcons.UploadResumeIcon />}
                  onIconPress={() => setOpen(true)}
                  error={showError}
                  errorText={
                    dob.length === 0 &&
                    showError &&
                    'Please Enter Date of Birth'
                  }
                />
                <Input
                  onInputPress={() => setGenderVisible(true)}
                  inputText={gender?.length > 0 ? gender : STRINGS.GENDER}
                  error={showError}
                  errorText={
                    gender.length === 0 &&
                    showError &&
                    'Please select your gender'
                  }
                />

                <Input
                  placeholder={STRINGS.PHONENO}
                  value={phoneNo}
                  onChangeText={setPhoneNo}
                  error={showError}
                  errorText={
                    phoneNo.length === 0 &&
                    showError &&
                    'Please enter your phone number'
                  }
                />
                {/*
          <Input
            placeholder={STRINGS.EMAIL}
            value={email}
            onChangeText={setEmail}
            error={emailError}
            errorText={errorText}
          /> */}

                <Input
                  placeholder={STRINGS.LCOATION}
                  value={location}
                  onChangeText={setLocation}
                  error={showError}
                  errorText={
                    location.length === 0 &&
                    showError &&
                    'Please enter your location'
                  }
                />
              </View>
              {/* </ScrollView> */}

              {/* Date Picker */}

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
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: hp(2),
                    }}>
                    <TouchableOpacity onPress={onCameraPress}>
                      <SvgIcons.CameraIcon width={wp(15)} height={wp(15)} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={onGalleryPress}
                      style={{marginLeft: wp(10)}}>
                      <SvgIcons.ImageIcon width={wp(15)} height={wp(15)} />
                    </TouchableOpacity>
                  </View>
                </Actionsheet.Content>
              </Actionsheet>
            </View>
            <View style={{marginHorizontal: wp(7), marginVertical: wp(16)}}>
              <BigButton btnPress={onSavePress} btnText={STRINGS.SAVE} />
            </View>
          </View>
        </ScrollView>
        {open && (
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              paddingBottom: hp(5),
            }}>
            <DatePicker
              date={date}
              onDateChange={date => {
                console.log('date awas......', date);
                setDate(date);
                setdob(moment(date).format('DD-MM-YYYY'));
              }}
              mode="date"
              textColor="#000"
              fadeToColor="#fff"
            />
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Text style={{color: 'black', fontSize: 20}}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    color: colors.black100,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  subView: {
    // flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    paddingHorizontal: wp(2),
  },
  subImg: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(25),
    marginLeft: wp(10),
    // position: 'absolute',
    top: wp(12),
    alignSelf: 'center',
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
});

export default PersonalDetails;
