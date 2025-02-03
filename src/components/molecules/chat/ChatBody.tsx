import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ChatBody() {
  return (
    <View style={styles.container}>
      <Text>Chat Body</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
