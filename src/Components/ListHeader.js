import React from 'react';
import { View } from 'react-native';
import Typography from './Typography';
import { unit } from 'themes';

const styles = {
  listHeader: {
    width: '100%',
    padding: unit * 2,
  },
};

export const ListHeader = ({ children }) => (
  <View style={styles.listHeader}>
    <Typography variant='subtitle1'>{children}</Typography>
  </View>
);



export default ListHeader;
