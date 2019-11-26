import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

export const BodyText = ({
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
  body: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '$textColor.primary',
  },
  body2: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.25,
    color: '$textColor.primary',
  },
  gutterBottom: { marginBottom: 12 },
});
