import React from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';
import {wp} from '../../utils/responsiveScreen';
import {colors} from '../../assests/Theme/Color';

const AppLoader = ({visible}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}} // Optional
    >
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      </View>
    </Modal>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  loaderContainer: {
    padding: wp(20),
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker background for loader
    borderRadius: wp(10),
  },
});
