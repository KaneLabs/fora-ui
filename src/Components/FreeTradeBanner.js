import React from 'react'

import { StyleSheet, ImageBackground } from 'react-native';


import Banner from './Banner';
import Typography from './Typography'

import { width } from './device'

import { foraGoldOpaque  } from 'themes'
// import freeTradeBannerImage from 'art/free-trade-banner.png'

const styles = StyleSheet.create({

})


const FreeTradeBanner = ({ children }) => {
  return (
    <Banner>
        <Typography>Buy, Sell, and Trade on Fora for 0</Typography>
    </Banner>
  )
}


export default FreeTradeBanner
