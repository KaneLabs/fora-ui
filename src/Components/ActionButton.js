import React from 'react';
import { TouchableHighlight, View, } from 'react-native';

import { background2Opaque, borderColor, unit, } from 'themes';

import { height, width } from './device';

const borderWidth = unit/4;

const ACTION_BUTTON_SIZE = unit * unit;

const styles = {
  actionButton: {
    height: ACTION_BUTTON_SIZE,
    width: ACTION_BUTTON_SIZE,
    borderRadius: ACTION_BUTTON_SIZE / 2,
    borderWidth,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    // left: (width / 2) - (ACTION_BUTTON_SIZE / 2),
    // right: (width / 2) - (ACTION_BUTTON_SIZE / 2),
    right: unit*3.5,
    bottom: unit*3.5
    // bottom: ACTION_BUTTON_SIZE * 1.5,
  },
};

export const ActionButton = (props) => {
  const style = {
    backgroundColor: background2Opaque,
    borderColor: props.color || borderColor,
  };

  return (
    <TouchableHighlight {...props} style={[styles.actionButton, style, props.style]}>
      {props.children || <View />}
    </TouchableHighlight>
  )
};
