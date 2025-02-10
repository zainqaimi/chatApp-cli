import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import ChatBody from '../components/molecules/chat/ChatBody';
import ChatFooter from '../components/molecules/chat/ChatFooter';
import imagePath from '../constants/imagePath';
import Header from '../components/molecules/Header';

export default function ChatScreen() {
  return (
    <>
      {/* <ChatHeader /> */}
      <Header
        logo={false}
        title="Sameer"
        userImg={true}
        userImgPath={imagePath.avatar}
      />
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
