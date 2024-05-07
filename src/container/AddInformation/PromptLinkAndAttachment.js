import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../assests/Theme/Color';
import {hp, normalize} from '../../utils/responsiveScreen';

const PromptLinkAndAttachment = ({index}) => {
  return (
    <>
      {index == 1 ? (
        <>
          <Text style={styles.text}>Paste your link here</Text>
          <View style={styles.pasteLinkContainer}></View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Proof of work attachment</Text>
          <View style={styles.attachmentContainer}>
            <Text style={styles.text}>Select attachments to upload</Text>
          </View>
        </>
      )}
    </>
  );
};

export default PromptLinkAndAttachment;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black30,
    fontSize: normalize(12),
    marginVertical: hp(0.5),
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
  attachmentContainer: {
    height: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black50,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: hp(1),
  },
});
