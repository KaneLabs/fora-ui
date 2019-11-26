import React from 'react';
import propTypes from 'prop-types';

import { View, TouchableHighlight } from 'react-native';

import { Typography } from 'ui';
import { unit } from 'themes';

const defaultStyle = {
  padding: unit,
};

const Button = ({
  children,
  onPress,
  title,
  backgroundColor,
  underlayColor,
  style = {},
}) => {
  const propsStyles = { backgroundColor };

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={[defaultStyle, style, propsStyles]}
      onPress={onPress}
    >
      <View>
        <Typography variant="button">{title || children}</Typography>
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: propTypes.func.isRequired,
  title: propTypes.string,
  children: propTypes.node
};

export default Button;
