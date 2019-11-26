import React from 'react';
import propTypes from 'prop-types';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Avatar = ({ size = 36, source, style = {}, ...rest }) => {
  const sizeStyles = {
    height: size,
    width: size,
    borderRadius: size / 2,
  };

  return (
    <View style={[styles.avatar, sizeStyles, style]} {...rest}>
      <Image source={source} style={sizeStyles} />
    </View>
  );
};

Avatar.propTypes = {
  size: propTypes.number,
  source: propTypes.shape({ uri: propTypes.string.isRequired }),
};

Avatar.defaultProps = {
  size: 36,
  source: null,
};

const styles = EStyleSheet.create({
  avatar: {
    overflow: 'hidden',
    backgroundColor: '$canvas2',
  },
});
