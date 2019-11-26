import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'react-native';

export const Title = ({ text, children, style }) => {
  return <Text style={[styles.title, style]}>{text || children}</Text>;
};

const styles = EStyleSheet.create({
  title: {
    fontWeight: '100',
    fontSize: 44,
    color: 'rgba(255,255,255,0.67)',
  },
});
