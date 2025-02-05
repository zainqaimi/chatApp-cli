import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import VectorIcon from '../../../utils/VectorIcon';
import {ThemeContext} from '../../../context/ThemeContext';
import {MessagesData} from '../../../data/MessageData';

const ChatBody = () => {
  const scrollViewRef = useRef();
  const {theme} = React.useContext(ThemeContext);

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
      <View style={[styles.otherUserContainer, {backgroundColor: theme.teal}]}>
        <View
          style={[
            styles.otherUserInnerContainer,
            {backgroundColor: theme.primary},
          ]}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  const scrollToBottom = () => {
    // scrollViewRef.current.scrollToEnd({animated: true});
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef.current}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}>
        {MessagesData.map(item => (
          <>
            <UserMessageView message={item.message} time={item.time} />

            <OtherUserMessageView message={item.message} time={item.time} />
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View
          style={[styles.scrollDownArrow, {backgroundColor: theme.primary}]}>
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
    color: 'white',
  },
  time: {
    fontSize: 9,
    color: 'white',
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
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
