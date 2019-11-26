import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import PostAd from './PostAd';
import PostCreatorHeader from './PostCreatorHeader';
import PostMedia from './PostMedia';
import PostBody from './PostBody';
// import { withRouter } from 'react-router';

import {
  canvas1, unit,
  borderColor,
  background2,
  FEED_WIDTH,
} from 'themes';
import type, { width } from '../device';

const styles = {
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowRadius: unit,
    shadowOpacity: 0.8,
    marginTop:  type === 'desktop' ? unit * 2 : 0,
    marginBottom:  type === 'desktop' ? unit * 2 : 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor,
    backgroundColor: background2,
    width: '100%',
    maxWidth: FEED_WIDTH,
  },
};

const Post = ({ creator, text, createdAt, media, monetize, id, openProfile, }) => {
  const hasMedia = media.length > 0;

  return (
      <View style={styles.card}>
        {hasMedia && <PostMedia media={media} />}

        <PostCreatorHeader
          {...creator}
          hasMedia={hasMedia}
          createdAt={createdAt}
          text={text}
          openProfile={openProfile}
        />

        <PostBody text={text} />
      </View>
  );
};

export default Post;
