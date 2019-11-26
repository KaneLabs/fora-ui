import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { shadow } from 'material-bread';
import { View, Dimensions } from 'react-native';

export const Panel = ({ children }) => (
  <View style={styles.panel}>{children}</View>
);

const { width: deviceWidth } = Dimensions.get('window');

const padding = 16;
const panelWidth = deviceWidth - padding * 2;

const styles = EStyleSheet.create({
  panel: {
    top: 88,
    position: 'absolute',
    left: padding,
    borderRadius: '$borderRadius',
    overflow: 'hidden',
    backgroundColor: '$canvas',
    borderColor: '$borderColor',
    borderWidth: EStyleSheet.hairlineWidth,
    width: panelWidth,
    ...shadow(8),
  },
});
