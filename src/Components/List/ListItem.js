import React from 'react';
import { BodyText } from '@kanelabs/ui';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ListItem = ({ style, ...props }) => (
  <View style={[styles.listItem, style]}>
    {props.primaryText && <BodyText style={styles.primaryText}>{props.primaryText}</BodyText>}
    {props.secondaryText && <BodyText style={styles.secondaryText}>{props.secondaryText}</BodyText>}
  </View>
);

const styles = EStyleSheet.create({
  listItem: {},
  primaryText: {
    color: '$textColor.primary',
  },
  secondaryText: {
    color: '$textColor.secondary',
  },
});
