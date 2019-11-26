import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';

const propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
  clear: PropTypes.bool,
};

const defaultProps = {
  children: null,
  center: false,
  clear: false,
};

export const Container = ({children, center, style, clear, absolute }) => {
  let nextStyle = clear ? styles.containerClear : styles.container;

  if (center) {
    nextStyle = { ...nextStyle, ...styles.center };
  }

  if (style) {
    nextStyle = { ...nextStyle, ...style };
  }
  if (absolute) {
    nextStyle = { ...nextStyle, position: 'absolute' };
  }

  return <View style={nextStyle}>{children}</View>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
