import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon, Heading } from 'material-bread';
import { View, Dimensions } from 'react-native';
import { Title, BodyText, theme } from 'ui';

const { width: deviceWidth } = Dimensions.get('window');

export const ServiceItem = ({ icon, title, paragraph, comingSoon }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerItem, { flex: 1 }]}>
        <Icon
          name={icon}
          size={240}
          color={comingSoon ? theme.$secondary.main : theme.$primary.main}
        />
      </View>

      <View style={styles.containerItem}>
        <Title style={comingSoon && { color: theme.$secondary.main }}>
          {title}
        </Title>
      </View>

      {comingSoon && <Heading type={6} text={comingSoon} gutterBottom />}

      <View style={styles.containerItem}>
        <BodyText
          style={comingSoon && { color: theme.$secondary.main }}
          text={paragraph}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    width: deviceWidth,
    flex: 1,
    paddingVertical: '$unit'
  },
  containerItem: {
    paddingHorizontal: '$unit * 1.25',
    paddingVertical: '$unit * 0.75',
    alignItems: 'center',
  },
});
