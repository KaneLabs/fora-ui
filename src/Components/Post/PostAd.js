import React from 'react';
import { Platform } from 'react-native';

import Ad from './Ad';

import { type } from '../device';

const PostAd = () => {
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <Ad />
  )
}

export default PostAd;
