import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { shadow, Ripple, Caption } from 'material-bread';
import { Dimensions, View, Image, ScrollView } from 'react-native';

export const Plate = ({ onPress = () => null, uri, title }) => {
  return (
    <View style={styles.plateContainer}>
      <Ripple style={styles.plate} onPressIn={onPress}>
        <Image source={{ uri }} style={styles.plateImage} />
      </Ripple>

      <View style={styles.plateCaption}>
        <Caption type={1} align={'center'} text={title} />
      </View>
    </View>
  );
};

const { width: deviceWidth } = Dimensions.get('window');

const padding = 16;
// calcs exact size for 1/3 of screen including padding
const plateSize = ((deviceWidth, padding) => ((deviceWidth / 3 - padding * 2) - ((padding) / 3)))(deviceWidth, padding);

const styles = EStyleSheet.create({
  plateContainer: {
    width: plateSize + padding * 2,
    overflow: 'hidden',
  },
  plate: {
    margin: padding,
    height: plateSize,
    width: plateSize,
    borderRadius: plateSize,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow(10),
  },
  plateImage: {
    height: plateSize,
    width: plateSize,
    borderRadius: plateSize,
  },
  plateCaption: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: padding,
  },
});
