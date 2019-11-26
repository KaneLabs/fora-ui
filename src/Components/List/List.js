import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const List = ({ children = null, noPadding = false }) => {
  return (
    <View style={[styles.list, noPadding && styles.noPadding]}>{children}</View>
  );
};

List.propTypes = {
  children: propTypes.node,
  noPadding: propTypes.bool,
};

List.defaultProps = {
  children: null,
  noPadding: false,
};

const styles = EStyleSheet.create({
  list: {
    paddingVertical: '$unit',
  },
  noPadding: { paddingVertical: 0 },
});
