import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'material-bread';
import { Dimensions } from 'react-native';
import { theme } from 'ui';

const { width: deviceWidth } = Dimensions.get('window');

export const LearnMoreIcon = ({ icon, comingSoon }) => {
  return (
    <Icon
      name={icon}
      size={240}
      color={comingSoon ? theme.$secondary.main : theme.$primary.main}
      style={styles.image}
    />
  );
};

const styles = EStyleSheet.create({
  image: {},
});
