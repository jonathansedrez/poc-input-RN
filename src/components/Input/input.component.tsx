import React, {ReactElement} from 'react';
import {SvgCss} from 'react-native-svg';
import {Text, TextInput, View, TextInputProps} from 'react-native';

import styles from './styles';
import icons from '../../assets/icons';

export interface InputProps extends TextInputProps {
  value: string;
  label?: string;
  disabled?: boolean;
  searchable?: boolean;
  errorMessage?: string;
}

export interface Masks {
  [key: string]: string;
}

export const Input = (props: InputProps): ReactElement => {
  const {label, value, searchable, errorMessage, disabled} = props;
  const {
    wrapper,
    labelStyle,
    inputStyle,
    innerWrapper,
    disabledStyle,
    errorIconStyle,
    searchIconStyle,
    errorInputStyle,
    errorMessageStyle,
    errorMessageWrapperStyle,
  } = styles;

  return (
    <View style={wrapper}>
      <Text style={labelStyle}>{label}</Text>
      <View
        style={[
          innerWrapper,
          errorMessage && errorInputStyle,
          disabled && disabledStyle,
        ]}>
        {searchable && <SvgCss xml={icons.search} style={searchIconStyle} />}
        <TextInput {...props} style={inputStyle} value={value} />
      </View>
      {errorMessage ? (
        <View style={[errorMessageWrapperStyle, props]}>
          <SvgCss xml={icons.errorIcon} style={errorIconStyle} />
          <Text style={errorMessageStyle}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;
