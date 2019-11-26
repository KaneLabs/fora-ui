import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Divider = ({ style, ...props }) => {
  return <View style={[styles.divider, style]} {...props} />;
};

Divider.propTypes = {
  style: PropTypes.shape({}),
};

Divider.defaultProps = {
  style: {},
};

const styles = EStyleSheet.create({
  divider: {
    height: EStyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: '$textColor.secondary',
  },
});
