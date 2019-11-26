import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Banner, BodyText } from '@kanelabs/ui';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { GEOLOCATE_ADDRESS } from 'queries';
import Icon from 'react-native-vector-icons/FontAwesome';

export const AddressBanner = ({ location, style }) => {
  const { data, loading, error } = useQuery(GEOLOCATE_ADDRESS, {
    variables: { ...location },
  });

  if (loading) return null;
  if (error) return null;

  return data && data.geolocateAddress && data.geolocateAddress.short && (
      <View style={{ marginTop: 48 }}>
        <Banner open style={style}>
          <View style={styles.contentContainer}>
            <View style={styles.contentRow}>
              <Icon style={styles.iconStyle} name="map-pin" size={24} />
              <BodyText type={1} text={data.geolocateAddress.short} />
            </View>
          </View>
        </Banner>
      </View>
  );
};

const styles = EStyleSheet.create({
  contentContainer: {
    // paddingHorizontal: '$unit * 0.75',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    color: 'rgba(255,255,255,0.67)',
    marginRight: '$unit',
  },
});
