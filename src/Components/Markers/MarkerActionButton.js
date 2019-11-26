import React from 'react';
import { Button } from 'ui';
// import EStyleSheet from 'react-native-extended-stylesheet';

export const MarkerActionButton = ({ onPress, text = 'JOIN BUFFPASS' }) => {
  return <Button onPress={onPress} text={text} />;
};
