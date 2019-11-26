import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import TextField from '../TextField';

import { SUBNAV_HEIGHT, borderColor, unit, secondaryTextColor, background2Opaque, FEED_WIDTH, } from 'themes';

const styles = StyleSheet.create({
  root: {
    // height: SUBNAV_HEIGHT,
    justifyContent: 'center',
    width: '100%',
    marginLeft: unit * 2,
    marginRight: unit * 2,
    maxWidth: FEED_WIDTH,
  },
  searchInput: {
    width: '100%',
    borderRadius: unit,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor,
    color: secondaryTextColor,
    paddingLeft: unit,
    paddingRight: unit,
    paddingTop: unit / 2,
    paddingBottom: unit / 2,
    backgroundColor: background2Opaque,
  },
})

class SearchInput extends React.Component {
  state = { value: '' }

  onChangeText = value => {
    const { render } = this.props;

    this.setState({ value }, () => {
      if (render) {
        render(this.state.value)
      }
    })
  }

  render() {
    const { value } = this.state;

    return (
      <View
        style={styles.root}
      >
        <TextField
          placeholder={'Search'}
          onChangeText={this.onChangeText}
          value={value}
          style={styles.searchInput}
        />
      </View>
    )
  }
}

SearchInput.propTypes = {
  render: propTypes.func.isRequired,
};

export default SearchInput;
