import React from 'react';
import propTypes from 'prop-types';
import { List, OrderListItem } from 'ui';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const OrdersList = ({
  orders = [],
  onPress = () => null,
}) => {
  return (
    <List>
      {orders
        .map(order => <OrderListItem onPress={onPress} key={order.orderId} {...order} /> )}
    </List>
  );å
}

const styles = EStyleSheet.create({

});
