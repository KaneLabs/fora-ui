import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Menu, MenuItem } from 'material-bread';
import { countryData } from './country-data';

export const CountryCodeMenu = ({ setCountryCode, close }) => {
  return (
    <Menu visible onBackdropPress={close} style={styles.menu}>
      {countryData.map(country => {
        return (
          <MenuItem
            key={country.key}
            onPressIn={() => setCountryCode(country.phone)}
            text={country.name}
          />
        );
      })}
    </Menu>
  );
};

const styles = EStyleSheet.create({
  menu: {
    width: '100%',
    backgroundColor: '$canvas',
  },
});
