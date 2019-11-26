import React from 'react';
import propTypes from 'prop-types';

import { View } from 'ui';

import { StyleSheet, } from 'react-native';

import { canvas1 } from 'themes';


const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: canvas1,
  },
});

// <Tabs value={value} onChange={this.handleChange}>
//   <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" />
//   <Tab value="two" label="Item Two" />
//   <Tab value="three" label="Item Three" />
// </Tabs>

class Tabs extends React.Component {

  render() {
    const { children, style = {}, stretch = false, } = this.props;

    const overrideableStyles = {
      width: stretch ? '100%' : 'auto',
      justifyContent: stretch ? 'space-around' : 'flex-start',
    }

    return (
      <View style={[styles.tabs, style, overrideableStyles]}>
        {children}
      </View>
    );

  }
};

Tabs.propTypes = {
  children: propTypes.node.isRequired,
}

export default Tabs
