import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Paper } from 'ui';
import styles from './styles';

export class Banner extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    center: PropTypes.bool,
    open: PropTypes.bool,
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 56,
    children: null,
    center: false,
    open: false,
  };

  state = {
    open: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: nextProps.open,
      };
    }

    return {};
  }

  animate = (nextValue) => {
    console.log('nextValue', nextValue);
  };

  render() {
    const {open, children, height, style, ...props} = this.props;
    const openStyles = { height: open ? height : 0 };

    return (
      <View style={styles.container}>
        <Paper style={[styles.banner, style]} {...props}>
          {children}
        </Paper>
      </View>
    );
  }
}
