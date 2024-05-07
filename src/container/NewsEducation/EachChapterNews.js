import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { hp, normalize, wp } from '../../utils/responsiveScreen';
import { colors, fonts } from '../../assests/Theme/Color';
import SvgIcons from '../../assests/svgs/svgIcons';

const EachChapterNews = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { chapterNo, chapterHeading, companyId } = route.params;
  console.log("here" , chapterNo, companyId ) ;
  const [chapterContent, setChapterContent] = useState('');

  useEffect(() => {
    const fetchChapterContent = async () => {
      try {
        const response = await fetch(`http://192.168.164.105:4000/api/getChapterContent?chapterNumber=1&companyId=1`);
        const data = await response.json();
        if (data.status) {
          setChapterContent(data.data.contentOfChapter);
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchChapterContent();
  }, [chapterNo, companyId]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topmostContainer}>
        <View style={styles.topNameContainer}>
          <SvgIcons.BackIcon />
          <Text style={styles.topHeading}>&nbsp;&nbsp; Education</Text>
        </View>
        <Text style={styles.nameText}>{chapterHeading}</Text>
        <View>
          <Text
            style={{
              color: colors.black30,
              fontFamily: fonts.poppinsRegular,
              fontSize: normalize(16),
              marginLeft: 20
            }}>
            Chapter: {chapterNo}
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.newsText}>{chapterContent}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: hp(2),
    marginHorizontal: wp(6),
  },
  topmostContainer: {
    backgroundColor: "#EAEAEA",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    height: 160,
    width: 400,
    marginLeft: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: hp(3),
  },
  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  topHeading: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(18),
    color: colors.charcoal,
  },
  nameText: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
    fontSize: normalize(20),
    marginTop: hp(0.5),
    marginLeft: 20,
    marginTop: 10
  },
  newsText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.charcoal,
    marginTop: 20,
  },
});

export default EachChapterNews;
