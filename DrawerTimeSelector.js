import React, { useState, useEffect } from 'react';
import { DrawerBottom } from 'material-bread';
import { View, Text } from 'react-native';
import { theme } from 'ui';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_AVAILABLE_TIMES } from 'queries';
import { AvailableTimesList } from 'containers';

export const DrawerTimeSelector = ({ open, close, onSelect }) => {
  const [available, setAvailable] = useState([]);
  const [getAvailable, { data, error, loading }] = useLazyQuery(
    GET_AVAILABLE_TIMES,
  );

  useEffect(() => {
    getAvailable();
  }, []);

  useEffect(() => {
    if (data && data.available) {
      setAvailable(data.available);
    }
  }, [data]);


  if (loading) return null;
  if (error) return null;

  return (
    <DrawerBottom
      style={{ backgroundColor: theme.$canvas, padding: 0 }}
      visible={open}
      onBackdropPress={close}
      onSwipeDown={close}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <Text style={theme.$headingFive}>Next Available Times</Text>
      </View>

      <AvailableTimesList onPressIn={onSelect} available={available} />
    </DrawerBottom>
  );
};
