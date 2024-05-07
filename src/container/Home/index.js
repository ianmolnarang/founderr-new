import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import styles from './styles';
import {STRINGS} from '../../utils/strings';
import LabelBorder from '../../components/LabelBorder';
import {exprienceData, skillData} from '../../utils/data';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';

const Home = ({navigation, rout}) => {

  const token = "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2ZlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE0ODQ1ODIxfQ.hebJY_QQmmDpjIoP3LyMo1V-h66EawlTNuz042e5Oek";
  const [educationData, setEducationData] = useState();
  const [personalData, setPersonalData] = useState();
  const [workData, setWorkData] = useState();

  useEffect(() => {
    console.log("inside the useEffects")
    getUserData(token);
    getAge();
  }, []);

const getUserData = async (token) => {
  try{
    const response = await axios.get('http://192.168.164.105:4000/api/getUser' , {
      headers: {
          Authorization: token
      }
    })
    console.log("response" , response);
    const content =  response.data ;
    setPersonalData(content.data) ;
    return response;
  }catch(error){
    console.log("aaila")
  }
}
console.log("person", personalData)

const getAge = () => {
  const dateString = personalData;
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};


  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: colors.blueNew}]}>
      <ScrollView
        bounces={false}
        style={{flex: 1}}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Image
          style = {{top:2, alignSelf:'center'}}
          source={require('../../assests/Images/founderr.png')}
         />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.userText}>
          {personalData
              ? `${personalData.firstName} ${personalData.lastName}`
              : 'Loading...'}
          </Text>
        </View>

        <View style={styles.subView}>
          <View style={styles.subImg}>
            <TouchableOpacity activeOpacity={0.7} style={styles.cameraView}>
              <SvgIcons.CameraIcon />
            </TouchableOpacity>
            <Image
              source={{uri: 'https://source.unsplash.com/random?user'}}
              style={styles.imgView}
              resizeMode="cover"
              borderRadius={wp(25)}
            />
          </View>

          <View style={styles.commonInfo}>
            <TouchableOpacity style={styles.editView}>
              <Text style={styles.font10}>{STRINGS.EDIT}</Text>
            </TouchableOpacity>

            <LabelBorder index={1} lable={STRINGS.LOOKINGFOR} value={'CEO'} />
            <LabelBorder lable={STRINGS.YOURCORESKILLS} value={'Engineering'} />
            <LabelBorder
              lable={STRINGS.REQUIRECORESKILLS}
              value={'Financial Manager'}
            />
            <LabelBorder lable={STRINGS.AREOFINTREST} value={'AI/ML'} />
            <LabelBorder
              lable={STRINGS.IDEA}
              value={'One stop Business Platform'}
            />
            <LabelBorder
              isBorder
              lable={STRINGS.IDEA}
              value={'Building One stop Business Platform'}
            />
          </View>

          <View style={styles.labelBorder}>
            <Text style={styles.boxView}>{STRINGS.PERSONALDETAILS}</Text>

            <LabelBorder
              iconLabel
              icon={<SvgIcons.PinLocation />}
              lable={personalData?.location ? personalData?.location : 'Earth'}
            />
            <LabelBorder
              iconLabel
              icon={<SvgIcons.PersonIcon />}
              lable={personalData?.gender ? personalData?.gender : 'Male'}
            />
            <LabelBorder
              iconLabel
              icon={<SvgIcons.CakeIcon />}
              lable={getAge()}
              isBorder={true}
            />
          </View>

          <View style={[styles.labelBorder, {marginVertical: 0}]}>
            <Text style={styles.boxView}>{STRINGS.SKILSS}</Text>

            <View style={styles.skillsView}>
              {skillData.map(item => (
                <View style={styles.titleStyle}>
                  <Text>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.labelBorder}>
            <Text style={styles.boxView}>{STRINGS.EXPRIENCE}</Text>
            {exprienceData?.map(item => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgIcons.CakeIcon />

                <View>
                  <Text>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
