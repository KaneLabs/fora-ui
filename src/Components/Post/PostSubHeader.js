import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import { graphql } from 'react-apollo';
import { ME } from 'queries';

import { withRouter } from 'react-router';

import Typography from '../Typography';
// import Avatar from './Avatar';

import { unit, borderColor, } from 'themes';

import { type } from '../device';

import moment from '../moment';

const styles = {
  // avatarHeader: {
  //   padding: type === 'desktop' ? unit * 2 : unit,
  //   borderRadius: 1,
  //   borderColor,
  // },
  handleContainer: {
    flex: 1,
    width: '100%',
    // paddingTop: type === 'desktop' ? unit * 2 : unit,
    // paddingLeft: 0,
    // paddingRight: 0,
    // paddingTop: unit * 1.5,
    // // paddingLeft: unit * 1.5,
    // paddingRight: unit * 1.5,
  },
  // postHeaderBodyLower: {
  //   flexDirection: 'row',
  //   marginBottom: unit,
  //   width: '100%',
  // },
};

const PostSubHeader = withRouter(({ handle, createdAt, }) => {
  console.log('createdAt', createdAt);
  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <View style={styles.handleContainer}>
        <Typography variant='h6' gutterBottom>{handle}</Typography>
      </View>

      <Typography variant='caption'>
      {moment(parseInt(createdAt)).fromNow()}
      </Typography>
    </View>
  );
});

export default graphql(ME)(PostSubHeader);
