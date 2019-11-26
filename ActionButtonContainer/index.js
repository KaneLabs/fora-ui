import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

export const ActionButtonContainer = ({children}) => {
  return (
    <View style={styles.actionButtonContainer}>{children}</View>
  );
};

ActionButtonContainer.propTypes = {
  children: PropTypes.node,
};

ActionButtonContainer.defaultProps = {
  children: null,
};
