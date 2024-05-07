import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import {ScrollView} from 'native-base';

const NewsPage = ({route}) => {
  const {news} = route.params;
  console.log(news);
  return (
    <SafeAreaView
      style={{flex: 1, marginVertical: hp(2), marginHorizontal: wp(6)}}>
      <View style={styles.textSection}>
        <Image source={require('../../assests/Images/demoCompany.png')}></Image>

        <Text style={styles.smallText}>{news.author}</Text>
        <Text style={styles.smallText}>Tech</Text>
      </View>

      <View>
        <Text style={styles.mainHeadline}>{news.title} </Text>
      </View>

      <View style={styles.imageSection}>
        <Image
          style={{width: wp(90), height: hp(30)}}
          source={{uri: news.urlToImage}}></Image>
      </View>

      <ScrollView>
        <Text style={styles.newsText}>{news.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsPage;

const styles = StyleSheet.create({
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
    fontSize: normalize(18),
    // marginHorizontal: wp(2),
    color: colors.charcoal,
  },
  imageSection: {
    width: wp(90),
    height: hp(30),
    backgroundColor: 'green',
  },
  newsText: {
    textAlign: 'center',
    marginVertical: hp(4),
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    // marginHorizontal: wp(2),
    color: colors.charcoal,
  },
});

// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {hp, normalize, wp} from '../../utils/responsiveScreen';
// import {colors, fonts} from '../../assests/Theme/Color';
// import {RouteName} from '../../utils/constant';
// import {useNavigation} from '@react-navigation/native';

// const EachNews = () => {
//   const navigation = useNavigation();

//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate(RouteName.newsPage)}
//       style={{
//         flexDirection: 'row',
//         borderBottomWidth: 0.5,
//         paddingBottom: hp(2),
//         marginTop: hp(2),
//       }}>
//       <View style={styles.imageSection}>
//         <Image
//           style={{width: wp(30)}}
//           source={require('../../assests/Images/demoImg.png')}></Image>
//       </View>

//       <View style={{width: wp(60)}}>
//         <View style={styles.textSection}>
//           <Image
//             source={require('../../assests/Images/demoCompany.png')}></Image>

//           <Text style={styles.smallText}>Google India</Text>
//           <Text style={styles.smallText}>Tech</Text>
//         </View>

//         {/* main headline */}
//         <View>
//           <Text style={styles.mainHeadline}>
//             Google announced that they are going to introduce a AI
//           </Text>
//         </View>

//         {/* date */}
//         <View>
//           <Text style={styles.date}>June 28 2023</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default EachNews;

// const styles = StyleSheet.create({
//   imageSection: {
//     width: wp(30),
//     // backgroundColor: 'green',
//     marginRight: wp(3),
//   },
//   textSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   smallText: {
//     fontFamily: fonts.poppinsRegular,
//     fontSize: normalize(12),
//     marginHorizontal: wp(2),
//     color: colors.black30,
//   },
//   mainHeadline: {
//     fontFamily: fonts.poppinsSemiBold,
//     fontSize: normalize(14),
//     // marginHorizontal: wp(2),
//     color: colors.charcoal,
//   },
//   date: {
//     fontFamily: fonts.poppinsRegular,
//     fontSize: normalize(10),

//     color: colors.black30,
//   },
// });
