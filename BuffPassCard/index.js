import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Heading } from 'material-bread';
import styles from './styles';
import { theme } from 'ui';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const BuffPassCard = ({ children }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.buffPassCard}>
        <Heading
          style={{ fontWeight: 200 }}
          type={3}
          text="BuffPass"
          color={theme.$primary.main}
        />
      </View>
    </View>
  );
};

BuffPassCard.propTypes = propTypes;
BuffPassCard.defaultProps = defaultProps;
export { BuffPassCard };
