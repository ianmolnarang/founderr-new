import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import ActionSheet from 'react-native-actionsheet';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import PromptActionSheetDetails from './PromptActionSheetDetails';
import {useDisclose} from 'native-base';
import SvgIcons from '../../assests/svgs/svgIcons';

const ActionSheets = ({uploadPhotoActionSheet, promptActionSheet}) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  let uploadPhotoOptions = [
    <View style={styles.uploadPhotoActionSheetOptionContainer}>
      <SvgIcons.CameraIcon />
      <Text style={styles.uploadPhotoActionSheetText}>Use Camera</Text>
    </View>,
    <View style={styles.uploadPhotoActionSheetOptionContainer}>
      <SvgIcons.UploadIcon />
      <Text style={styles.uploadPhotoActionSheetText}>Upload</Text>
    </View>,
    <View style={styles.uploadPhotoActionSheetOptionContainer}>
      <Text style={styles.uploadPhotoActionSheetText}>Cancel</Text>
    </View>,
  ];

  let promptOptions = [
    // <View style={styles.descriptionButton}>
    //   <Text style={styles.descriptionButtonText}>
    //     Add Description and Skills
    //   </Text>
    // </View>,
    // <View style={styles.uploadPhotoActionSheetOptionContainer}>
    //   <Text style={styles.uploadPhotoActionSheetText}>Cancel</Text>
    // </View>,
  ];
  return (
    <View>
      {/* <ActionSheet
        ref={uploadPhotoActionSheet}
        title={
          <Text style={styles.uploadPhotoActionSheetTitle}>
            Find a photo or video
          </Text>
        }
        options={uploadPhotoOptions}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={index => {}}
      /> */}

      {/* <ActionSheet
        ref={promptActionSheet}
        title={
          <Text style={styles.promptActionSheetTitle}>
            Add your proof of work
          </Text>
        }
        message={<PromptActionSheetDetails />}
        options={promptOptions}
        //   cancelButtonIndex={0}
        // destructiveButtonIndex={0}
        onPress={index => {}}
        styles={{messageBox: {height: 320}}}
      /> */}
    </View>
  );
};

export default ActionSheets;

const styles = StyleSheet.create({
  uploadPhotoActionSheetTitle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: normalize(18),
    textAlign: 'left',
  },
  uploadPhotoActionSheetOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPhotoActionSheetText: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black50,
    fontSize: normalize(14),
    marginLeft: wp(1),
    marginTop: hp(1),
  },
  promptActionSheetTitle: {
    marginTop: hp(1.7),
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: normalize(18),
  },
  descriptionButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
    // width: 300,
    // borderRadius: 40,
    // paddingHorizontal: 20,
  },
  descriptionButtonText: {
    // fontFamily: fonts.poppinsMedium,
    // color: colors.white,
    // fontSize: normalize(10),
    // marginLeft: wp(1),
    // marginTop: hp(2),
    // marginBottom: hp(2),
  },
});
