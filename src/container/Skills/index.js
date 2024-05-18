import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IconHeader from '../../components/Header';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {STRINGS} from '../../utils/strings';
import {colors, fonts} from '../../assests/Theme/Color';
import {commonStyle} from '../../utils/commonStyle';
import Input from '../../components/Input';
import OvalButton from '../../components/OvalButton';
import RoundButton from '../../components/RoundButton';
import {RouteName} from '../../utils/constant';
import {useDispatch} from 'react-redux';
import {allSkillsInfo} from '../../redux/slice/completeInformation';

const Skills = ({navigation}) => {
  const dispatch = useDispatch();
  const [skillSet1, setSkillSet1] = useState([]);
  const [skillSet2, setSkillSet2] = useState([]);
  const [skillSet3, setSkillSet3] = useState([]);
  const [skillSet4, setSkillSet4] = useState([]);
  const [skillSet5, setSkillSet5] = useState([]);
  const [skillSet6, setSkillSet6] = useState([]);
  const [skillSet7, setSkillSet7] = useState([]);
  const [skillSet8, setSkillSet8] = useState([]);

  let arr1 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr2 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr3 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr4 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr5 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr6 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr7 = ['Java', 'python', 'C++', 'css', 'c#'];
  let arr8 = ['Java', 'python', 'C++', 'css', 'c#'];

  console.log(skillSet3);

  const skillClicked = (array, setArray, skill) => {
    if (array.includes(skill)) {
      const filteredArr = array.filter(each => each != skill);
      setArray(filteredArr);
    } else {
      setArray(codingSkill => [...codingSkill, skill]);
    }
  };

  const sendDataFn = async () => {
    // dispatch(
    //   allSkillsInfo({
    //     skillSet1,
    //     skillSet2,
    //     skillSet3,
    //     skillSet4,
    //     skillSet5,
    //     skillSet6,
    //     skillSet7,
    //     skillSet8,
    //   }),
    // );
    navigation.navigate(RouteName.completeProfile);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{position: 'absolute', bottom: 0, right: hp(0), zIndex: 1}}>
        <RoundButton onPress={sendDataFn} />
      </View>
      <View style={commonStyle.rowCenter}>
        <IconHeader
          icon={<SvgIcons.BrainIcon height={wp(10)} width={wp(10)} />}
          iconTitle={STRINGS.SKILLS}
        />
        <Text style={styles.topText}>max 10</Text>
      </View>

      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp(2),
        }}>
        {/* <Input
          placeholder={STRINGS.SEARCH_SKILLS} 
         value={degree}
         onChangeText={setDegree}
     /> */}
        <Text style={styles.searchSkillsBelowLine}>
          {STRINGS.SEARCH_SKILLS_BELOWLINE}
        </Text>
      </View>

      {/* select options */}

      <ScrollView
        contentContainerStyle={{flexGrow: 1, zIndex: 0}}
        style={{
          marginBottom: hp(4),
          marginHorizontal: wp(2),
        }}>
        <View>
          <Text style={styles.skillHeading}>Coding</Text>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr1.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet1, setSkillSet1, skill)}
                ovalValue={skillSet1.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr2.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet2, setSkillSet2, skill)}
                ovalValue={skillSet2.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.skillHeading}>Design</Text>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr3.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet3, setSkillSet3, skill)}
                ovalValue={skillSet3.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr4.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet4, setSkillSet4, skill)}
                ovalValue={skillSet4.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.skillHeading}>Design</Text>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr5.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet5, setSkillSet5, skill)}
                ovalValue={skillSet5.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr6.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet6, setSkillSet6, skill)}
                ovalValue={skillSet6.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.skillHeading}>Design</Text>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr7.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet7, setSkillSet7, skill)}
                ovalValue={skillSet7.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {arr8.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => skillClicked(skillSet8, setSkillSet8, skill)}
                ovalValue={skillSet8.includes(skill) ? true : false}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          {/* <Text style={styles.skillHeading}>Design</Text> */}

          {/* <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {codingArray1.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => {
                  setCodingSKill(skill);
                }}
                ovalValue={codingSkill == skill ? true : false}
              />
            ))}
          </ScrollView> */}

          {/* <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            horizontal
            style={{
              marginTop: hp(2),
            }}>
            {designArray1.map(skill => (
              <OvalButton
                key={Math.random(0, 9)}
                ovalTitle={skill}
                onOvalPress={() => {
                  setCodingSKill(skill);
                }}
                ovalValue={codingSkill == skill ? true : false}
              />
            ))}
          </ScrollView> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Skills;

const styles = StyleSheet.create({
  topText: {
    marginTop: hp(8),
    marginHorizontal: wp(6),
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fonts.poppinsRegular,
  },

  searchSkillsBelowLine: {
    textAlign: 'center',
    color: colors.charcoal,
    fontSize: normalize(16),
    fontFamily: fonts.poppinsRegular,
  },

  skillHeading: {
    color: colors.black,
    marginTop: hp(4),
    marginHorizontal: wp(2),
    fontSize: normalize(20),
    fontFamily: fonts.poppinsMedium,
  },
});
