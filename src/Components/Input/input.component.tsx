import React, {ReactElement} from 'react';
import {SvgCss} from 'react-native-svg';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import {useSpring, animated} from 'react-spring';

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
  const {label, value, searchable, errorMessage} = props;
  const {
    wrapper,
    innerWrapper,
    inputStyle,
    errorInputStyle,
    labelStyle,
    searchIconStyle,
    errorIconStyle,
    errorMessageWrapperStyle,
    errorMessageStyle,
  } = styles;

  const props = useSpring({opacity: 1, from: {opacity: 0}});
z
  return (
    <View style={wrapper}>
      <Text style={labelStyle}>{label}</Text>
      <View style={[innerWrapper, errorMessage && errorInputStyle]}>
        {searchable && <SvgCss xml={icons.search} style={searchIconStyle} />}
        <TextInput {...props} style={inputStyle} value={value} />
      </View>
      {errorMessage ? (
        <animated.View style={[errorMessageWrapperStyle, props]}>
          <SvgCss xml={icons.errorIcon} style={errorIconStyle} />
          <Text style={errorMessageStyle}>{errorMessage}</Text>
        </animated.View>
      ) : null}
    </View>
  );
};

export default Input;
