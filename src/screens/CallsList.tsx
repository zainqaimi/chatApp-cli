import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import MessageCard from '../components/molecules/messageCard';
import {callData} from '../data/callData';
import imagePath from '../constants/imagePath';
import {theme} from '../context/ThemeContext';

export default function CallsList() {
  return (
    <View style={styles.container}>
      <MessageCard
        name={'Create call link'}
        image={imagePath.linkIcon}
        message={'Share a link for your WhatsApp call'}
      />
      <Text style={styles.title}>Recent</Text>

      <FlatList
        data={callData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.image}
            message={item.message}
            rightIcon={item.rightIcon}
            callIcon={item.callIcon}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  plusIcon: {
    position: 'absolute',
    right: moderateScale(0),
    bottom: moderateScale(0),
  },
  title: {
    fontSize: moderateScale(15),
    fontWeight: 'semibold',
    marginLeft: scale(15),
    color: theme.textGrey,
    padding: moderateScale(5),
  },
});
