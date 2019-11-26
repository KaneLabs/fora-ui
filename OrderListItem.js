import React from 'react';
import propTypes from 'prop-types';
import { Container, BodyText, MarkerListItem } from 'ui';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { formatRelativeTime } from 'fns';
import { isPast } from 'date-fns';

export const capitalizeFirst = str => {
  const firstLetter = str.slice(0, 1);
  const rest = str.slice(1);
  return firstLetter.toUpperCase() + rest;
};

export const OrderListItem = ({
  onPress = () => null,
  orderId,
  laundrId,
  drop,
  createdAt,
  pickupTime,
}) => {
  const friendlyPickupTime = capitalizeFirst(formatRelativeTime(pickupTime));

  return (
    <MarkerListItem onPress={() => onPress(orderId)}>
      <BodyText>{friendlyPickupTime}</BodyText>
    </MarkerListItem>
  );
};

OrderListItem.propTypes = {};

const styles = EStyleSheet.create({

});
