import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
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



const Work = () => {
   //  const userData = route?.params && route?.params?.userData;
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



}

const styles = StyleSheet.create({
  container:{
  flex:1,
  },
  mainHeading:{
    color: colors.black100,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: "bold",
  },
  subView: {
    flex: 1,
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
    position: 'absolute',
    top: wp(12),
    alignSelf:'center'
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

})

export default Work;