import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {Actionsheet, useDisclose} from 'native-base';
import SvgIcons from '../../assests/svgs/svgIcons';

const UploadPhoto = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <TouchableOpacity
        // onPress={showUploadPhotoActionSheet}
        onPress={onOpen}
        style={styles.image}>
        <SvgIcons.ImageIcon />
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View>
            <Text style={styles.uploadPhotoActionSheetTitle}>
              Find a photo or video
            </Text>
            <Actionsheet.Item>
              <View style={styles.uploadPhotoActionSheetOptionContainer}>
                <SvgIcons.CameraIcon />
                <Text style={styles.uploadPhotoActionSheetText}>
                  Use Camera
                </Text>
              </View>
            </Actionsheet.Item>
            <Actionsheet.Item>
              <View style={styles.uploadPhotoActionSheetOptionContainer}>
                <SvgIcons.UploadIcon />
                <Text style={styles.uploadPhotoActionSheetText}>Upload</Text>
              </View>
            </Actionsheet.Item>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  image: {
    height: hp(15),
    width: wp(40),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black30,
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  uploadPhotoActionSheetOptionContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  uploadPhotoActionSheetText: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black50,
    fontSize: normalize(14),
    marginLeft: wp(1),
    // marginTop: hp(1),
  },
  uploadPhotoActionSheetTitle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.charcoal,
    fontSize: normalize(10),
    textAlign: 'center',
  },
});
