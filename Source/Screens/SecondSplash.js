import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

const SecondSplash = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Video
          source={require('../Videos/ui2.mp4')} // Replace with the actual path to your video
          style={styles.video}
          resizeMode="cover" // Adjust to your preferred video aspect ratio
          repeat={true}
        />
        <Text style={styles.textCommunicate}>Communicate</Text>
        <Text style={styles.subHeading}>
          Building bridges of {'\n'}communication for {'\n'}co-founders to
          thrive.
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', top: '90%', left: '80%'}}
          onPress={() => navigation.navigate('ThirdSplash')}>
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

export default SecondSplash;
