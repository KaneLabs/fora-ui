import React from 'react';
import { AsyncStorage, FlatList, View } from 'react-native';

import Contacts from 'react-native-contacts';

import { Contact, Typography } from 'ui'

import { unit } from 'themes'

const getContactsFromCache = async contacts => {
  try {
    const contactsJSON = await AsyncStorage.getItem('contacts');

    const contacts = JSON.parse(contactsJSON);

    return contacts;
  } catch (e) {
    console.log('error caching contacts', e);
    return [];
  }
};

const getAllContactsPromise = () => new Promise((resolve, reject) => {
  return Contacts.getAllWithoutPhotos((err, contacts) => {
    if (err) reject(err);

    const lightContacts = contacts.map(contact => {
      return {
        recordID: contact.recordID,
        givenName: contact.givenName,
        familyName: contact.familyName,
      }
    })

    resolve(lightContacts);
  })
});


const getContactsFromDB = async () => {
  try {
    const contacts = await getAllContactsPromise();

    return contacts;
  } catch (e) {
    console.log('getContactsFromDB error', e);
  }
}


const cacheContacts = async contacts => {
  try {
    await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('contacts', contacts);
    return true;
  } catch (e) {
    console.log('error caching contacts', e);
    return false;
  }
};


class ContactList extends React.Component {
  state = { contacts: [] }

  componentDidMount = async () => {

    // reading contacts from db takes a while, prefer contacts from cache
    const cachedContacts = await getContactsFromCache();
    if (cachedContacts && cachedContacts.length === 0) {
      // update cache after initial load
      return this.setState({ contacts: cachedContacts }, async () => {
        const contacts = await this.readAndCache();
        contacts.map()
        return this.setState({ contacts });
      });
    }


    const contacts = await this.readAndCache();
    return this.setState({ contacts });
  }

  readAndCache = async () => {
    const contacts = await getContactsFromDB()
    await cacheContacts(contacts);
    return contacts;
  }

  render() {
    return (
      <FlatList
        style={{ flex: 1, width: '100%', paddingTop: unit, paddingBottom: unit, }}
        data={this.state.contacts}
        renderItem={({ item = {} }) => {
          return ( <Contact {...item} /> )
        }}
      />
    );
  }
}

export default ContactList;
