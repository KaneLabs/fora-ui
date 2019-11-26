import React from 'react';
import { Text, StyleSheet, Platform, } from 'react-native';

import {
  primaryColor,
  primaryTextColor,
  secondaryTextColor,
  alternateTextColor,
  unit,
} from 'themes';

const styles = StyleSheet.create({
  h1: {
    fontSize: 72,
    fontWeight: '100',
    letterSpacing: -1.5,
    color: secondaryTextColor,
  },
  h2: {
    fontSize: 54,
    fontWeight: '100',
    letterSpacing: -0.5,
    color: secondaryTextColor,
  },
  h3: {
    fontSize: 40,
    letterSpacing: 0,
    color: secondaryTextColor,
    fontWeight: '200',
  },
  h4: {
    fontSize: 34,
    letterSpacing: 0.25,
    color: secondaryTextColor,
    fontWeight: '200',
  },
  h5: {
    fontSize: 28,
    letterSpacing: 0,
    color: secondaryTextColor,
    fontWeight: '200',
  },
  h6: {
    fontSize: 24,
    letterSpacing: 0.15,
    color: secondaryTextColor,
    fontWeight: '200',
  },
  title1: {
    fontSize: 24,
    letterSpacing: 0.15,
    color: primaryTextColor,
    fontWeight: '200',
  },
  title2: {
    fontSize: 20,
    letterSpacing: 0.1,
    color: primaryTextColor,
    fontWeight: '200',
  },
  subtitle1: {
    fontSize: 16,
    letterSpacing: 0.15,
    color: primaryTextColor,
    fontWeight: '500',
  },
  subtitle2: {
    fontSize: 14,
    letterSpacing: 0.1,
    color: primaryTextColor,
    fontWeight: '500',
  },
  body1: {
    fontSize: 16,
    color: primaryTextColor,
    letterSpacing: 0.5,
    fontWeight: '300',
  },
  body2: {
    fontSize: 14,
    color: primaryTextColor,
    letterSpacing: 0.25,
    fontWeight: '300',
  },
  button: {
    fontSize: 16,
    color: primaryTextColor,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 16,
    color: '#e53935',
  },
  desc: {
    fontSize: 15,
    color: secondaryTextColor,
  },
  small: {
    fontSize: 12,
    color: secondaryTextColor,
  },
  caption: {
    fontSize: 12,
    color: secondaryTextColor,
  },
  tiny: {
    fontSize: 10,
    color: secondaryTextColor,
  },
  overline: {
    fontSize: 10,
    fontWeight: 'bold',
    color: secondaryTextColor,
  },
});

const Typography = ({
  children,
  variant = 'body2',
  numberOfLines = null,
  style = {},
  gutterBottom,
  multiline = false,
}) => {

  return (
    <Text
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten([styles[variant], style])}
      multiline={multiline.toString()}
    >
      {children}
    </Text>
  );
};

export default Typography;
