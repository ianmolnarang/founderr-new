import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/responsiveScreen';
import {colors, fonts} from '../../assests/Theme/Color';
import SvgIcons from '../../assests/svgs/svgIcons';
import {STRINGS} from '../../utils/strings';
import {commonStyle} from '../../utils/commonStyle';

const Input = ({
  placeholder,
  value,
  onChangeText,
  style,
  icon,
  isRadio,
  radioTitle,
  radioValue,
  onRadioPress,
  editable,
  error,
  errorText,
  onIconPress,
  onInputPress,
  inputText,
}) => {
  return (
    <View style={{}}>
      <View style={commonStyle.rowCenter}>
        {onInputPress ? (
          <TouchableOpacity
            style={styles.textInput}
            activeOpacity={0.7}
            onPress={onInputPress}>
            <Text
              style={{
                fontFamily: fonts.poppinsRegular,
                fontSize: normalize(16),
                color: colors.black,
                paddingLeft: wp(1),
              }}>
              {inputText}
            </Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={[styles.textInput, style]}
            placeholder={placeholder}
            value={value}
            editable={editable}
            placeholderTextColor={colors.black}
            onChangeText={text => onChangeText(text)}
          />
        )}

        {icon && (
          <TouchableOpacity
            style={{right: wp(10), bottom: wp(1)}}
            activeOpacity={0.7}
            onPress={onIconPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            fontSize: normalize(14),
            fontFamily: fonts.poppinsMedium,
            color: colors.red,
            paddingLeft: wp(1),
          }}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: hp(1.5),
    width: '100%',
    paddingRight: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.black30,
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(16),
    marginBottom: hp(0.5),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  radioText: {paddingLeft: wp(2), fontFamily: fonts.poppinsLight},
});
