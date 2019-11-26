import React from 'react';
import { View } from 'react-native';

import { background1, background2, foraPurple } from 'themes';
import { NAV_HEIGHT } from 'themes';

const Container = ({ children, centered, backgroundColor = background1, offsetNav, style={} }) => {

  const defaultStyle = {
    flex: 1,
    width: '100%',
    alignItems: centered ? 'center' : 'flex-start',
    justifyContent: centered ? 'center' : 'flex-start',
    backgroundColor,
    paddingTop: offsetNav ? NAV_HEIGHT : 0,
  };

  const overrideableStyle = Object.assign({}, defaultStyle, style);

  return <View style={overrideableStyle}>{children}</View>;
};

export default Container;
