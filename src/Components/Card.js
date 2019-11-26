import React from 'react';
import { Paper } from 'ui';
import { View } from 'react-native';

export const Card = ({ children, ...props }) => {
  return <Paper {...props}>{children}</Paper>;
};

export const CardHeader = ({ children, center = false, ...props }) => {
  return <View style={[{ padding: 12, width: '100%' }, center && { alignItems: 'center' }]} {...props}>
    {children}
  </View>
};

export const CardBody = ({ children, ...props }) => {
  return <View style={{ paddingTop: 0, padding: 12, width: '100%' }} {...props}>
    {children}
  </View>
};
