import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  BodyText,
  Caption,
  ChargeListItem,
  Divider,
  Paper,
  MarkerActionButton,
  OrderMarkerListItem,
  ProductListSmall,
} from 'ui';
import { formatDistanceStrict } from 'date-fns';
import { cartTotal, formatPickupTime } from 'fns';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { PAY_FOR_DROP, CART } from 'queries';

const { width: deviceWidth } = Dimensions.get('window');

const latLngType = { latitude: PropTypes.number, longitude: PropTypes.number };

export const DropMarker = ({
  navToCC,
  navToJoin,
  navToOrder,
  pickupTime,
  hasCard,
  address,
  drop,
  products,
  buffpass,
  onPress,
  orderId = 0,
  ...props
}) => {
  // const [pressed, setPressed] = useState(true);
  // const [expiresIn, setExpiresIn] = useState(orderExpiresIn(order));
  const [pickupTimeFormatted, setPickupTime] = useState(
    formatPickupTime(pickupTime)
  );

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setPickupTime(formatPickupTime(pickupTime));
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  const [payforDrop] = useMutation(PAY_FOR_DROP);
  const client = useApolloClient();

  const sendIt = async () => {
    try {
      const cart = client.readQuery({ query: CART });
      console.log('cart', cart);
      const input = { dropId: drop.id };
      console.log('input', input);
      const payforDropResponse = await payforDrop({
        variables: { input },
      });
      console.log('payforDropResponse', payforDropResponse);
    } catch (e) {
      console.log('payForDrop catch', e);
    }
  };

  const { latitude, longitude, short: addressShort } = address;
  const latLng = { latitude, longitude };
  const total = cartTotal(products);

  const { charge } = drop;
  console.log('charge', charge);
  const isPaidFor = charge && charge.id;
  const hasBuffPass = buffpass && buffpass.id;
  const onMarkerPress = () => {
    console.log('onMarkerPress');
    if (isPaidFor) return navToOrder(orderId);
    if (!hasCard) return navToCC();

    // TODO: Be able to nest pressable buttons in Marker
    // if (!hasBuffPass) {
    //   return navToJoin();
    // }

    // if (hasBuffPass && hasCard) {
    return sendIt();
    // }
  }


  const checkoutButtons = (
    <>
      {!buffpass && (
        <>
          <Caption>{`Join BuffPass for Free Deliveries`}</Caption>
          <MarkerActionButton
            text={'JOIN BUFFPASS'}
            onPress={() => {
              navToJoin();
            }}
          />
        </>
      )}
      <Divider />
      <MarkerActionButton
        text={hasCard === false ? 'ADD CARD' : 'SEND IT'}
        onPress={onPress}
      />
    </>
  );

  const cartItems = (
    <>
      <Divider />
      <View style={{ alignItems: 'flex-end', width: '100%', paddingVertical: 12 }}>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 4}}>
          <BodyText>{`Items`}</BodyText>
          <BodyText>{`$${(total / 100).toFixed(2)}`}</BodyText>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 4}}>
          <BodyText>{`Delivery Fee`}</BodyText>
          <BodyText>{`$4.20`}</BodyText>
        </View>
      </View>
    </>
  );

  return (
    <Marker onPress={onMarkerPress} {...props}>
      <View style={styles.center}>
        <Paper style={[styles.marker, styles.markerWide]}>
          <OrderMarkerListItem text={`Delivery in ${pickupTimeFormatted}`} />
          <ProductListSmall products={products} />
          {isPaidFor && <ChargeListItem {...charge} />}
          {!isPaidFor && cartItems}
          {!isPaidFor && checkoutButtons}
        </Paper>
        <View style={styles.triangle} />
      </View>
    </Marker>
  );
};

DropMarker.propTypes = {};

const styles = EStyleSheet.create({
  center: {
    alignItems: 'center',
  },
  content: { flex: 1 },
  marker: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: deviceWidth / 3,
  },
  markerWide: {
    width: (deviceWidth * 2) / 3,
  },
  triangle: {
    marginTop: -1,
    width: 12,
    height: 12,
    borderLeftWidth: 12,
    borderLeftColor: 'transparent',
    borderRightWidth: 12,
    borderRightColor: 'transparent',
    borderTopWidth: 12,
    borderTopColor: '$canvas',
  },
  pin: {
    color: '$iconColor',
    height: '$iconSize / 2',
    width: '$iconSize / 2',
  },
  circle: {
    backgroundColor: 'rgba(255,255,255,0.67)',
    height: '$iconSize / 2',
    width: '$iconSize / 2',
    borderRadius: '$iconSize / 2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '$listIconSize',
    width: '$listIconSize',
    color: '$textColor.secondary',
  },
  listIconContainer: {
    padding: 10,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderMarkerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '$unit * 0.75',
  },
  orderMarkerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$unit / 2',
  },
});
