import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Actionsheet, ScrollView, TextArea, useDisclose } from 'native-base';
import { colors, fonts } from '../../assests/Theme/Color';
import { hp, normalize, wp } from '../../utils/responsiveScreen';
import axios from 'axios';

const LookingForList = ({ promptSelected, setPromptSelected }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const registerIdea = async () => {
    try {
      const response = await axios.post(
        'http://192.168.164.105:4000/api/registerIdea',
        {
          hasIdea: true,
          problemStatement: promptSelected.businessIdea,
        },
        {
          headers: {
            Authorization: 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2ZlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE0ODQ1ODIxfQ.hebJY_QQmmDpjIoP3LyMo1V-h66EawlTNuz042e5Oek',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error registering idea:', error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text style={styles.options}>Yes</Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={styles.container}>
            <Text style={styles.options}>Write a problem statement?</Text>
            <View style={{ width: wp(90) }}>
              <Text style={{ textAlign: 'right' }}>Max 120 words</Text>
            </View>

            <TextArea
              value={promptSelected.businessIdea}
              onChangeText={(text) => {
                promptSelected.businessIdea = text;
                setPromptSelected({ ...promptSelected });
              }}
              h={150}
              styles={styles.textArea}></TextArea>

            <TouchableOpacity onPress={registerIdea}>
              <Text style={styles.registerButton}>Done</Text>
            </TouchableOpacity>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

const BusinessIdeaActionsSheet = ({
  isOpen,
  onClose,
  promptSelected,
  setPromptSelected,
}) => {
  const coreSkills = ['Yes', 'No'];
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView>
          {coreSkills.map((item) =>
            item == 'Yes' ? (
              <Actionsheet.Item style={styles.optionContainer}>
                <LookingForList
                  promptSelected={promptSelected}
                  setPromptSelected={setPromptSelected}
                />
              </Actionsheet.Item>
            ) : (
              <Actionsheet.Item
                onPress={() => {
                  promptSelected.businessIdea = item;
                  setPromptSelected({ ...promptSelected });
                }}
                style={styles.optionContainer}>
                <Text style={styles.options}>{item}</Text>
              </Actionsheet.Item>
            )
          )}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default BusinessIdeaActionsSheet;

const styles = StyleSheet.create({
  options: {
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(14),
    width: wp(90),
    color: colors.charcoal,
  },
  textArea: {
    // height: hp(80),
  },
  container: {
    marginVertical: hp(2),
  },
  optionContainer: {
    marginBottom: hp(0.2),
  },
  registerButton: {
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(16),
    color: colors.blueNew,
    backgroundColor: colors.primary,
    paddingVertical: hp(1),
    marginTop: hp(2),
    borderRadius: 8,
  },
});
