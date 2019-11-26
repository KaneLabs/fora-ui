import React from 'react';
import { View } from 'react-native';
import { BodyText, Caption, Avatar } from 'ui';
import EStyleSheet from 'react-native-extended-stylesheet';

const productInitials = title => {
  const titleWords = title.split(' ');

  if (titleWords.length === 1) {
    const [firstWord] = titleWords;
    const firstLetter = firstWord[0];

    return firstLetter.toUpperCase();
  }

  if (titleWords.length > 1) {
    const [firstWord, secondWord] = titleWords;
    const firstLetterFirstWord = firstWord[0].toUpperCase();
    const firstLetterSecondWord = secondWord[0].toUpperCase();

    return `${firstLetterFirstWord}${firstLetterSecondWord}`;
  }

  return '';
};

export const ProductSmall = ({ id, uri, title }) => {
  console.log('uri', uri);


  return (
    <View style={styles.productSmall}>
      <View style={styles.avatarContainer}>
        {uri ? (
          <Avatar source={{ uri }} size={imageSize} />
        ) : (
          <View style={styles.avatar}>
            <Caption style={[styles.centerText]}>
              {productInitials(title)}
            </Caption>
          </View>
        )}
      </View>

      <Caption style={[styles.caption, styles.centerText]}>{title}</Caption>
    </View>
  );
};

const imageSize = 44;
const padding = 8;
const imageAndPadding = imageSize + padding * 2;
const maxWidth = imageAndPadding + padding * 1.5;

const styles = EStyleSheet.create({
  productSmall: {
    maxWidth,
    // height: 44,
    // width: 44,
    alignItems: 'center',
  },
  avatarContainer: {
    padding,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize,
    backgroundColor: '$canvas',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderColor: '$borderColor',
    borderWidth: EStyleSheet.hairlineWidth,
  },
  caption: {
    marginBottom: 8,
  },
  centerText: {
    textAlign: 'center',
  },
});
