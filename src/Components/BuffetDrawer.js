import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DrawerBottom, Heading, Subtitle } from 'material-bread';
import { Plate } from 'ui';
import { View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { GET_BUFFET } from 'queries';
import { withNavigation } from 'react-navigation';

export const BuffetDrawer = withNavigation(({ open, close, navigation }) => {
  const { data, error, loading } = useQuery(GET_BUFFET);

  const [buffetChoices, setBuffetChoices] = useState([]);

  const setNextBuffetChoices = nextPlate => {
    const index = buffetChoices.findIndex(alreadyChosenPlate => {
      return alreadyChosenPlate.id === nextPlate.id;
    });

    const alreadyChosen = index !== -1;

    if (alreadyChosen) {
      const nextBuffetChoices = buffetChoices.filter(alreadyChosenPlate => {
        return alreadyChosenPlate.id !== nextPlate.id;
      });

      return setBuffetChoices(nextBuffetChoices);
    }

    if (buffetChoices.length === 2) {
      const nextBuffetChoices = [...buffetChoices, nextPlate];
      setBuffetChoices(nextBuffetChoices);
      navigation.navigate('CHECKOUT', { buffet: nextBuffetChoices });
      setBuffetChoices([]);
      return close();
    }

    return setBuffetChoices([...buffetChoices, nextPlate]);
  };

  return (
    <DrawerBottom
      style={styles.drawerBottom}
      visible={open}
      onBackdropPress={close}
      onSwipeDown={close}
    >
      <View style={{ paddingHorizontal: padding * 1.5 }}>
        <Heading type={6} text="Pick Three" />
      </View>

      <View style={styles.contentContainer}>
        {data && data.buffet && data.buffet.map(plate => {
          return (
              <Plate
                {...plate}
                onPressIn={() => setNextBuffetChoices(plate)}
                key={plate.id}
              />
          );
        })}
      </View>
    </DrawerBottom>
  );
});

const padding = 16;

const styles = EStyleSheet.create({
  drawerBottom: {
    backgroundColor: '$canvas',
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: padding / 2,
  },
  titleMargin: {
    marginBottom: padding / 2,
  },
});
