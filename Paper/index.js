import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ripple } from 'material-bread';
import styles from './styles';

const flattenStyle = style => {
  if (Array.isArray(style)) {
    return [styles.paperRetroWave, ...style];
  }
  return [styles.paperRetroWave, style];
};

export const Paper = ({
  children,
  style = {},
  shadow = 4,
  onPress = null,
  ...rest
}) => {
  if (onPress) {
    return (
      <Ripple onPress={onPress} style={flattenStyle(style)} {...rest}>
        {children}
      </Ripple>
    );
  }

  return (
    <View style={flattenStyle(style)} {...rest}>
      {children}
    </View>
  );
};
