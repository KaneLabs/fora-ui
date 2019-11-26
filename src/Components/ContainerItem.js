import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';


export const ContainerItem = ({ children, center = false }) => {
  return (
    <View style={[styles.containerItem, center && styles.center]}>
      {children}
    </View>
  );
};

const styles = EStyleSheet.create({
  containerItem: {
    paddingHorizontal: '$unit * 1',
    paddingVertical: '$unit * 0.75',
  },
  center: {
    alignItems: 'center',
  },
});
