import React from 'react'

import { StyleSheet, TouchableWithoutFeedback, } from 'react-native'

import { View, Typography, Image, } from 'ui';

import { unit, canvas2, } from 'themes'

const LIST_ITEM_AVATAR = 48

const styles = StyleSheet.create({
  contactListItem: {
    paddingLeft: unit,
    paddingRight: unit,
    paddingTop: unit,
    paddingBottom: unit,
    flexDirection: 'row',
    width: '100%',
  },
  contactListItemAvatar: {
    backgroundColor: canvas2,
    marginLeft: unit,
    marginRight: unit,
    // paddingLeft: unit,
    // paddingRight: unit,
    // paddingTop: unit,
    // paddingBottom: unit,
    height: LIST_ITEM_AVATAR,
    width: LIST_ITEM_AVATAR,
    borderRadius: LIST_ITEM_AVATAR/2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contactListItemText: {
    paddingLeft: unit,
    paddingRight: unit,
    paddingTop: unit,
    paddingBottom: unit,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

class Contact extends React.Component {
  render() {
    const { recordID, givenName, familyName, } = this.props;

    return (
      <TouchableWithoutFeedback key={recordID} onPress={() => alert('alright')}>
        <View style={styles.contactListItem}>
          <View style={styles.contactListItemAvatar}>
              <Typography variant={'subtitle2'}>
                {givenName[0].toUpperCase()}
              </Typography>

              <Typography variant={'subtitle2'}>
                {familyName[0].toUpperCase()}
              </Typography>
          </View>

          <View style={styles.contactListItemText}>
            <Typography style={{ marginRight: unit/2 }}>
              {givenName}
            </Typography>

            <Typography>
              {familyName}
            </Typography>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Contact
