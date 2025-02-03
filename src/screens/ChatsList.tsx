import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import imagePath from '../constants/imagePath';
import MessageCard from '../components/molecules/messageCard';
import {chatData} from '../data/ChatListData';
import VectorIcon from '../utils/VectorIcon';
import {ThemeContext} from '../context/ThemeContext';
import {moderateScale, verticalScale} from 'react-native-size-matters';

export default function ChatsList() {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.image}
            message={item.message}
            time={item.time}
            messageCount={item.messageCount}
            isMute={item.mute}
          />
        )}
      />
      <TouchableOpacity activeOpacity={5}>
        <View style={[styles.addBtn, {backgroundColor: theme.tertiary}]}>
          <VectorIcon
            type="MaterialCommunityIcons"
            name="message-plus"
            size={20}
            color={theme.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addBtn: {
    position: 'absolute',
    bottom: verticalScale(30),
    right: moderateScale(15),
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
