import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import imagePath from '../constants/imagePath';
import {ThemeContext} from '../context/ThemeContext';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function Community() {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Image source={imagePath.communityImage} style={styles.img} />
      <Text style={[styles.text, {color: theme.text}]}>
        Introducing Community
      </Text>
      <Text style={[styles.subText, {color: theme.text}]}>
        Join our community and connect with fellow users Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Cumque, illum!
      </Text>
      <TouchableOpacity>
        <Text
          style={[
            styles.buttonText,
            {color: theme.text, backgroundColor: theme.tertiary},
          ]}>
          Join Community
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(10),
    width: '100%',
  },
  img: {
    width: scale(210),
    height: verticalScale(150),
    resizeMode: 'contain',
  },
  text: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: verticalScale(10),
  },
  subText: {
    fontSize: scale(14),
    marginTop: verticalScale(5),
    lineHeight: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    textAlign: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    fontWeight: 'bold',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(80),
    borderRadius: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
