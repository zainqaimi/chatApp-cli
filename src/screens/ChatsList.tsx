import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import MessageCard from '../components/molecules/messageCard';

const messageData = [
  {
    id: 1,
    image: imagePath.avatar,
    name: 'John Doe',
    message: 'Hello i am John',
    time: '11:30 AM',
    messageCount: 1,
    unread: true,
  },

  {
    id: 2,
    image: imagePath.avatar,
    name: 'Jane Doe',
    message: 'Hi there! How are you?',
    time: '11:35 AM',
    messageCount: 0,
    unread: false,
  },

  {
    id: 3,
    image: imagePath.avatar,
    name: 'Alice Doe',
    message: 'Nice to meet you!',
    time: '11:40 AM',
    messageCount: 2,
    unread: false,
  },

  {
    id: 4,
    image: imagePath.avatar,
    name: 'Bob Doe',
    message: "Hey, how's the weather today?",
    time: '11:45 AM',
    messageCount: 0,
    unread: true,
  },

  {
    id: 5,
    image: imagePath.avatar,
    name: 'Charlie Doe',
    message: "I'm feeling great! Thanks for asking.",
    time: '11:50 AM',
    messageCount: 0,
    unread: false,
  },

  {
    id: 6,
    image: imagePath.avatar,
    name: 'David Doe',
    message: "I've been working on this project for a while now.",
    time: '11:55 AM',
    messageCount: 1,
    unread: false,
  },

  {
    id: 7,
    image: imagePath.avatar,
    name: 'Emily Doe',
    message: "What about you? I'm excited too!",
    time: '12:00 PM',
    messageCount: 0,
    unread: true,
  },

  {
    id: 8,
    image: imagePath.avatar,
    name: 'Frank Doe',
    message: "I'm glad to hear that! How about you?",
    time: '12:05 PM',
    messageCount: 0,
    unread: false,
  },

  {
    id: 9,
    image: imagePath.avatar,
    name: 'Grace Doe',
    message: "I'm looking forward to it! Have a great day!",
    time: '12:10 PM',
    messageCount: 0,
    unread: true,
  },

  {
    id: 10,
    image: imagePath.avatar,
    name: 'Hannah Doe',
    message: "I'm excited too! What's your favorite color?",
    time: '12:15 PM',
    messageCount: 0,
    unread: true,
  },
];
export default function ChatsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messageData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.image}
            message={item.message}
            time={item.time}
            messageCount={item.messageCount}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
