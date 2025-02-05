import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {ViewedStatusData} from '../../../data/ViewedStatusData';
import {theme} from '../../../context/ThemeContext';
import MessageCard from '../messageCard';
import {moderateScale, scale} from 'react-native-size-matters';

const ViewedStatus = () => {
  return (
    <View>
      <Text style={styles.recentUpdates}>Viewed updates</Text>
      <FlatList
        data={ViewedStatusData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.storyImg}
            time={item.time}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentUpdates: {
    fontSize: 14,
    color: theme.textGrey,
    padding: moderateScale(10),
    paddingLeft: scale(10),
  },
});

export default ViewedStatus;
