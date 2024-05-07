import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

const OneSplash = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Video
          source={require('../Videos/ui1.mp4')} // Replace with the actual path to your video
          style={styles.video}
          resizeMode="cover" // Adjust to your preferred video aspect ratio
          repeat={true}
        />
        <Text style={styles.textCommunicate}>Connect</Text>
        <Text style={styles.subHeading}>
          Link a shared {'\n'}passion and innovation {'\n'}through connection.
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', top: '90%', left: '80%'}}
          onPress={() => navigation.navigate('SecondSplash')}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textCommunicate: {
    position: 'absolute',
    fontFamily: 'AbhayaLibre-Bold',
    top: '75%',
    alignSelf: 'center',
    fontSize: 50,
    color: 'white',
    left: '5%',
    marginBottom: 2,
  },
  subHeading: {
    position: 'absolute',
    top: '82%',
    left: '6%',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'white',
  },
});

export default OneSplash;
