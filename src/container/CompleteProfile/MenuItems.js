import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {STRINGS} from '../../utils/strings';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {Actionsheet, ScrollView, useDisclose} from 'native-base';
import LookingForActionSheet from './LookingForActionSheet';
import CoreSkillsActionSheet from './CoreSkillsActionSheet';
import BusinessIdeaActionsSheet from './BusinessIdeaActionsSheet';
import AreaOfInterestActionSheet from './AreaOfInterestActionSheet';

const MenuItems = ({title, promptSelected, setPromptSelected}) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <TouchableOpacity onPress={onOpen} style={styles.menuItemContainer}>
        <View style={styles.promptTextContainer}>
          <Text
            style={{
              color: colors.black30,
              fontFamily: fonts.poppinsMedium,
              fontSize: normalize(16),
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>

      {title == STRINGS.LOOKING_FOR ? (
        <LookingForActionSheet
          promptSelected={promptSelected}
          setPromptSelected={setPromptSelected}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : title == STRINGS.CORE_SKILLS ? (
        <CoreSkillsActionSheet
          promptSelected={promptSelected}
          setPromptSelected={setPromptSelected}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : title == STRINGS.AREA_INTEREST ? (
        <AreaOfInterestActionSheet
          promptSelected={promptSelected}
          setPromptSelected={setPromptSelected}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : title == STRINGS.BUSINESS_IDEA ? (
        <BusinessIdeaActionsSheet
          promptSelected={promptSelected}
          setPromptSelected={setPromptSelected}
          isOpen={isOpen}
          onClose={onClose}
        />
      ) : (
        onClose
      )}
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  title: {
    marginTop: hp(1.7),
    fontFamily: fonts.poppinsBold,
    color: colors.black,
    fontSize: normalize(18),

    textAlign: 'center',
  },

  container: {},
  menuItemContainer: {
    height: hp(8),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black30,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: hp(2),
    width: wp(90),
  },
  promptTextContainer: {
    justifyContent: 'center',
    marginLeft: wp(4),
  },
});
