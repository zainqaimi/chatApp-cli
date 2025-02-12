// import {ImageBackground, StyleSheet} from 'react-native';
// import React from 'react';
// import ChatBody from '../components/molecules/chat/ChatBody';
// import ChatFooter from '../components/molecules/chat/ChatFooter';
// import imagePath from '../constants/imagePath';
// import Header from '../components/molecules/Header';

// export default function ChatScreen() {
//   return (
//     <>
//       {/* <ChatHeader /> */}
//       <Header
//         logo={false}
//         title="Sameer"
//         userImg={true}
//         userImgPath={imagePath.avatar}
//       />
//       <ImageBackground source={imagePath.wallPepper} style={styles.wallPepper}>
//         <ChatBody />
//       </ImageBackground>
//       <ChatFooter />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   wallPepper: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
// });

import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import ChatBody from '../components/molecules/chat/ChatBody';
import ChatFooter from '../components/molecules/chat/ChatFooter';
import imagePath from '../constants/imagePath';
import Header from '../components/molecules/Header';
import {RouteProp, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

type RootStackParamList = {
  ChatScreen: {userId: string | undefined; user: any};
};

type RoutePropType = RouteProp<RootStackParamList, 'ChatScreen'>;

export default function ChatScreen() {
  const route = useRoute<RoutePropType>();
  const {userId, user} = route.params;
  const contactId = user.id;

  console.log('User ID:', userId);
  console.log('Contact ID:', contactId);
  const generateChatId = () => {
    const sortedUserIds = [userId, contactId].sort();
    const chatId = sortedUserIds.join('_');
    return chatId;
  };
  const chatId = generateChatId();
  const chatRef = firestore().collection('chats').doc(chatId);
  const userRef = firestore().collection('users').doc(userId);
  const contactUserRef = firestore().collection('users').doc(contactId);
  const createChatRoom = async () => {
    const chatSnapshot = await chatRef.get();
    if (!chatSnapshot.exists) {
      const participants = [userRef, contactUserRef];
      await chatRef.set({
        participants,
      });
    }
  };
  createChatRoom();
  return (
    <>
      <Header
        logo={false}
        title={user.name}
        userImg={true}
        userImgPath={imagePath.userImg} // back me user ki image set nh is liye
      />
      <ImageBackground source={imagePath.wallPepper} style={styles.wallPepper}>
        <ChatBody chatId={chatId} userId={userId} />
      </ImageBackground>
      <ChatFooter chatRef={chatRef} userId={userId} />
    </>
  );
}

const styles = StyleSheet.create({
  wallPepper: {
    flex: 1,
    resizeMode: 'cover',
  },
});
