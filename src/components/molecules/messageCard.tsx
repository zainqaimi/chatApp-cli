import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const MessageCard = ({
  image,
  name,
  message,
  time,
  messageCount,
  logoComponent,
  rightIcon,
  unread,
}: any) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <View style={styles.leftContainer}>
        <View>
          <Image source={image} style={styles.img} />
          {logoComponent}
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {time && <Text style={styles.time}>{time}</Text>}
        {!!messageCount && (
          <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>{messageCount}</Text>
          </View>
        )}
        {rightIcon}
      </View>
      {/* <View style={styles.unread}></View> */}
    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  rightContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: moderateScale(5),
  },
  img: {
    width: moderateScale(53),
    height: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'black',
    lineHeight: verticalScale(18),
  },
  message: {
    fontSize: moderateScale(12),
    color: 'gray',
    maxWidth: moderateScale(200),
    lineHeight: verticalScale(18),
  },
  time: {
    fontSize: moderateScale(10),
    color: 'black',
    marginLeft: moderateScale(3),
    lineHeight: verticalScale(18),
  },
  messageCountContainer: {
    backgroundColor: 'green',
    borderRadius: moderateScale(12),
    width: moderateScale(20),
    height: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(3),
    lineHeight: verticalScale(18),
    fontSize: moderateScale(10),
  },
  messageCount: {
    color: 'white',
    fontSize: moderateScale(10),
    fontWeight: 'semibold',
    lineHeight: verticalScale(18),
  },
  unread: {},
});
