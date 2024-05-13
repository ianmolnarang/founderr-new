import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigateToScreenThree();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const navigateToScreenThree = () => {
        navigation.navigate('ScreenOne');
    };

    return (
        <View style={styles.container}>
            <Video
                source={require('../../assests/Video/splash.mp4')}
                style={styles.backgroundVideo}
                resizeMode="cover"
                repeat={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Splash;
