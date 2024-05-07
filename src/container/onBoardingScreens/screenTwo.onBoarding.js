import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import ScreenThree from './screenThree.onBoarding';
import { fonts } from '../../assests/Theme/Color';

function ScreenTwo({ navigation }) {
    const navigateToScreenThree = () => {
        navigation.navigate('ScreenThree');
    };

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Image style={styles.firstImage} source={require('../../assests/Illustrations/second.png')} />

                <View style={styles.whiteRectangle}>
                    {/* Connect text and Next button */}
                    <View style={styles.topContent}>
                        <Text style={styles.connectText}>communicate</Text>
                        <Text style={styles.subText}>Build bridges of communication {"\n"}for co-founders to thrive.</Text>
                    </View>
                    <TouchableOpacity style={styles.nextButton} onPress={navigateToScreenThree}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstImage: {
        width: 500,
        height: 500,
        marginBottom: 120,
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
        fontSize: 40,
        color: "#1D1D1D",
        fontWeight: 'bold',
        fontFamily: "Poppins",
        marginBottom: 20,
    },
    subText: {
        fontSize: 18,
        color: "#1D1D1D",
        marginTop: -20,
    },
    nextButton: {
        backgroundColor: '#171717', // Use a contrasting color
        padding: 22,
        borderRadius: 50,
        left:180,
        height:80,
        width:180

    },
    nextButtonText: {
        color: 'white', // Set text color to white for contrast
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
    },
});

export default ScreenTwo;
