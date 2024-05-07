import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize, wp} from '../../utils/responsiveScreen';

const PromptActionSheetDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.proofOfWorkText}>
        Your proof of work (portfolio) can be your resume, github links or
        individual projects.
      </Text>
      <View
        style={{
          alignItems: 'center',
          marginTop: hp(1.5),
          marginBottom: hp(1.5),
        }}>
        <View style={styles.tabButtonsContainer}>
          <Text>bfiewfi</Text>
        </View>
      </View>

      <View>
        <Text style={styles.proofOfWorkText}>Paste your link here</Text>
        <View style={styles.pasteLinkContainer}></View>
      </View>

      <View style={styles.descriptionButton}>
        <Text style={styles.descriptionButtonText}>
          Add description and skills
        </Text>
      </View>
    </View>
  );
};

export default PromptActionSheetDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
  },
  uploadPhotoActionSheetTitle: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: normalize(18),
    textAlign: 'left',
  },
  tabButtonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 350,
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  pasteLinkContainer: {
    height: hp(6),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black50,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: hp(1),
  },
  descriptionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 350,
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 20,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  descriptionButtonText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.white,
    fontSize: normalize(10),
    marginLeft: wp(1),
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  proofOfWorkText: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black30,
    fontSize: normalize(12),
    marginVertical: hp(0.5),
  },
});
