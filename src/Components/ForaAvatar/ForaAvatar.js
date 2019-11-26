import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForaLogo from '../ForaLogo';

import { background1, borderColor } from 'themes';

const SIZE = 44;

const avatarStyle = {
  overflow: 'hidden',
  backgroundColor: background1,
  alignItems: 'center',
  justifyContent: 'center',
  height: SIZE, width: SIZE,
  borderRadius: SIZE /2,
  borderColor,
  borderWidth: StyleSheet.hairlineWidth,
}

const ForaAvatar = () => {
  return (
    <View style={avatarStyle}>
      <ForaLogo size={32} />
    </View>
  )
}

export default ForaAvatar;
