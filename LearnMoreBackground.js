import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'material-bread';
import { View, Dimensions } from 'react-native';
import { theme } from 'ui';
import { LearnMoreIcon } from 'ui';

const { width: deviceWidth } = Dimensions.get('window');

export const LearnMoreBackground = ({ icon, comingSoon }) => {
  return (
    <View style={[styles.container]}>
      <LearnMoreIcon
        name={icon}
        color={comingSoon ? theme.$secondary.main : theme.$primary.main}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    width: deviceWidth,
    paddingVertical: '$unit',
  },
});
