import EStyleSheet from 'react-native-extended-stylesheet';
import { shadow } from 'material-bread';

export default EStyleSheet.create({
  paperRetroWave: {
    backgroundColor: '$canvas',
    borderWidth: EStyleSheet.hairlineWidth,
    borderColor: '$borderColor',
    borderRadius: '$borderRadius',
    overflow: 'hidden',
    ...shadow(4),
  },
});
