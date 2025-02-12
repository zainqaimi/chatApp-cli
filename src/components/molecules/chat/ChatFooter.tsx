import {View, TextInput, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import VectorIcon from '../../../utils/VectorIcon';
import {ThemeContext} from '../../../context/ThemeContext';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
type ChatFooterProps = {
  chatRef: any;
  userId: string | undefined;
};
const ChatFooter = ({chatRef, userId}: ChatFooterProps) => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);
  const {theme} = useContext(ThemeContext);
  const onChange = (value: any) => {
    setMessage(value);
    setSendEnable(true);
  };

  const onSend = () => {
    chatRef.collection('messages').add({
      body: message,
      sender: userId,
      timestamp: firestore.FieldValue.serverTimestamp(), // firebase timestamp
    });
    setMessage('');
    setSendEnable(false);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={[styles.leftContainer, {backgroundColor: theme.primary}]}>
        <View style={styles.row}>
          <VectorIcon
            type="MaterialCommunityIcons"
            name="sticker-emoji"
            size={24}
            color={theme.white}
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor={theme.textGrey}
            onChangeText={value => onChange(value)}
            style={styles.inputStyle}
            value={message}
          />
        </View>
        <View style={[styles.row, {gap: scale(20)}]}>
          <VectorIcon
            type="Entypo"
            name="attachment"
            size={18}
            color={theme.white}
          />
          {!sendEnable && (
            <VectorIcon
              type="FontAwesome"
              name="camera"
              size={18}
              color={theme.white}
            />
          )}
        </View>
      </View>
      <View style={[styles.rightContainer, {backgroundColor: theme.teal}]}>
        {sendEnable ? (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="send"
            size={25}
            color={theme.white}
            onPress={onSend}
          />
        ) : (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="microphone"
            size={25}
            color={theme.white}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: scale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: scale(25),
  },
  rightContainer: {
    padding: moderateScale(10),
    borderRadius: 50,
  },
  inputStyle: {
    fontSize: 17,
    color: 'white',
    marginLeft: scale(5),
  },
});

export default ChatFooter;
