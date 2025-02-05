import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatHeader from '../components/molecules/chat/ChatHeader';
import Header from '../components/molecules/Header';
import MessageCard from '../components/molecules/messageCard';
import {ContactListData} from '../data/ContactListData';

export default function ContactList() {
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
