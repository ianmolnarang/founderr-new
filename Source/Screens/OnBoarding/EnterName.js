import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

import {colors} from '../../../src/assests/Theme/Color';

const EnterName = ({navigation}) => {
  return (
    <>
      <View>
        <Image
          source={require('../../Images/User.png')}
          style={{width: 40, height: 40, top: 75, left: 25}}
        />
      </View>
      <View>
        <Text style={styles.enterName}>What’s your name?</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <TextInput
          style={(style = styles.enterFandLName)}
          placeholder="First Name"
        />
        <TextInput
          style={(style = styles.enterFandLName)}
          placeholder="Last Name"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EnterEmail');
          }}>
          <Text
            style={{
              color: colors.blue,
              fontSize: 20,
              top: 150,
              left: 330,
              fontFamily: 'Poppins-Medium',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  enterName: {
    fontSize: 30,
    top: 125,
    left: 25,
    color: colors.charcoal,
    fontFamily: 'Poppins-Medium',
  },
  enterFandLName: {
    height: 60,
    borderColor: 'gray',
    borderBottomWidth: 1,
    top: 150,
    left: 25,
    width: 350,
    borderRadius: 0,
    padding: 10,
    fontFamily: 'Poppins-Regular',
    marginBottom: 13,
    fontSize: 24,
    color: colors.charcoal,
  },
});

export default EnterName;
