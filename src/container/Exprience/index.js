import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IconHeader from '../../components/Header';
import SvgIcons from '../../assests/svgs/svgIcons';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {STRINGS} from '../../utils/strings';
import {commonStyle} from '../../utils/commonStyle';
import {colors, fonts} from '../../assests/Theme/Color';
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';
import RoundButton from '../../components/RoundButton';
import {RouteName} from '../../utils/constant';

const Exprience = ({navigation}) => {
  const [cmpName, setCmpName] = useState('');
  const [industry, setIndustry] = useState('');
  const [designation, setDesignation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [workMode, setWorkMode] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconHeader
        icon={<SvgIcons.SuitCaseIcon height={wp(10)} width={wp(10)} />}
        iconTitle={STRINGS.JOB_EXPRIENCE}
      />
      <View style={commonStyle.headerMainView}>
        <Input
          value={cmpName}
          placeholder={STRINGS.COMPANY_NAME}
          onChangeText={setCmpName}
        />

        <Input
          value={industry}
          placeholder={STRINGS.INDUSTRY}
          onChangeText={setIndustry}
        />

        <Input
          value={designation}
          placeholder={STRINGS.DESIGNATION}
          onChangeText={setDesignation}
        />
        <Input
          value={designation}
          placeholder={STRINGS.START_DATE}
          onChangeText={setStartDate}
          isRadio
          radioValue={isWorking}
          radioTitle={STRINGS.CURRENTLY_WORKING}
          onRadioPress={() => setIsWorking(!isWorking)}
        />

        <Input
          value={designation}
          placeholder={STRINGS.END_DATE}
          onChangeText={setEndDate}
        />
        <View style={[commonStyle.rowCenter, {marginTop: hp(1)}]}>
          <RadioButton
            radioTitle={STRINGS.VIRTUALLY_WORKING}
            onRadioPress={() => setWorkMode(STRINGS.VIRTUALLY_WORKING)}
            radioValue={workMode == STRINGS.VIRTUALLY_WORKING ? true : false}
          />

          <RadioButton
            radioTitle={STRINGS.WORK_HOME}
            onRadioPress={() => setWorkMode(STRINGS.WORK_HOME)}
            radioValue={workMode == STRINGS.WORK_HOME ? true : false}
          />

          <RadioButton
            radioTitle={STRINGS.HYBRID_MODE}
            onRadioPress={() => setWorkMode(STRINGS.HYBRID_MODE)}
            radioValue={workMode == STRINGS.HYBRID_MODE ? true : false}
          />
        </View>
      </View>

      <RoundButton onPress={() => navigation.navigate(RouteName.education)} />
    </SafeAreaView>
  );
};

export default Exprience;

const styles = StyleSheet.create({});
