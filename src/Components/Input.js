import React, { useState } from 'react';
import propTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Input = ({ style, ...props }) => {
  return (
    <TextInput
      placeholder="Search"
      style={[styles.searchInput, style]}
      {...props}
    />
  );
};

const styles = EStyleSheet.create({
  searchInput: {
    width: '100%',
    // borderRadius: '$unit / 2',
    // borderWidth: EStyleSheet.hairlineWidth,
    // borderColor: '$borderColor',
    paddingLeft: '$unit * 0.75',
    paddingRight: '$unit * 0.75',
    paddingTop: '$unit * 0.5',
    paddingBottom: '$unit * 0.5',
    // backgroundColor: '$textColor.hint',
    fontSize: '$unit',
    color: '$textColor.primary',
  },
});

Input.propTypes = {
};
