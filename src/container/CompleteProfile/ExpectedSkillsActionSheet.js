import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useEffect } from 'react';
import {Actionsheet, ScrollView} from 'native-base';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import axios from 'axios';

const ExpectedSkillsActionSheet = ({
  isOpen,
  onClose,
  promptSelected,
  setPromptSelected,
}) => {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    console.log("Indise")
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
     // console.log("->",response.data.dataFromAPI3.data[1].Interest)
    const positions = response.data.dataFromAPI4.data[0].Position;
    const expertiseArray = positions.map(position => position.trim());
    setExpertise(expertiseArray);
    } catch (error) {
      console.error("Error fetching expertise:", error);
    }
  };

  const [selected, setSelected] = useState([]);

  const optionClicked = option => {
    if (selected?.includes(option)) {
      // selected.filter(each => each != option);
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
    promptSelected.lookingFor = selected;
    setPromptSelected({...promptSelected});

    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onCloseActionSheet}>
      <Actionsheet.Content>
        <ScrollView>
          {expertise.map(item => (
            <Actionsheet.Item
              style={[
                styles.optionContainer,
                {
                  backgroundColor: selected?.includes(item)
                    ? colors.black30
                    : 'white',
                },
              ]}
              onPress={() => {
                optionClicked(item);
              }}>
              <Text style={styles.optionText}>{item}</Text>
            </Actionsheet.Item>
          ))}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ExpectedSkillsActionSheet;

const styles = StyleSheet.create({
  optionText: {
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(13),
    width: wp(90),
    color: colors.charcoal,
  },
  optionContainer: {
    marginBottom: hp(0.2),
  },
});

AreaOfInterestActionSheet