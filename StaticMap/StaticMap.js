import React from 'react';
import propTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, View } from 'react-native';
import mapStyle from './mapStyle.json';

const { width: deviceWidth } = Dimensions.get('window');
const { STATIC_MAPS_API_KEY } = 'constants';
const size = { width: deviceWidth, height: (deviceWidth * 3 / 4) };

const INITIAL_CAMERA = {
  center: {},
  zoom: 13,
  pitch: 1,
  heading: -90,
  // altitude: 1,
};


console.log('STATIC_MAPS_API_KEY', STATIC_MAPS_API_KEY);

export const StaticMap = ({ latitude = 32.064171, longitude = 34.7748068 }) => {
  const camera = {
    ...INITIAL_CAMERA,
    center: { latitude, longitude },
  };
  return (
    <MapView
      style={size}
      camera={camera}
      customMapStyle={mapStyle}
      testID="StaticMap"
      provider={PROVIDER_GOOGLE}
      zoom={13}
    />
  );
};

StaticMap.propTypes = {
  latitude: propTypes.number.isRequired,
  longitude: propTypes.number.isRequired,
};
