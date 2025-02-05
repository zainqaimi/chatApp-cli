import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MessageCard from '../messageCard';
import imagePath from '../../../constants/imagePath';
import VectorIcon from '../../../utils/VectorIcon';
import {moderateScale} from 'react-native-size-matters';

export default function MyStatus() {
  return (
    <MessageCard
      name={'My Status'}
      image={imagePath.userImg}
      message={'Tap to add status update'}
      logoComponent={
        <VectorIcon
          type="AntDesign"
          name="pluscircle"
          size={24}
          color="green"
          style={styles.plusIcon}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  plusIcon: {
    position: 'absolute',
    right: moderateScale(0),
    bottom: moderateScale(0),
  },
});
