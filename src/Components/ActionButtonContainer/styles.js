import EStyleSheet from 'react-native-extended-stylesheet';

const keyboardHeight = 100;

export default EStyleSheet.create({
  actionButtonContainer: {
    flex: 1,
    padding: '$unit',
    position: 'absolute',
    bottom: keyboardHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
