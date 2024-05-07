import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import MenuItems from './MenuItems';
import {STRINGS} from '../../utils/strings';
import {useDispatch, useSelector} from 'react-redux';
import {allPromptsInfo} from '../../redux/slice/completeInformation';
import {RouteName} from '../../utils/constant';

const CompleteProfile = ({navigation}) => {
  const dispatch = useDispatch();
  //console.log(useSelector(state => state.completeInformation.userData));

  const [promptSelected, setPromptSelected] = useState({
    lookingFor: '',
    coreSkills: '',
    expectedSkills: '',
    areaOfInterest: '',
    businessIdea: '',
  });

  console.log(promptSelected);

  const sendDataFn = async () => {
    dispatch(allPromptsInfo(promptSelected));
    await navigation.navigate(RouteName.bottomTab);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.topNameContainer}>
        <Text style={styles.nameText}>Complete your profile</Text>
        <View style={{height: hp(70)}}>
          <MenuItems
            promptSelected={promptSelected}
            setPromptSelected={setPromptSelected}
            title={STRINGS.LOOKING_FOR}
          />
          <MenuItems
            promptSelected={promptSelected}
            setPromptSelected={setPromptSelected}
            title={STRINGS.CORE_SKILLS}
          />
          <MenuItems
            promptSelected={promptSelected}
            setPromptSelected={setPromptSelected}
            title={STRINGS.EXPECTED_SKILLS}
          />
          <MenuItems
            promptSelected={promptSelected}
            setPromptSelected={setPromptSelected}
            title={STRINGS.AREA_INTEREST}
          />
          <MenuItems
            promptSelected={promptSelected}
            setPromptSelected={setPromptSelected}
            title={STRINGS.BUSINESS_IDEA}
          />
        </View>

        <TouchableOpacity onPress={sendDataFn} style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  topNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: hp(2),
    marginHorizontal: wp(6),
  },

  nameText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: normalize(22),
    marginVertical: hp(4),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: wp(30),
    height: hp(5),
    borderRadius: 40,
    paddingHorizontal: 20,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  buttonText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.white,
    fontSize: normalize(14),
  },
});
