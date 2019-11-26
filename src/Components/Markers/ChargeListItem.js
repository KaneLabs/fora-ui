import React from 'react';
import { MarkerListItem } from './MarkerListItem';

export const ChargeListItem = ({ id, amount }) => {
  return <MarkerListItem icon='receipt' text={`$${(amount / 100).toFixed(2)}`} />;
};
