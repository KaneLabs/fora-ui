import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  View,
  createElement,
} from 'react-native';

import Link from 'next/link'

// import { withRouter } from 'react-router';

import { height, width, type } from '../device';

import { Query } from 'react-apollo';
import { ME, GET_SONG } from 'queries';

import Avatar from '../Avatar';

import Typography from '../Typography';
import ForaLogo from '../ForaLogo';
// import Icon from './Icon';
import SearchInput from '../SearchInput';

import LinearGradient from 'react-native-linear-gradient';


import {
  background1,
  background2,
  canvas1,
  foraGold,
  foraPurple,
  unit,
  NAV_HEIGHT,
  DRAWER_WIDTH,
  SUBNAV_HEIGHT,
  borderColor,
} from 'themes';

const styles = StyleSheet.create({
  nav: {
    height: NAV_HEIGHT,
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    // paddingLeft: type === 'desktop' ? unit * 2 : 0,
    // paddingRight: type === 'desktop' ? unit * 2 : 0,
    borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // zIndex: 100,
    // opacity: '0.2',
    // borderColor,
  },
  navLeft: {
    width: DRAWER_WIDTH, flexDirection: 'row', alignItems: 'center', paddingLeft: unit, paddingRight: unit,
  },
  navLogo: {
    marginRight: unit / 4
  },
  navRight: {
    paddingLeft: unit,
    paddingRight: unit,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // width: DRAWER_WIDTH,
  },
  navBackground: {
    height: NAV_HEIGHT + blurStrength * 2,
    filter: `blur(${blurStrength}px)`,
    position: 'absolute',
    top: -blurStrength,
    left: -blurStrength,
    width: `calc(100% + ${blurStrength * 2}px)`,
    zIndex: 1000,
  },
  navShadeBottom: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: unit * 1.5,
    bottom: 0,
    left: 0,
  },
  searchContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: unit, paddingRight: unit, },
})


const blurStrength = unit * 4;

const NavDesktopLeft = ({ history }) => {
  return (
    <TouchableHighlight onPress={() => history.push('/')}>
        <View style={styles.navLeft}>
          <View style={styles.navLogo}>
            <ForaLogo />
          </View>

          <Typography variant='h6'>FORA</Typography>
        </View>
    </TouchableHighlight>
  );
};

const ForaLogoButton = ({ history }) => {
  return (
    <TouchableHighlight onPress={() => history.push('/')}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ padding: unit, }}>
          <ForaLogo />
        </View>
      </View>
    </TouchableHighlight>
  );
};


const NavShadeBottom = () => {
  return (
    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.navShadeBottom} />
  )
}

class Nav extends React.Component {
  render() {
    const { history } = this.props;

    return (
        <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)']} style={styles.nav}>
          {type === 'desktop' ? <NavDesktopLeft history={history} /> : <ForaLogoButton history={history} />}

          <View style={styles.searchContainer}>
            <SearchInput />
          </View>

          <View style={styles.navRight}>
            <Query query={ME} ssr={false}>
              {({ data }) => {
                if (data && data.me && data.me.token) {
                  return <ProfileAvatar />
                }

                return (
                  <TouchableHighlight onPress={() => this.props.history.push('/auth')}>
                    <View>
                      <Typography variant='button'>
                        {'LOGIN'}
                      </Typography>
                    </View>
                  </TouchableHighlight>
                )
              }}
            </Query>
          </View>
        </LinearGradient>
    )
  }
}

export default Nav;
