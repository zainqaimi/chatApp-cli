import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {theme} from '../../context/ThemeContext';
import VectorIcon from '../../utils/VectorIcon';

const MessageCard = ({
  image,
  name,
  message,
  time,
  messageCount,
  logoComponent,
  rightIcon,
  isMute,
  callIcon,
  onPress,
}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <View style={styles.leftContainer}>
        <View>
          <Image source={image} style={styles.img} />
          {logoComponent}
        </View>
        <View>
          <Text style={[styles.name, {color: theme.text}]}>{name}</Text>
          <View style={[callIcon ? styles.callIconContainer : null]}>
            {callIcon === 'missedCall' ? (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="phone-incoming"
                size={18}
                color={theme.red}
              />
            ) : callIcon === 'receivedCall' ? (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="phone-outgoing"
                size={18}
                color={theme.green}
              />
            ) : null}
            <Text style={[styles.message, {color: theme.text}]}>{message}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {time && <Text style={[styles.time, {color: theme.text}]}>{time}</Text>}
        {!!messageCount && (
          <View style={{flexDirection: 'row', gap: moderateScale(5)}}>
            {isMute ? (
              <VectorIcon
                type="FontAwesome"
                name="bell-slash-o"
                size={16}
                color={theme.secondary}
              />
            ) : null}

            <View
              style={[
                styles.messageCountContainer,
                {backgroundColor: theme.tertiary},
              ]}>
              <Text style={styles.messageCount}>{messageCount}</Text>
            </View>
          </View>
        )}
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    backgroundColor: theme.background,
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
  callIconContainer: {
    flexDirection: 'row',
    gap: moderateScale(5),
    marginTop: verticalScale(5),
  },
});

export default MessageCard;
