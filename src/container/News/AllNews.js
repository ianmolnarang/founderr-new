import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';

import {colors, fonts} from '../../assests/Theme/Color';
import EachNews from './EachNews';
import {getFacilities} from '../../api/News';

const AllNews = ({}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fn();
  }, []);

  const fn = async () => {
    setLoading(true);
    const response = await getFacilities();
    if (response.status) {
      setNews(response.articles);
      console.log(response.articles);
      setLoading(false);
    }
  };
  console.log(news);
  return (
    <View style={{marginVertical: hp(2) , top:-hp(5)}}>
      <View style={styles.topButtonContainer}>
        <Text>News</Text>
      </View>

      {/* each news */}
      {loading ? (
        <View
          style={{
            width: wp(90),
            height: hp(50),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          {news.map(news => (
            <EachNews loading={loading} setLoading={setLoading} news={news} />
          ))}

          {/* <EachNews />
        <EachNews />
        <EachNews />
        <EachNews />
        <EachNews /> */}
          {/* <EachNews /> */}
        </ScrollView>
      )}
    </View>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    height: hp(4),
  },
});
