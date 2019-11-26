import React from 'react';
import { BodyText, Icon } from 'material-bread';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Banner } from 'ui';
import { View } from 'react-native';
import { formatRelative } from 'date-fns';

export const LaundryBanner = ({ pickupTime, open = true }) => {
  const relativeTime = formatRelative(new Date(pickupTime), new Date());

  return (
    <Banner open={open}>
      <View style={styles.contentContainer}>
        <View style={styles.contentRow}>
          <Icon style={styles.iconStyle} name="timelapse" size={24} />
          <BodyText type={1} text={relativeTime} />
        </View>
      </View>
    </Banner>
  );
};

const styles = EStyleSheet.create({
  contentContainer: {
    paddingHorizontal: '$unit',
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
