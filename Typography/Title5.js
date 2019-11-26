import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

export const Title5 = ({ text, children, style = null, gutterBottom }) => {
  return <Text style={[styles.title, style, gutterBottom && styles.gutterBottom]}>{text || children}</Text>;
};

const styles = EStyleSheet.create({
  title: {
    fontWeight: '200',
    fontSize: 23,
    lineHeight: 23,
    marginBottom: 2,
    color: 'rgba(255,255,255,0.67)',
  },
  gutterBottom: {
    marginBottom: 4,
  },
});
