import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {STRINGS} from '../../utils/strings';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {Actionsheet, ScrollView, useDisclose} from 'native-base';

const LookingForList = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const lookingFor = [
    'COO',
    'CEO',
    'CTO',
    'Executive Director',
    'Investment Officer',
    'Content Head',
    'Financial Officer',
    'Technological Officer',
    'Marketing Officer',
    'Chief Human Resources Officer',
    'Strategy Officer',
    'Risk Officer',
    'General Counselor',
    'Security Officer',
    'Product Officer',
    'Risk Officer',
  ];

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text style={styles.text}>What are you looking for</Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={styles.container}>
            <Text style={styles.title}>What are you looking for</Text>
            <ScrollView>
              {lookingFor.map(item => (
                <Actionsheet.Item>
                  <Text style={styles.options}>{item}</Text>
                </Actionsheet.Item>
              ))}
            </ScrollView>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

const RoleList = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const role = [
    'Research & Development',
    'Business Development',
    'CTO',
    'Data Analysis',
    'Brand Management',
    'Content Management',
    'Customer Success',
    'Human Resources',
    'Advisory/Board Member',
    'Software Engineer',
  ];

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text style={styles.text}>My Role is</Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={styles.container}>
            <Text style={styles.title}>My Role is</Text>
            <ScrollView>
              {role.map(item => (
                <Actionsheet.Item>
                  <Text style={styles.options}>{item}</Text>
                </Actionsheet.Item>
              ))}
            </ScrollView>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

const AddResume = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <View style={styles.resumeContainer}>
      <TouchableOpacity onPress={onOpen} style={styles.resumeTextContainer}>
        <Text
          style={{
            fontFamily: fonts.poppinsRegular,
            fontSize: normalize(12),
          }}>
          {STRINGS.ATTACHMENT_TEXT}
        </Text>
        <Text
          style={{
            color: colors.black30,
            fontFamily: fonts.poppinsRegular,
            fontSize: normalize(10),
          }}>
          {STRINGS.ATTACHMENT_TEXT2}
        </Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={styles.container}>
            <Text style={styles.title}>Prompts</Text>

            <Actionsheet.Item>
              <LookingForList />
            </Actionsheet.Item>

            <Actionsheet.Item>
              <RoleList />
            </Actionsheet.Item>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default AddResume;

const styles = StyleSheet.create({
  resumeContainer: {
    height: hp(10),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black50,
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  resumeTextContainer: {
    justifyContent: 'center',
    marginLeft: wp(4),
  },

  promptContainer: {
    height: hp(10),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black50,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: hp(1),
  },
  title: {
    marginTop: hp(1.7),
    fontFamily: fonts.poppinsBold,
    color: colors.black,
    fontSize: normalize(18),

    textAlign: 'center',
  },

  container: {
    marginHorizontal: wp(4),
  },

  text: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(14),
    width: wp(100),
    color: colors.charcoal,
    marginLeft: wp(4),
  },
  options: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(14),
    width: wp(100),
    color: colors.charcoal,
    marginLeft: wp(0),
  },
});
