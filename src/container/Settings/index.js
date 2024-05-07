import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import SvgIcons from '../../assests/svgs/svgIcons';
import {getFacilities} from '../../api/News';
import Swiper from 'react-native-swiper';
import {Actionsheet, useDisclose, Box, Button} from 'native-base';
const Settings = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: wp(6),
        marginVertical: hp(2),
      }}>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Bye');
              }}
              style={styles.accountButton}>
              <Text
                style={{
                  color: colors.black,
                  alignSelf: 'center',
                  fontFamily: fonts.poppinsMedium,
                  fontSize: normalize(12),
                }}>
                Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('FukkU');
              }}
              style={styles.deleteButton}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: fonts.poppinsMedium,
                  fontSize: normalize(12),
                  alignSelf: 'center',
                }}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
      <View style={styles.topNameContainer}>
        <SvgIcons.BackIcon />
        <Text style={styles.nameText}>&nbsp;&nbsp; Settings</Text>
      </View>

      <Swiper
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={false}
        loop={true}
        style={{marginTop: hp(3)}}
        activeDotColor={colors.blue}>
        <View>
          <Image
            source={require('../../assests/Images/slideone.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <View>
          <Image
            source={require('../../assests/Images/slidetwo.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View>
          <Image
            source={require('../../assests/Images/slidethree.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </Swiper>

      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 16,
          borderColor: colors.blue,
          borderWidth: 2,
          height: hp(6),
          width: wp(40),
          top: hp(47), // Adjust this value to position the button
        }}>
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
            fontSize: hp(3),
            fontFamily: fonts.poppinsMedium,
            top: hp(0.5),
          }}>
          One Call
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginBottom: hp(7),
          marginTop: hp(3),
        }}>
        <View style={styles.firstMenuContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('You will redirect to edit details');
            }}>
            <Text style={styles.menuText}> Update Personal Details </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstMenuContainer}>
          <TouchableOpacity onPress={onOpen}>
            <Text style={styles.menuText}> Account </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstMenuContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('You will redirect to privacy policy');
            }}>
            <Text style={styles.menuText}> Privacy Policy </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstMenuContainer}>
          <Text style={styles.menuText} onPress={() => {}}>
            About Us
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: normalize(20),
    marginTop: hp(0.5),
  },
  firstMenuContainer: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  menuContainer: {
    borderColor: colors.black,
    borderBottomWidth: 1,
    justifyContent: 'space-between',

    flexDirection: 'row',

    paddingVertical: hp(2),
  },
  menuText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black50,
    fontSize: normalize(16),
    textAlign: 'center',
  },
  accountButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(2),
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: hp(2),
    width: wp(80),
  },
  deleteButton: {
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(2),
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: hp(2),
    borderColor: 'red',
  },
});
