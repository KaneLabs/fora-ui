import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

export const Caption = ({ text = null, style = {}, children, gutterBottom }) => {
  return (
    <Text style={[styles.caption, style, gutterBottom && styles.gutterBottom]}>
      {text || children}
    </Text>
  );
};

const styles = EStyleSheet.create({
  caption: {
    color: '$textColor.secondary',
    fontSize: 12,
    lineHeight: 12,
  },
  gutterBottom: {
    marginBottom: '$unit / 2',
  },
});
