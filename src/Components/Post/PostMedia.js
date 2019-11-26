import React from 'react';
import { Dimensions, Image, TouchableWithoutFeedback, View, Platform, } from 'react-native';
import Video from '../Video';
import Typography from '../Typography';
import Button from '../Button';

import { type, width, } from '../device';

import { FEED_WIDTH, unit, background2Opaque, } from 'themes';

const imageWidth = type === 'desktop' ? FEED_WIDTH : width;

const VIDEO_CONTROLS_HEIGHT = unit*5;

const styles = {
  imageStyle: {
    width: imageWidth,
    height: imageWidth,
  },
  videoControlsStyles: {
    width: imageWidth,
    height: VIDEO_CONTROLS_HEIGHT,
    marginTop: -VIDEO_CONTROLS_HEIGHT,
    backgroundColor: background2Opaque,
    padding: unit *2,
    position: 'absolute',
    zIndex: 1000,
  },
};

const VideoControls = (props) => {
  return (
    <View style={styles.videoControlsStyles}>
      <TouchableWithoutFeedback style={{ maxWidth: 80 }} onPress={() => props.onPlayPress()}>
        <View>
          <Typography variant='button' style={{ color: '#FFF' }}>PLAY</Typography>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

class VideoPlayer extends React.Component {
  state = {
    play: false,
  }

  onPlayPress = () => {
    console.log('this.video', this.video);

    this.video.play();
    this.setState(state => { play: !state.play })
  }

  render() {
    const { uri } = this.props;

    console.log('uri: ', uri);

    return (
        <Video
          ref={video => { this.video = video }}
          source={{ uri }}
          resizeMode={"contain"}
          style={{ width, height: width * (9/16) }}
        />
    );
  }
}

export const PostMedia = ({ media, style = {}, index=0 }) => {
  const overrideableStyle = Object.assign({}, styles.imageStyle, style);

  const mediaObj = media[index];

  if (mediaObj.uri.slice(-4) === '.mp4') {
    return (
      <View>
        <VideoPlayer {...mediaObj} controls />
      </View>
    );
  }

  return (
    <Image
      key={mediaObj.uri}
      source={{ uri: mediaObj.uri }}
      style={overrideableStyle}
    />
  );
};

export default PostMedia;
