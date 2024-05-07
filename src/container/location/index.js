import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SvgIcons from '../../assests/svgs/svgIcons';
import {styles} from './styles';
import {hp, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import IconHeader from '../../components/Header';
import {STRINGS} from '../../utils/strings';
import RoundButton from '../../components/RoundButton';
import {RouteName} from '../../utils/constant';

const Location = ({navigation}) => {
  const [location, setLocation] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconHeader
        icon={<SvgIcons.LocationIcon height={wp(10)} width={wp(10)} />}
        iconTitle={STRINGS.WHERE_LIVE}
      />
      <View style={styles.headerMainView}>
        <View
          style={{
            marginVertical: hp(2),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{position: 'absolute', left: wp(1)}}>
            <SvgIcons.SearchIcon />
          </View>
          <TextInput
            placeholder="Type location here"
            placeholderTextColor={colors.placeholder}
            style={{
              borderBottomColor: colors.black50,
              borderBottomWidth: 1,
              width: '100%',
              paddingVertical: hp(1.5),
              paddingLeft: wp(10),
              fontFamily: fonts.poppinsLightItalic,
            }}
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>
      <RoundButton onPress={() => navigation.navigate(RouteName.exprience)} />
    </SafeAreaView>
  );
};

export default Location;
