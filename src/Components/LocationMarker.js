import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';

const latLngType = { latitude: PropTypes.number, longitude: PropTypes.number };

export const LocationMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate}>
    <View style={styles.marker}>
      <View style={styles.circle} />
    </View>
  </Marker>
);

LocationMarker.propTypes = {
  coordinate: PropTypes.shape(latLngType).isRequired,
};

const styles = EStyleSheet.create({
  icon: {
    height: '$iconSize / 2',
    width: '$iconSize / 2',
  },
  marker: {},
  triabgle: {},
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
});
