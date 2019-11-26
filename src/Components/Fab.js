import React from 'react';
import { Ripple } from 'material-bread';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BodyText } from 'ui';

export const Fab = ({ style, icon, label, ...rest }) => (
  <Ripple style={[styles.fab, style]} {...rest}>
    {label && <BodyText text={label} style={{ marginRight: 16 }} />}
    {icon}
  </Ripple>
);

export const FAB_SIZE = 56;

const styles = EStyleSheet.create({
  fab: {
    backgroundColor: '$canvas',
    borderColor: '$borderColor',
    borderWidth: EStyleSheet.hairlineWidth,
    height: FAB_SIZE,
    position: 'relative',
    borderRadius: FAB_SIZE,
    paddingHorizontal: '$unit',
    paddingVertical: '$unit * 0.75',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
