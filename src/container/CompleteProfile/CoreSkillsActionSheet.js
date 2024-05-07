import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Actionsheet, ScrollView } from 'native-base';
import { colors, fonts } from '../../assests/Theme/Color';
import { hp, normalize, wp } from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import axios from 'axios';

const CoreSkillsActionSheet = ({
  isOpen,
  onClose,
  promptSelected,
  setPromptSelected,
}) => {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    getExpertise();
  }, []);

  const token = "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2ZlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE0ODQ1ODIxfQ.hebJY_QQmmDpjIoP3LyMo1V-h66EawlTNuz042e5Oek";

  const getExpertise = async () => {
    try {
      const response = await axios.get('http://192.168.164.105:4000/api/getAllapi', {
        headers: {
          Authorization: token
        }
      });
      const expertiseList = response.data.dataFromAPI1.data[0].expertise;
      // Splitting the expertise string into an array
      const expertiseArray = expertiseList[0].split(', ');
      setExpertise(expertiseArray);
    } catch (error) {
      console.error("Error fetching expertise:", error);
    }
  };

  const [selected, setSelected] = useState([]);

  const optionClicked = option => {
    if (selected?.includes(option)) {
      setSelected(prev => {
        return prev.filter(each => each !== option);
      });
    } else {
      console.log(option);
      if (selected.length < 2) {
        setSelected(prev => [...prev, option]);
      }
    }
    console.log(selected);
  };

  const onCloseActionSheet = () => {
    promptSelected.coreSkills = selected;
    setPromptSelected({ ...promptSelected });

    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onCloseActionSheet}>
      <Actionsheet.Content>
        <View style={{ width: wp(90) }}>
          <Text style={{ textAlign: 'right', marginBottom: hp(2) }}>
            Maximum 2
          </Text>
        </View>

        <ScrollView>
          {expertise.map(item => (
            <Actionsheet.Item
              style={[styles.optionContainer, {
                backgroundColor: selected?.includes(item)
                  ? colors.grey
                  : 'white',
              },]}

              onPress={() => {
                optionClicked(item);
              }}>
              <View
                style={{
                  width: wp(80),
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.options}>{item}</Text>
                <View>
                  {selected?.includes(item) ? <SvgIcons.ConfirmIcon /> : ''}
                </View>
              </View>
            </Actionsheet.Item>
          ))}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default CoreSkillsActionSheet;

const styles = StyleSheet.create({
  options: {
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(16),
    width: wp(90),
    color: colors.charcoal,
  },
  optionContainer: {
    marginBottom: hp(0.2),
  },
});
