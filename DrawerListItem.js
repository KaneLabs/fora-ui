import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ripple, BodyText } from 'material-bread';

export const DrawerListItem = ({ text, textColor, onPressIn, ...props }) => {
  return (
    <Ripple {...props} onPressIn={() => onPressIn(text)} style={styles.listItem}>
      <BodyText>{text}</BodyText>
    </Ripple>
  );
};

const styles = EStyleSheet.create({
  listItem: {
    padding: '$unit',
  },
});
