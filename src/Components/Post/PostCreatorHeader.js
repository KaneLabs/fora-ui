import React from 'react';
import { StyleSheet, TouchableHighlight, View, } from 'react-native';
// import { withRouter } from 'react-router';

import Typography from '../Typography';
import Avatar from '../Avatar';
import StackGoldAnimation from '../StackGoldAnimation';

import { unit, borderColor, borderRadius, foraGreenOpaque, } from 'themes';

import { type } from '../device';

import moment from '../moment';

const styles = {
  root: {
      width: '100%', flexDirection: 'row',
      alignItems: 'center', justifyContent: 'space-between',
      borderColor,
      // borderBottomWidth: 0,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderLeftWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
      borderRightWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
  },
  rootWithMedia: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
  },
  avatarButton: {
    padding: type === 'desktop' ? unit * 1.5 : unit,
    // borderRadius: 1,
    // borderColor,
  },
  headerMiddle: {
    flex: 1,
    // width: '100%',
    paddingTop: type === 'desktop' ? unit * 1.5 : unit,
    paddingLeft: unit,
    paddingRight: unit,
    // paddingTop: unit * 1.5,
    // // paddingLeft: unit * 1.5,
    // paddingRight: unit * 1.5,
  },
  postHeaderBodyLower: {
    flexDirection: 'row',
    marginBottom: unit,
    width: '100%',
  },
  title: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  }
};

const PostCreatorHeader = ({ hasMedia, history, handle, display, avatarUrl, createdAt, text, amount, title, openProfile, }) => {
  const rootWithMedia = hasMedia ? styles.rootWithMedia : {};
  const rootStyle = Object.assign({}, styles.root, rootWithMedia);

  console.log('openProfile', openProfile)

  return (
    <View style={rootStyle}>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <TouchableHighlight style={styles.avatarButton} onPress={() => openProfile(handle)}>
          <View>
            <Avatar source={{ uri: avatarUrl }} />
          </View>
        </TouchableHighlight>

        <View style={styles.headerMiddle}>
          <View style={styles.title}>
            <Typography variant={type === 'desktop' ? 'subtitle2' : 'subtitle2'}>
              {`@${handle} `}

            </Typography>

            <Typography variant='caption' style={{ paddingLeft: unit / 4, paddingRight: unit / 4}}>
              {`• ${moment(parseInt(createdAt)).fromNow()}`}
            </Typography>
          </View>

          {title ? (
            <View style={styles.subtitle}>
              {title}
            </View>
          ) : null}
        </View>

        <View style={{ padding: unit, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='caption' style={{ color: foraGreenOpaque }}>${amount}</Typography>
        </View>
      </View>
    </View>
  );
};

const GoldAmount = () => {
  return (
    <View></View>
  )
}

export default PostCreatorHeader;
