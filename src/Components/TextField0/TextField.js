import React, { Component } from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { borderColor, secondaryTextColor, disabledTextColor, unit, canvas1Opaque } from 'themes';

const styles = StyleSheet.create({
  input: {
    backgroundColor: canvas1Opaque,
    borderRadius: unit,
    borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    color: secondaryTextColor,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: unit,
    paddingRight: unit,
    paddingTop: unit / 2,
    paddingBottom: unit / 2,
  }
});

class TextField extends Component {
  render() {

    const { style = {}, theme = 'dark', propsRef, ...rest } = this.props;

    return (
      <TextInput
        {...rest}
        ref={propsRef}
        style={[styles.input, style]}
        keyboardAppearance={theme}
        placeholderTextColor={disabledTextColor}
      />
    );
  }
}

export default TextField;
