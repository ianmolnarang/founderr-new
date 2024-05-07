import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import {colors, fonts} from '../../assests/Theme/Color';
import { useRoute } from '@react-navigation/native';
import ChapterCard from './ChapterCard';

const NewsChapters = () => {
  const route = useRoute();
  const {company, chapters , uniqueCompanyId} = route.params ;
  console.log("companyId", uniqueCompanyId)


  return (

    <SafeAreaView
      style={{flex: 1, marginVertical: hp(2), marginHorizontal: wp(2),  paddingTop: 0, margin: 0}}>
         <View style={styles.topBackground}>
              <View style={styles.topNameContainer}>
        <SvgIcons.BackIcon />
        <Text style={styles.nameText}>&nbsp;&nbsp; Education</Text>
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.nameText}>Company Name: {company}</Text>
      </View>

      <View>
        <Text
          style={{
            color: colors.black30,
            fontFamily: fonts.poppinsRegular,
            fontSize: normalize(16),
            marginTop: -18,
            marginLeft:20
          }}>
          Chapters: {chapters}
        </Text>
      </View>
      </View>

      <ScrollView style={styles.cardContainer}>
      <ChapterCard companyId={uniqueCompanyId} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsChapters;

const styles = StyleSheet.create({
  topBackground:{
    backgroundColor:"#EAEAEA",
    borderBottomEndRadius: 50 ,
    borderBottomStartRadius: 50,
    margin: 0,
    height: 160,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 1,

  },
  shadowOpacity: 0.20,
  shadowRadius: 2,
  elevation: 2,
  },

  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    marginVertical: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20
  },
  nameText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(18),
    color: colors.charcoal,
  },
  cardContainer: {
    marginTop: hp(2),
  },
});
