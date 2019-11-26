import React from 'react'

import { StyleSheet } from 'react-native';

import { width } from './device'

import { foraGoldOpaque  } from 'themes'


const styles = StyleSheet.create({
  banner: {
    width: width,
    height: width/3,
    backgroundColor: foraGoldOpaque,
  }
})

import View from './View'

const Banner = ({ children }) => {
  return (
    <View style={styles.banner}>
      {children}
    </View>
  )
}


export default Banner
