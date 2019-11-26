import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Heading, Button, Icon } from "material-bread";
import { Banner } from 'ui';
import styles from './styles';

const propTypes = {
  open: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  open: false,
  onPress: () => null,
};

const ElevatorPitchBanner = ({ open, onPress }) => {
  return (
    <Banner testID="ELEVATOR_PITCH_BANNER" open={open} height={44}>
      <View style={styles.bannerContent}>
        <View style={styles.content}>
          <Heading type={6} text="College is hard enough" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="LEARN MORE"
            iconPosition="right"
            onPressIn={onPress}
          />
        </View>
      </View>
    </Banner>
  );
};

ElevatorPitchBanner.propTypes = propTypes;
ElevatorPitchBanner.defaultProps = defaultProps;
export { ElevatorPitchBanner };
