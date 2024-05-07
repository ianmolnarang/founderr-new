import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../assests/Theme/Color';
import {wp} from '../../utils/responsiveScreen';
import {useSelector} from 'react-redux';
import SvgIcons from '../../assests/svgs/svgIcons';

const SocialLinks = ({socialLinks, setSocialLinks}) => {
  const newUser = useSelector(state => state);

  return (
    <>
      <View style={styles.links}>
        <SvgIcons.LinkedinIcon />
        <TextInput
          value={socialLinks.linkedin}
          onChangeText={text => {
            socialLinks.linkedin = text;
            setSocialLinks({...socialLinks});
          }}
          style={styles.inputSection}></TextInput>
      </View>

      <View style={styles.links}>
        <SvgIcons.InstagramIcon />
        <TextInput
          value={socialLinks.instagram}
          onChangeText={text => {
            socialLinks.instagram = text;
            setSocialLinks({...socialLinks});
          }}
          style={styles.inputSection}></TextInput>
      </View>

      <View style={styles.links}>
        <SvgIcons.FacebookIcon />
        <TextInput
          value={socialLinks.facebook}
          onChangeText={text => {
            socialLinks.facebook = text;
            setSocialLinks({...socialLinks});
          }}
          style={styles.inputSection}></TextInput>
      </View>

      <View style={styles.links}>
        <SvgIcons.LinkIcon />
        <TextInput
          value={socialLinks.link}
          onChangeText={text => {
            console.log(text);
            socialLinks.link = text;
            setSocialLinks({...socialLinks});
          }}
          style={styles.inputSection}></TextInput>
      </View>
    </>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: wp(2),
  },
  inputSection: {
    borderBottomWidth: 0.2,
    borderColor: colors.black30,
    width: wp(75),
  },
});
