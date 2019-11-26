import React from 'react';
import { StyleSheet, Image } from 'react-primitives';
import { unit } from 'themes';

const LOGO_DEFAULT_SIZE = unit * 4.5;
const styles = StyleSheet.create({
  logo: {
    height: LOGO_DEFAULT_SIZE, width: LOGO_DEFAULT_SIZE,
  }
})


const ForaLogo = () => {
  return (
      <Image
        style={styles.logo}
        source={require('../images/fora-logo-white.png')}
      />
  );
};

export default ForaLogo;
