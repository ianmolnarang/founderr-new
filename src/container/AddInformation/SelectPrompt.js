import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {STRINGS} from '../../utils/strings';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {Actionsheet, useDisclose} from 'native-base';
import PromptLinkAndAttachment from './PromptLinkAndAttachment';
import SvgIcons from '../../assests/svgs/svgIcons';

const SelectPrompt = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [selectedTab, setSelectedTab] = useState(1);

  const tabSelect = index => {
    index === 2 ? setSelectedTab(2) : setSelectedTab(1);
    console.log(selectedTab);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onOpen}
        // onPress={showPromptActionSheet}
        style={styles.promptContainer}>
        <View style={styles.promptTextContainer}>
          <Text
            style={{
              fontFamily: fonts.poppinsRegular,
              fontSize: normalize(12),
            }}>
            {STRINGS.PROMPTS_TEXT1}
          </Text>
          <Text
            style={{
              color: colors.black30,
              fontFamily: fonts.poppinsRegular,
              fontSize: normalize(10),
            }}>
            {STRINGS.PROMPTS_TEXT2}
          </Text>
        </View>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <View style={styles.container}>
            <Text style={styles.promptActionSheetTitle}>
              Add your proof of work
            </Text>
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
                <TouchableOpacity
                  style={[
                    styles.tabButtons,
                    {
                      backgroundColor:
                        selectedTab === 1 ? colors.white : colors.black,
                    },
                  ]}
                  onPress={() => tabSelect(1)}>
                  <Text
                    style={[
                      styles.tabColors,
                      {
                        color: selectedTab === 1 ? colors.black : colors.white,
                      },
                    ]}>
                    Add Attachment
                  </Text>
                  {selectedTab === 1 ? (
                    <SvgIcons.LinkBlackIcon />
                  ) : (
                    <SvgIcons.LinkWhiteIcon />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.tabButtons,
                    {
                      backgroundColor:
                        selectedTab === 2 ? colors.white : colors.black,
                    },
                  ]}
                  onPress={() => tabSelect(2)}>
                  <Text
                    style={[
                      styles.tabColors,
                      {
                        color: selectedTab === 2 ? colors.black : colors.white,
                      },
                    ]}>
                    Add Link
                  </Text>
                  {selectedTab === 2 ? (
                    <SvgIcons.GlobeBlackIcon />
                  ) : (
                    <SvgIcons.GlobeWhiteIcon />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <PromptLinkAndAttachment index={selectedTab} />
            <TouchableOpacity style={styles.descriptionButton}>
              <Text style={styles.descriptionButtonText}>
                Add description and skills
              </Text>
            </TouchableOpacity>
          </View>

          {/*   <Actionsheet.Item>
            <View style={styles.uploadPhotoActionSheetOptionContainer}>
              <SvgIcons.UploadIcon />
              <Text style={styles.uploadPhotoActionSheetText}>Upload</Text>
            </View>
          </Actionsheet.Item>
           */}
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default SelectPrompt;

const styles = StyleSheet.create({
  promptContainer: {
    height: hp(10),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black50,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: hp(1),
  },
  promptActionSheetTitle: {
    marginTop: hp(1.7),
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: normalize(18),
  },
  promptTextContainer: {
    justifyContent: 'center',
    marginLeft: wp(4),
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 350,
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  tabButtons: {
    width: 150,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabColors: {
    fontFamily: fonts.poppinsMedium,
    color: colors.white,
    fontSize: normalize(10),
    marginRight: wp(1),
    marginTop: hp(0.3),
    // marginBottom: hp(2),
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
});
