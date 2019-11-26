import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BodyText, ListIcon, ListContent } from 'ui';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const latLngType = { latitude: PropTypes.number, longitude: PropTypes.number };

export const OrderMarkerListItem = ({ text = null, children = null, icon, iconLeft = null, iconRight = null }) => {
  const leftIcon = iconLeft || icon;
  const content = text || children;
  const rightIcon = iconRight;
  const centerText = content && !leftIcon && !rightIcon;

  return (
    <View style={styles.orderMarkerListItem}>
      {leftIcon && <ListIcon icon={leftIcon} />}

      {content && (
        <ListContent centerText={centerText} text={text}>
          {children}
        </ListContent>
      )}

      {rightIcon && <ListIcon icon={rightIcon} />}
    </View>
  );
};

const styles = EStyleSheet.create({
  orderMarkerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '$unit / 2',
  },
  center: {
    alignItems: 'center',
  },
  content: { flex: 1 },
  marker: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: deviceWidth / 3,
  },
  markerWide: {
    width: (deviceWidth * 2) / 3,
  },
  triangle: {
    marginTop: -1,
    width: 12,
    height: 12,
    borderLeftWidth: 12,
    borderLeftColor: 'transparent',
    borderRightWidth: 12,
    borderRightColor: 'transparent',
    borderTopWidth: 12,
    borderTopColor: '$canvas',
  },
  pin: {
    color: '$iconColor',
    height: '$iconSize / 2',
    width: '$iconSize / 2',
  },
  circle: {
    backgroundColor: 'rgba(255,255,255,0.67)',
    height: '$iconSize / 2',
    width: '$iconSize / 2',
    borderRadius: '$iconSize / 2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '$listIconSize',
    width: '$listIconSize',
    color: '$textColor.secondary',
  },
  listIcon: {
    padding: 10,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderMarkerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '$unit * 0.75',
  },
});
