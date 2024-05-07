import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {RouteName} from '../../utils/constant';
import {useNavigation} from '@react-navigation/native';

const EachNews = ({news}) => {
  const navigation = useNavigation();

  console.log(news.urlToImage);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RouteName.newsPage, {
          news: news,
        })
      }
      style={{
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        paddingBottom: hp(2),
        marginTop: hp(2),
      }}>
      <View style={styles.imageSection}>
        <Image
          style={{width: wp(30), height: hp(10)}}
          source={{uri: news.urlToImage}}></Image>
      </View>

      <View style={{width: wp(60)}}>
        <View style={styles.textSection}>
          {/* <Image
            source={require('../../assests/Images/demoCompany.png')}></Image> */}

          <Text style={styles.smallText}>{news.author}</Text>
          <Text style={styles.smallText}>Tech</Text>
        </View>

        {/* main headline */}
        <View>
          <Text style={styles.mainHeadline}>{news.title}</Text>
        </View>

        {/* date */}
        <View>
          <Text style={styles.date}>{news.publishedAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EachNews;

const styles = StyleSheet.create({
  imageSection: {
    width: wp(30),
    // backgroundColor: 'green',
    marginRight: wp(3),
  },
  textSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(12),
    marginHorizontal: wp(2),
    color: colors.black30,
  },
  mainHeadline: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(14),
    // marginHorizontal: wp(2),
    color: colors.charcoal,
  },
  date: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(10),

    color: colors.black30,
  },
});
