import React from 'react';
import { AdMobBanner } from 'react-native-admob';

const Ad = () => {
  return (
    <AdMobBanner
      adSize="smartBannerPortrait"
      adUnitID="ca-app-pub-3940256099942544/2934735716"
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.error(error)}
    />
  )
}

export default Ad;
