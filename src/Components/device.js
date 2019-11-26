import { Dimensions, Platform } from 'react-native';

export const { height, width, } = Dimensions.get('window');


export const type = (({ height, width }) => {
  if (width > 720) {
    return 'desktop';
  }

  return 'mobile';
})({ height, width });


export const isIphoneX = (({ height, width }) => {
    return (
      // This has to be iOS duh
      Platform.OS === 'ios' &&

      // Accounting for the height in either orientation
      (height === 812 || width === 812)
    );
})({ height, width });

export default type;
