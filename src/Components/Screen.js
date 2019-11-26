import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Container } from 'ui';

export const Screen = ({ children, center=false }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 44 }} />

      <Container center={center}>{children}</Container>
    </SafeAreaView>
  );
};
