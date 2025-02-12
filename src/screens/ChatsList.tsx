import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MessageCard from '../components/molecules/messageCard';
import {chatData} from '../data/ChatListData';
import VectorIcon from '../utils/VectorIcon';
import {theme, ThemeContext} from '../context/ThemeContext';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {getDeviceId} from '../utils/helper';
type RootStackParamList = {
  ChatScreen: undefined;
  ContactList: {userId: string | undefined};
};

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatScreen',
  'ContactList'
>;
export default function ChatsList() {
  const {theme} = useContext(ThemeContext);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const navigation = useNavigation<NavigationProp>();
  useEffect(() => {
    getDeviceId().then(id => setUserId(id));
  }, []);
  const onNavigate = () => {
    navigation.navigate('ChatScreen');
  };
  console.log('userId', userId);

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
            onPress={onNavigate}
          />
        )}
      />
      <TouchableOpacity
        activeOpacity={5}
        onPress={() => navigation.navigate('ContactList', {userId})}>
        <View style={styles.addBtn}>
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
    backgroundColor: theme.background,
  },
  addBtn: {
    position: 'absolute',
    bottom: verticalScale(50),
    right: moderateScale(20),
    backgroundColor: theme.tertiary,
    padding: moderateScale(16),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
