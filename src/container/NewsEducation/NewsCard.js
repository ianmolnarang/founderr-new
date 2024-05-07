import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { hp, normalize, wp } from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import { colors, fonts } from '../../assests/Theme/Color';
import { RouteName } from '../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import NewsChapters from './NewsChapters';
import axios from 'axios'; // Import Axios

const NewsCard = ({}) => {
  const navigation = useNavigation();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("Starting fetching the companies");
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://192.168.164.105:4000/api/getAllCompanies');
      const companiesWithChapters = [];
      for (const company of response.data) {
        const count = await fetchChaptersCount(company.companyId);
        companiesWithChapters.push({
          ...company,
          count: count
        });
      }
      console.log("companiesWithChapters", companiesWithChapters)
      setCompanies(companiesWithChapters);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const fetchChaptersCount = async (companyId) => {
    try {
      const response = await axios.get(`http://192.168.164.105:4000/api/chapters/count/${companyId}`);
      console.log("fetchChaptersCount:", response.data);
      return response.data.data.count; // Return the count value
    } catch (error) {
      console.error('Error fetching chapters count:', error);
      return 0; // Return 0 if there's an error
    }
  }

  function findDate(timestamp) {

    const dateString = timestamp;
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <>
      {companies.map(company => (
        <TouchableOpacity
          key={company._id}
          onPress={() => navigation.navigate(RouteName.newsChapters, { company: company.companyName , chapters : company.count, uniqueCompanyId : company.companyId})}
          style={styles.cardContainer}>
          <View>
            <Image
              style={styles.imageContainer}
              source={require('../../assests/Images/demoBanner.png')}
            />
          </View>
          <View style={{ marginRight: wp(2), marginVertical: hp(3) }}>
            <Text style={styles.titleText}>{company.companyName}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.normalText}>{company.count} Chapters</Text>
              <Text style={styles.normalText}>&nbsp; E-Commerce</Text>
            </View>
            <Text style={styles.dateText}>&nbsp;{findDate(company.createdAt)}</Text>
          </View>

          <View>
            <SvgIcons.NextButtonIcon />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: wp(35),
    height: hp(10),
    marginRight: wp(2),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#B2B2B2',
    borderBottomWidth: 1,
  },
  titleText: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: normalize(16),
    color: colors.charcoal,
  },
  normalText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(12),
    color: colors.charcoal,
  },
  dateText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(12),
    color: colors.black30,
  },
});
