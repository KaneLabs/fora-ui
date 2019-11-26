import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

export const Subtitle = ({
  text = null,
  children = null,
  style = {},
  gutterBottom = null,
  type=1,
}) => {

  const textStyle = type === 1 ? styles.body : styles.body2;

  const overrideableStyle = [textStyle, gutterBottom && gutterBottom, style];
  const content = text || children;
  return <Text style={overrideableStyle}>{content}</Text>;
};

const styles = EStyleSheet.create({
  subtitle: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: '$textColor.primary',
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
    color: '$textColor.primary',
  },
  gutterBottom: { marginBottom: 12 },
});
