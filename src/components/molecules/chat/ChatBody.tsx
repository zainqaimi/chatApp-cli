import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import VectorIcon from '../../../utils/VectorIcon';
import {theme} from '../../../context/ThemeContext';
type ChatBodyProps = {
  chatId: string;
  userId: string | undefined;
};
type Message = {
  sender: string;
  body: string;
  timestamp: any;
};
const ChatBody = ({chatId, userId}: ChatBodyProps) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot(snapShot => {
        const allMessages = snapShot.docs.map(snap => {
          const data = snap.data();
          return {
            sender: data.sender,
            body: data.body,
            timestamp: data.timestamp,
          };
        });
        setMessages(allMessages);
      });
  }, []);

  const UserMessageView = ({message, time}: any) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={theme.blue}
            size={12}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    );
  };

  const OtherUserMessageView = ({message, time}: any) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}>
        {messages.map((item, index) => (
          <View key={index}>
            {item.sender === userId ? (
              <UserMessageView
                message={item.body}
                time={item.timestamp?.toDate().toDateString()}
              />
            ) : (
              <OtherUserMessageView
                message={item.body}
                time={item.timestamp?.toDate().toDateString()}
              />
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={12}
            color={theme.white}
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: theme.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: theme.white,
  },
  time: {
    fontSize: 9,
    color: theme.white,
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: theme.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
    backgroundColor: theme.primary,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ChatBody;
