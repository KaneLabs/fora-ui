import React from 'react';
import propTypes from 'prop-types';

import { StyleSheet, } from 'react-native';

import Avatar from './Avatar'
import Image from './Image'
import View from './View'
import Typography from './Typography'

import ProfileHeaderImage from './ProfileHeaderImage';

import { appBackgroundColor, canvasColor, unit, NAV_HEIGHT, FEED_WIDTH } from 'themes';

import { height, width, type, } from './device';

const aspectRatio = (({ type }) => {
  if (type === 'desktop') {
    return (6 / 1);
  }

  return (3 / 1);
})({ type });

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: appBackgroundColor,
    alignItems: 'center',
    // maxWidth: FEED_WIDTH,
    // paddingTop: unit * 3,
    // paddingBottom: unit * 3,
    // justifyContent: 'center',
  },
});


const ProfileHeader = ({ avatarUrl, display, handle, }) => {
  return (
      <View style={styles.header}>
        <View style={{ padding: unit*3.5, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
          <Avatar
            style={{ borderRadius: 180/2, }}
            uri={avatarUrl}
            size={180}
          />
        </View>

        <View style={{ paddingTop: unit*2, paddingBottom: unit*2 }}>
          <View style={{ paddingTop: unit / 2, paddingBottom: unit, }}>
            <Typography variant='h6' gutterBottom>
              {display || handle}
            </Typography>

            <Typography variant='caption'>
              {`@${handle}`}
            </Typography>
          </View>
        </View>
      </View>
  );
};

ProfileHeader.propTypes = {
  avatarUrl: propTypes.string.isRequired,
  display: propTypes.string.isRequired,
  handle: propTypes.string.isRequired,
};

export default ProfileHeader
