import React from 'react';
import { Text, Platform, } from 'react-native';

import {
  primaryColor,
  primaryTextColor,
  secondaryTextColor,
  alternateTextColor,
  unit,
} from 'themes';

const styles = {
  h1: {
    fontSize: 40,
    fontWeight: '100',
    letterSpacing: -1.5,
    color: primaryTextColor,
  },
  h2: {
    fontSize: 34,
    fontWeight: '100',
    letterSpacing: -0.5,
    color: primaryTextColor,
  },
  h3: {
    fontSize: 28,
    letterSpacing: 0,
    color: primaryTextColor,
    fontWeight: '300',
  },
  h4: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: primaryTextColor,
    fontWeight: '300',
  },
  h5: {
    fontSize: 20,
    letterSpacing: 0.1,
    color: primaryTextColor,
    fontWeight: '300',
  },
  h6: {
    fontSize: 18,
    letterSpacing: 0.15,
    color: primaryTextColor,
    fontWeight: '500',
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
  title3: {
    fontSize: 18,
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
    fontSize: 13,
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
};

const Typography = ({
  children,
  variant = 'body2',
  numberOfLines = null,
  style = {},
  gutterBottom = 0,
}) => {

  const overrideable = Object.assign(style, { marginBottom: gutterBottom && unit })

  const overridedStyle = Object.assign({}, styles[variant], overrideable);

  return (
    <Text
      style={overridedStyle}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default Typography;
