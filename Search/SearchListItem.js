import React from 'react';
import propTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Avatar, Ripple, Button } from 'material-bread';

export const SearchListItem = ({
  title,
  desc = null,
  uri = null,
  onPressIn,
  onSelect,
  ...rest
}) => {
  return (
    <View {...rest} style={styles.listItem}>
      <Ripple style={styles.listContent} onPressIn={onPressIn}>
        {uri && (
          <Avatar
            type="image"
            image={<Image source={{ uri }} />}
            size={36}
            style={styles.avatar}
          />
        )}

        <View style={styles.content}>
          {title && <Text style={styles.textStyle}>{title}</Text>}
          {desc && <Text styles={styles.secondaryTextStyle}>{desc}</Text>}
        </View>
      </Ripple>

      <Button onPressIn={() => onSelect()} text="Add to Drop" />
    </View>
  );
};

SearchListItem.propTypes = {
  onPressIn: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  desc: propTypes.string,
  uri: propTypes.string,
};

SearchListItem.defaultProps = {
  desc: null,
  uri: null,
};

const styles = EStyleSheet.create({
  avatar: { marginRight: 8 },
  listItem: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$unit',
    paddingVertical: '$unit / 2',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
  },
  textStyle: {
    color: '$textColor.primary',
    fontSize: 16,
  },
  secondaryTextStyle: {
    color: '$textColor.secondary',
    fontSize: 14,
  },
});
