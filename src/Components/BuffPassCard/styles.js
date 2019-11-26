import EStyleSheet from 'react-native-extended-stylesheet';
import { shadow } from 'material-bread';

import { Dimensions } from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');

const containerPadding = 32;
const cardDimension = 2 / 1;
const cardWidth = deviceWidth - containerPadding * 2;
const cardHeight = cardWidth / cardDimension;

export default EStyleSheet.create({
  buffPassCard: {
    backgroundColor: '$canvas',
    borderRadius: '$borderRadius',
    borderColor: '$primary.main',
    borderWidth: 1,
    width: cardWidth,
    height: cardHeight,
    ...shadow(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    padding: 32,
  },
});
