import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { fonts } from '../../assests/Theme/Color';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '740217175032-2lge0q52mgs0m4ebua7mnok6j9c7ukfp.apps.googleusercontent.com'
  });

function Login({ navigation }) {
    const [usrInfo, setUsrInfo] = useState(null) ;
    const navigateToHomescreen = () => {
        navigation.navigate('HomeScreen');
    };
    useEffect(()=>{
        console.log("Inside the udseffects");
      },[])

      const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setUsrInfo({userInfo, error:undefined});
          navigation.navigate('HomeScreen');
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

    return (

        <View style={styles.container}>
            <Image style={styles.firstImage} source={require('../../assests/Illustrations/matching.png')} />

            <View style={styles.whiteRectangle}>

                <View style={styles.topContent}>
                    <Text style={styles.connectText}>Sign in and elevate your business dreams. </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={signIn}>
                    <View style={styles.buttonContent}>
                        <Image
                            source={require('../../assests/Illustrations/google.png')} // Replace with the path to your Google icon image
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Sign In with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#0892D0",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstImage: {
        width: 400,
        height: 400,
        marginBottom: 220,
        resizeMode: 'stretch',
    },
    whiteRectangle: {
        backgroundColor: 'white',
        width: '100%',
        height: 300,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        padding: 20,
    },
    topContent: {
        marginBottom: 20,
    },
    connectText: {
        fontSize: 20,
        color: "#1D1D1D",
        fontFamily: "Poppins",
        top: 30,
        alignSelf: 'center'
    },
    subText: {
        fontSize: 18,
        color: "#1D1D1D",
        marginTop: -20,
    },
    nextButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        height:60,
        borderWidth: 3,
        borderColor: '#407BFF',
        marginBottom:20
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
});

export default Login;
