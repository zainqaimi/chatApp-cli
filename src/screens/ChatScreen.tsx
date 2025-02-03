import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatBody from '../components/molecules/chat/ChatBody';
import ChatHeader from '../components/molecules/chat/ChatHeader';
import ChatFooter from '../components/molecules/chat/ChatFooter';
import imagePath from '../constants/imagePath';

export default function ChatScreen() {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={imagePath.wallPepper} style={styles.wallPepper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  );
}

const styles = StyleSheet.create({
  wallPepper: {
    flex: 1,
    resizeMode: 'cover',
  },
});
