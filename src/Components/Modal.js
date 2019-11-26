import React from 'react';

import {
  Dimensions,
  Keyboard,
  ScrollView,
  Platform,
  LayoutAnimation,
  TouchableWithoutFeedback, View,
} from 'react-native';

// // Enable LayoutAnimation under Android
// if (Platform.OS === 'android') {
//   UIManager.setLayoutAnimationEnabledExperimental(true)
// }

import { type } from './device';

import { FEED_WIDTH, NAV_HEIGHT, unit, background2, } from 'themes';

import Paper from './Paper';

const styles = {
  backdrop: {
    position: 'absolute',
    zIndex: 100,
    top: 0, left: 0, bottom: 0, right: 0,
    // width: '100%',
    // height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    zIndex: 1000,
    position: 'absolute',
    width: FEED_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
    backgroundColor: background2,
    // margin: '0 auto',
    // zIndex: 1000,
    // flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

class Modal extends React.Component {
  state = {
    visibleHeight: Dimensions.get('window').height,
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => this.keyboardDidShow(e));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', e => this.keyboardDidHide(e));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;

    LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 300 }))
    this.setState({ visibleHeight: newSize })
  }

  keyboardDidHide (e) {
    LayoutAnimation.configureNext(Object.assign({}, LayoutAnimation.Presets.linear, { duration: 300 }))
    this.setState({
      visibleHeight: Dimensions.get('window').height,
    })
  }

  render() {
    const { children, open, onClose, fullHeight, Header, Footer } = this.props;

    if (open === false) {
      return null;
    }

    const width = Dimensions.get('window').width;

    const left = type === 'desktop' ? ((width/2) - (FEED_WIDTH/2)) : 0;
    const modalWidth = type === 'desktop' ? FEED_WIDTH : width;
    const fullHeightStyle = fullHeight ? ({ top: 0, bottom: 0 }) : ({ maxHeight: '60%', bottom: '20%', top: '20%', margin: 'auto', })

    const changingStyles = { height: this.state.visibleHeight, left, width: modalWidth, ...fullHeightStyle};

    const modalStyle = Object.assign({}, styles.contentContainer, changingStyles);

    return (
      <React.Fragment>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <View style={styles.backdrop}>

          </View>
        </TouchableWithoutFeedback>

          <View style={modalStyle}>
            {Header}

            <ScrollView style={{ flex: 1, width: '100%', }}>
              {children}
            </ScrollView>

            {Footer}
          </View>
      </React.Fragment>
    )
  }
}

export default Modal;
