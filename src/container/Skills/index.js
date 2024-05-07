import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';

const Skills = ({navigation, route}) => {
  const userData = route?.params?.userData;
  console.log('USerDetails', userData);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={{borderWidth: 1}}
        onPress={() => navigation.goBack()}>
        <SvgIcons.LeftIcon width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.skillsText}>{'Skills'}</Text>
        <Text style={styles.maxText}>{'max 10'}</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput />
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Skills;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillsText: {
    fontSize: normalize(24),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.charcoal,
    marginLeft: wp(5),
  },
  maxText: {
    fontSize: normalize(14),
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    marginLeft: wp(5),
  },
  searchContainer: {
    height: hp(61),
    borderBottomWidth: 1,
  },
});
