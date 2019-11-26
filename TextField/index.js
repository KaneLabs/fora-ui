import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TextField = forwardRef((props, ref) => {
  const { style = {}, theme = 'dark', ...rest } = props;

  console.log("rest", rest);

  return (
    <TextInput
      {...rest}
      ref={ref}
      selectionColor={styles.selection.color}
      style={[styles.input, style]}
      keyboardAppearance={theme}
      placeholderTextColor={styles.placeholder.color}
    />
  );
});

const styles = EStyleSheet.create({
  placeholder: {
    color: '$textColor.secondary',
  },
  selection: {
    color: '$cu.gold',
  },
  input: {
    borderRadius: '$borderRadius',
    color: '$textColor.primary',
    fontSize: 17,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '$unit / 2',
    paddingRight: '$unit / 2',
    paddingTop: '$unit / 2',
    paddingBottom: '$unit / 2',
  },
});

export { TextField };
