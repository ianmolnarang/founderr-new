import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors, fonts } from '../../assests/Theme/Color';
import { hp, normalize, wp } from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import { RouteName } from '../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ChapterCard = ({ companyId }   ) => {
  const navigation = useNavigation();
  const [chapters, setChapters] = useState([]);
  console.log({companyId})

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    try {
      const response = await axios.get('http://192.168.164.105:4000/api/chapters/1');
      setChapters(response.data.data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  return (
    <>
      {chapters.map((chapter, index) => (
        <TouchableOpacity
          key={chapter._id}
          onPress={() => navigation.navigate(RouteName.eachChapterNews , {chapterNo : chapter.chapterNumber , chapterHeading: chapter.chapterName , companyId})}
          style={styles.cardContainer}>
          <View style={{ marginLeft: wp(2) }}>
            <Text style={styles.chapterText}>Chapter {chapter.chapterNumber}</Text>
            <Text style={styles.cardTitle}>{chapter.chapterName}</Text>
          </View>
          <SvgIcons.NextButtonIcon />
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ChapterCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
    padding: wp(1),
    height: hp(10),
    borderColor: "#EAEAEA",
    borderBottomWidth: 5,
    borderRadius: 10,
  },
  chapterText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(14),
    color: colors.black30,
  },
  cardTitle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(18),
    color: colors.charcoal,
  },
  dateText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: normalize(10),
    color: colors.black30,
  },
});


