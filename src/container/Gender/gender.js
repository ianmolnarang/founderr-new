import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import SvgIcons from '../../assests/svgs/svgIcons';
import {colors, fonts} from '../../assests/Theme/Color';
import styles from './styles';
import {genderData} from '../../utils/data';
import {RouteName} from '../../utils/constant';
import IconHeader from '../../components/Header';
import {STRINGS} from '../../utils/strings';
import RoundButton from '../../components/RoundButton';

const Gender = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconHeader
        icon={<SvgIcons.UserIcon width={wp(6)} height={wp(6)} />}
        iconTitle={STRINGS.WHICH_GENDER}
      />
      <View style={styles.headerMainView}>
        <View style={styles.subContainer}>
          {genderData?.map((item, index) => {
            return (
              <>
                <TouchableOpacity key={index} style={{paddingVertical: hp(1)}}>
                  <Text style={styles.titleText}>{item.title}</Text>
                </TouchableOpacity>
                <View style={styles.borderView} />
              </>
            );
          })}
        </View>
      </View>

      <RoundButton onPress={() => navigation.navigate(RouteName.location)} />
    </SafeAreaView>
  );
};

export default Gender;
