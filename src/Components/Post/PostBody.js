import React from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from '../Typography';
import PostButtons from './PostButtons';

import { unit, canvas3Opaque, borderRadius, borderColor, } from 'themes';
import { type } from '../device';

const styles = {
  root: {
    // paddingTop: 0,
    // paddingLeft: unit * unit,
    // paddingRight: unit*2,
    borderColor,
    borderRadius,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
    borderRightWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
  },
  body: {
    // paddingTop: 0,
    padding: type === 'desktop' ? unit*2 : unit,
    // backgroundColor: canvas3Opaque,
    // borderRadius,
  },
};

const PostBody = ({ text = '', postId, }) => {
  const hasText = text.length > 0;

  return (
    <View style={styles.root}>
      {hasText && (
        <View style={styles.body}>
          <Typography variant='body1'>{text}</Typography>
        </View>
      )}

      <PostButtons postId={postId} />
    </View>
  )
}

export default PostBody;
