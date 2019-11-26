import React from 'react';
import { StyleSheet, View } from 'react-native';

import { background2Opaque, unit, borderRadius, borderColor } from 'themes';

const defaultStyle = {
  borderRadius,
  borderColor,
  borderWidth: StyleSheet.hairlineWidth,
  overflow: 'hidden',
  // elevation on all components
  shadowColor: '#000000',
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowRadius: unit,
  shadowOpacity: 0.7,
}

const Paper = ({ children, style = {}, backgroundColor = background2Opaque, padding, row, }) => {

  const overrideableStyle = {
    backgroundColor,
    flexDirection: row || 'column',
    padding
  }

  return <View style={Object.assign({}, defaultStyle, overrideableStyle, style)}>{children}</View>;
};

export default Paper;
