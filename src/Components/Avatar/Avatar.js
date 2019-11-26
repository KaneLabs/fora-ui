import React from 'react';
import propTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

import { borderColor, canvasColor, unit, DEFAULT_AVATAR_URL, } from 'themes';

import { height, width, type, } from '../device';

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: borderColor,
    borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    // padding: unit,
    overflow: 'hidden',
  },
});

const defaultAvatarSize = type === 'desktop' ? unit*6 : unit*4.5

const Avatar = ({ uri, size = defaultAvatarSize }) => {
  const source = uri ? { uri } : require('../images/fora-logo-white.png');

  const containerStyle = [styles.avatarContainer, {
    height: size,
    width: size,
    borderRadius: size / 2,
  }];

  const avatarStyle = ({
    height: size,
    width: size,
  });

  return (
    <View style={containerStyle}>
      <Image source={source} style={avatarStyle} />
    </View>
  );
};

Avatar.propTypes = {
  uri: propTypes.string,
};

// Avatar.defaultProps = {
//   uri: DEFAULT_AVATAR_URL,
// };

export default Avatar;
