import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Row = ({ children, style, ...props }) => {
  if (!children) return null;

  return (
    <View style={[styles.row, style]} {...props}>
      {children}
    </View>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

Row.defaultProps = {
  children: null,
  style: {},
};

const styles = EStyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
