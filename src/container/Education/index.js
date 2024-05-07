import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconHeader from '../../components/Header';
import {STRINGS} from '../../utils/strings';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {commonStyle, fontStyle} from '../../utils/commonStyle';
import Input from '../../components/Input';
import RoundButton from '../../components/RoundButton';
import {RouteName} from '../../utils/constant';
import MainHeader from '../../components/MainHeader';
import BigButton from '../../components/BigButton';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import userService from '../../service/userService';
import firestore from '@react-native-firebase/firestore';

const Education = ({navigation, route}) => {
  const userData = route?.params && route?.params?.userData;
  const [tabView, setTabView] = useState(STRINGS.DEGREE);
  const [degree, setDegree] = useState('');
  const [fieldStudy, setFieldStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isPursuring, setIsPursuring] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [degreeData, setDegreeData] = useState('');
  const [schoolData, setSchoolData] = useState('');
  const [cmpName, setCmpName] = useState('');
  const [designation, setDesignation] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const [industry, setIndustry] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [finalData, setFinalData] = useState({});

  const [dateType, setDateType] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [workData, setWorkData] = useState([
    {
      companyName: '',
      industry: '',
      startDate: '',
      endDate: '',
      designation: '',
      isWorking: '',
    },
  ]);
  const [educationData, setEducationData] = useState([
    {
      degree: '',
      fieldOfStudy: '',
      universityName: '',
      startDate: '',
      endDate: '',
      isPursuring: '',
    },
  ]);

  //error
  const [cmpError, setCmpError] = useState(false);
  const [industryError, setIndustryError] = useState(false);
  const [designationError, setDesignationError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);

  const [degreeError, setDegreeError] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const [universityError, setUniversityError] = useState(false);
  const [eduStartError, setEduStartError] = useState(false);
  const [eduEndError, setEduEndError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onChange = (name, val, index) => {
    if (name === 'cmpName') {
      workData[index].companyName = val;
    } else if (name === 'industry') {
      workData[index].industry = val;
    } else if (name === 'designation') {
      workData[index].designation = val;
    }
    setWorkData([...workData]);
  };

  const onRemovePress = index => {
    if (tabIndex === 0) {
      workData.splice(index, 1);
      setWorkData([...workData]);
    } else {
      educationData.splice(index, 1);
      setEducationData([...educationData]);
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={{marginTop: hp(2)}}>
        <Input
          placeholder={STRINGS.COMPANY_NAME}
          value={item.companyName}
          onChangeText={val => onChange('cmpName', val, index)}
          error={cmpError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.INDUSTRY}
          value={item.industry}
          onChangeText={val => onChange('industry', val, index)}
          error={industryError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.DESIGNATION}
          value={item.designation}
          onChangeText={val => onChange('designation', val, index)}
          error={designationError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.START_DATE}
          value={item.startDate}
          editable={false}
          icon={<SvgIcons.CalendarIcon />}
          onIconPress={() => onCalendarPress('workStart', index)}
          error={startDateError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.END_DATE}
          value={item.endDate}
          editable={false}
          icon={<SvgIcons.CalendarIcon />}
          onIconPress={() => onCalendarPress('workEnd', index)}
          error={endDateError}
          errorText={errorText}
        />

        <View style={styles.endRow}>
          {workData?.length > 1 ? (
            <Text
              onPress={() => onRemovePress(index)}
              style={{
                color: colors.red,
                fontFamily: fonts.poppinsMedium,
                fontSize: normalize(14),
              }}>
              {STRINGS.DELETE}
            </Text>
          ) : (
            <View />
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity>
              <SvgIcons.UnCheckIcon width={wp(5)} height={wp(5)} />
            </TouchableOpacity>
            <Text style={styles.workingText}>{STRINGS.CURRENTLY_WORKING}</Text>
          </View>
        </View>
        {workData.length - 1 === index && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onAddMorePress}
            style={{alignSelf: 'center', marginVertical: hp(2)}}>
            <Text style={styles.addMore}>{STRINGS.ADDMORE}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const onEduChange = (name, val, index) => {
    if (name === 'degree') {
      console.log('degree called..');
      educationData[index].degree = val;
    } else if (name === 'field') {
      educationData[index].fieldOfStudy = val;
    } else if (name === 'university') {
      educationData[index].universityName = val;
    }
    setEducationData([...educationData]);
  };

  const _renderEducation = ({item, index}) => {
    return (
      <View style={{marginTop: hp(2)}}>
        <Input
          placeholder={STRINGS.DEGREE}
          value={item.degree}
          onChangeText={val => onEduChange('degree', val, index)}
          error={degreeError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.FIELD_STUDY}
          value={item.fieldOfStudy}
          onChangeText={val => onEduChange('field', val, index)}
          error={fieldError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.UNIVERSITY}
          value={item.universityName}
          onChangeText={val => onEduChange('university', val, index)}
          error={universityError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.START_DATE}
          value={item.startDate}
          editable={false}
          icon={<SvgIcons.CalendarIcon />}
          onIconPress={() => onCalendarPress('educationStart', index)}
          error={eduStartError}
          errorText={errorText}
        />

        <Input
          placeholder={STRINGS.END_DATE}
          value={item.endDate}
          editable={false}
          icon={<SvgIcons.CalendarIcon />}
          onIconPress={() => onCalendarPress('educationEnd', index)}
          error={eduEndError}
          errorText={errorText}
        />

        <View style={styles.endRow}>
          {educationData?.length > 1 ? (
            <Text
              onPress={() => onRemovePress(index)}
              style={{
                color: colors.red,
                fontFamily: fonts.poppinsMedium,
                fontSize: normalize(14),
              }}>
              {STRINGS.DELETE}
            </Text>
          ) : (
            <View />
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity>
              <SvgIcons.UnCheckIcon width={wp(5)} height={wp(5)} />
            </TouchableOpacity>
            <Text style={styles.workingText}>{STRINGS.CURRENTLY_PURSUING}</Text>
          </View>
        </View>
        {educationData.length - 1 === index && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onAddMorePress}
            style={{alignSelf: 'center', marginVertical: hp(2)}}>
            <Text style={styles.addMore}>{STRINGS.ADDMORE}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  function makeid(length = 20) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  const saveData = async () => {
    const userId = makeid();
    const data = {
      personalDetails: userData,
      workData: workData,
      educationData: educationData,
    };

    const userDocument = await firestore()
      .collection('userProfile')
      .doc(userId);

    userDocument.set(data).then(res => {
      console.log('SUCCESS', res);
    });

    navigation.navigate(RouteName.bottomTab, {userData: data});

    // const res = await userService.createUser(data);

    // consoel.log('aspi res was.........', res);
  };

  const navigate = () => {
    navigation.navigate(RouteName.skills);
  };

  const onAddMorePress = () => {
    if (tabIndex === 0) {
      const data = {
        companyName: '',
        industry: '',
        startDate: '',
        endDate: '',
        designation: '',
        isWorking: '',
      };

      workData.push(data);
      setWorkData([...workData]);
    } else {
      const data = {
        degree: '',
        fieldOfStudy: '',
        universityName: '',
        startDate: '',
        endDate: '',
        isPursuring: '',
      };

      educationData.push(data);
      setEducationData([...educationData]);
    }
  };

  const onCalendarPress = (val, index) => {
    setDateType(val);
    setSelectedIndex(index);
    setOpen(true);
  };

  
  const checkValidation = () => {
    if (workData[workData.length - 1].companyName.length === 0) {
      setCmpError(true);
      setErrorText('Please Enter Company Name');
      return false;
    } else if (workData[workData.length - 1].industry.length === 0) {
      setCmpError(false);
      setIndustryError(true);
      setErrorText('Please Enter Industry Name');
      return false;
    } else if (workData[workData.length - 1].designation.length === 0) {
      setCmpError(false);
      setIndustryError(false);
      setDesignationError(true);
      setErrorText('Please Enter Designation');
      return false;
    } else if (workData[workData.length - 1].startDate.length === 0) {
      setCmpError(false);
      setIndustryError(false);
      setDesignationError(false);
      setStartDateError(true);
      setErrorText('Please Select Start Date');
      return false;
    } else if (workData[workData.length - 1].endDate.length === 0) {
      setCmpError(false);
      setIndustryError(false);
      setDesignationError(false);
      setStartDateError(false);
      setEndDateError(true);
      setErrorText('Please Select End Date');
      return false;
    } else {
      setCmpError(false);
      setIndustryError(false);
      setDesignationError(false);
      setStartDateError(false);
      setEndDate(false);
      setErrorText('');
      return true;
    }
  };

  const checkEduValidation = () => {
    if (educationData[educationData.length - 1].degree.length === 0) {
      setDegreeError(true);
      setErrorText('Please Enter Degree');
      return false;
    } else if (
      educationData[educationData.length - 1].fieldOfStudy.length === 0
    ) {
      setDegreeError(false);
      setFieldError(true);
      setErrorText('Please Enter Field of Study');
      return false;
    } else if (
      educationData[educationData.length - 1].universityName.length === 0
    ) {
      setDegreeError(false);
      setFieldError(false);
      setUniversityError(true);
      setErrorText('Please Enter University Name');
      return false;
    } else if (educationData[educationData.length - 1].startDate.length === 0) {
      setDegreeError(false);
      setFieldError(false);
      setUniversityError(false);
      setEduStartError(true);
      setErrorText('Please Select Start Date');
      return false;
    } else if (educationData[educationData.length - 1].endDate.length === 0) {
      setDegreeError(false);
      setFieldError(false);
      setUniversityError(false);
      setEduStartError(false);
      setEduEndError(true);
      setErrorText('Please Select End Date');
      return false;
    } else {
      setDegreeError(false);
      setFieldError(false);
      setUniversityError(false);
      setEduStartError(false);
      setEduEndError(false);
      setErrorText('');
      return true;
    }
  };

  const onSavePress = () => {
    if (tabIndex === 0) {
      const ifValid = checkValidation();
      if (ifValid) {
        // const data = {
        //   workData: workData,
        // };
        // setFinalData({...data});
        setTabIndex(1);
      }
    } else {
      const ifValid = checkEduValidation();
      if (ifValid) {
        const data = {
          workData: workData,
          educationData: educationData,
        };
        saveData();
      }
    }
  };

  console.log('finla data was........', finalData);

  const onDateSelected = val => {
    if (dateType === 'workStart') {
      workData[selectedIndex].startDate = moment(val).format('MM/DD/YYYY');
      setWorkData([...workData]);
    } else if (dateType === 'workEnd') {
      workData[selectedIndex].endDate = moment(val).format('MM/DD/YYYY');
      setWorkData([...workData]);
    } else if (dateType === 'educationStart') {
      educationData[selectedIndex].startDate = moment(val).format('MM/DD/YYYY');
      setEducationData([...educationData]);
    } else if (dateType === 'educationEnd') {
      educationData[selectedIndex].endDate = moment(val).format('MM/DD/YYYY');
      setEducationData([...educationData]);
    }
    setOpen(false);
    setDate(val);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          onDateSelected(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
      <MainHeader process={wp(60)} heading={`(0/5) ${STRINGS.WORKEDUCATION}`} />
      <View style={{marginHorizontal: wp(6), flex: 1}}>
        <View style={styles.tabViewContainer}>
          <TouchableOpacity
            onPress={() => setTabIndex(0)}
            activeOpacity={0.7}
            style={[
              styles.tabItem,
              {
                backgroundColor: tabIndex === 0 ? colors.white : colors.black,
              },
            ]}>
            <Text
              style={[
                fontStyle.semiBold16,
                {
                  textAlign: 'center',
                  color: tabIndex === 0 ? colors.black : colors.white,
                },
              ]}>
              {STRINGS.WORK}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTabIndex(1)}
            activeOpacity={0.7}
            style={[
              styles.tabItem,
              {
                backgroundColor: tabIndex === 1 ? colors.white : 'transparent',
              },
            ]}>
            <Text
              style={[
                fontStyle.semiBold16,
                {
                  textAlign: 'center',
                  color: tabIndex === 1 ? colors.black : colors.white,
                },
              ]}>
              {STRINGS.EDUCATION}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{paddingBottom: hp(5)}}
          data={tabIndex === 0 ? workData : educationData}
          showsVerticalScrollIndicator={false}
          renderItem={tabIndex === 0 ? _renderItem : _renderEducation}
        />
      </View>

      <View style={{marginHorizontal: wp(6), marginBottom: hp(2)}}>
        <BigButton btnText={STRINGS.SAVE} btnPress={() => onSavePress()} />
      </View>
    </SafeAreaView>
  );
};

export default Education;

const styles = StyleSheet.create({
  headingText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.white,
    fontSize: normalize(16),
  },
  tabView: {
    padding: wp(3),
    alignItems: 'center',
    flex: 1,
  },
  tabViewContainer: {
    marginVertical: hp(2),
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: wp(10),
    padding: wp(2),
  },
  tabItem: {
    justifyContent: 'center',
    width: '45%',
    height: hp(4.5),
    borderRadius: wp(8),
  },
  endRow: {
    // alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workingText: {
    paddingLeft: wp(2),
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(13),
  },
  addMore: {
    color: colors.blue,
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(14),
  },
});
