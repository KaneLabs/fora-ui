import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery } from '@apollo/react-hooks';
import { Caption } from 'material-bread';
import { GEOLOCATE_ADDRESS } from 'queries';

export const LocationPin = ({ location, address = null }) => {
  return (
    <Marker coordinate={location}>
      <View style={styles.marker}>
        <Icon name="map-pin" size={styles.pin.width} color={styles.pin.color} />

        {address && address.short && (
          <Caption style={styles.caption} text={address.short} />
        )}
      </View>
    </Marker>
  );
};

const latLngType = { latitude: PropTypes.number, longitude: PropTypes.number };

LocationPin.propTypes = {
  location: PropTypes.shape(latLngType).isRequired,
  address: PropTypes.shape({}),
};

const iconSize = 28;

const styles = EStyleSheet.create({
  marker: {
    alignItems: 'center',
  },
  caption: {
    backgroundColor: '$canvas',
    paddingHorizontal: 6,
    paddingVertical: 6,
    lineHeight: 15,
    fontSize: 15,
    marginTop: 6,
    borderRadius: '$borderRadius',
    borderColor: '$borderColor',
    borderWidth: EStyleSheet.hairlineWidth,
  },
  pin: {
    color: 'rgba(255,255,255,0.67)',
    height: iconSize,
    width: iconSize,
  },
  circle: {
    backgroundColor: 'rgba(255,255,255,0.67)',
    height: iconSize,
    width: iconSize,
    borderRadius: iconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
