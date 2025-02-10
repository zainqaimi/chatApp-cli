import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/molecules/Header';
import MessageCard from '../components/molecules/messageCard';
import {ContactListData} from '../data/ContactListData';
import firestore from '@react-native-firebase/firestore';
export default function ContactList() {
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userSnapshot = await firestore().collection('users').get();
      const usersList = userSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      // setUsers(usersList);
      console.log('Fetched Users:', usersList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <Header
        userImg={false}
        showCamera={false}
        title="Select Contact"
        subTitle="256 Contacts"
        logo={false}
      />
      <FlatList
        data={ContactListData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard name={item.name} image={item.userImg} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({});
