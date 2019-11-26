import React from 'react';
import propTypes from 'prop-types';

import {Button, Typography} from 'ui';
// import Typography from './Typography';

import { StyleSheet, } from 'react-native';

import { unit } from 'themes';


const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: unit,
    height: 44, // minimum recommended button size for ux best practices
    flex: 1,
  },
})

const Tab = (props) => {
  return (
    <Button {...props} style={[styles.tab, props.style]}>
      {props.children}
    </Button>
  );
};

Tab.propTypes = {
  children: propTypes.node,
  onPress: propTypes.func.isRequired,
}

Tab.defaultProps = {
  onPress: () => alert('onPress required'),
}

export default Tab
