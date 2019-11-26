import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, } from 'react-native';

// import { appBackgroundColor, canvasColor, unit, NAV_HEIGHT, FEED_WIDTH } from 'themes';

import Image from './Image'
import View from './View'


import { height, width, type, } from './device';

const aspectRatio = (({ type }) => {
  if (type === 'desktop') {
    return (6 / 1);
  }

  return (3 / 1);
})({ type });

const styles = StyleSheet.create({
  fullWidthContainer: {
    width: '100%',
    height: (width / aspectRatio),
    flexDirection: 'row',
  },
  fullWidthImage: {
    flex: 1,
    width: null,
    height: null,
  },
});

const ProfileHeaderImage = ({ uri }) => {
  return (
    <View style={styles.fullWidthContainer}>
      <Image style={styles.fullWidthImage} source={{ uri }} aspectRatio={aspectRatio} />
    </View>
  );
};

export default ProfileHeaderImage
