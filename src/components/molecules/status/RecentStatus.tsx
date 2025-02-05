import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {RecentStatusData} from '../../../data/RecentStatusData';
import FullModal from '../../../utils/FullModal';
import {theme} from '../../../context/ThemeContext';
import MessageCard from '../messageCard';
import {moderateScale, scale} from 'react-native-size-matters';

const RecentStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState<any | null>(null);

  const viewStatus = (item: any) => {
    setSelectedStatus(item);
  };

  const closeModal = () => {
    setSelectedStatus(null);
  };

  return (
    <View>
      <Text style={styles.recentUpdates}>Recent updates</Text>
      <FlatList
        data={RecentStatusData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.storyImg}
            message={item.storyMsg}
            onPress={() => viewStatus(item)}
          />
        )}
      />

      {selectedStatus && (
        <FullModal
          setShowStatusModal={closeModal}
          item={{...selectedStatus, id: String(selectedStatus.id)}}
          showStatusModal={selectedStatus ? {[selectedStatus.id]: true} : {}}
          setTimeUp={closeModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  recentUpdates: {
    fontSize: 14,
    color: theme.textGrey,
    padding: moderateScale(10),
    backgroundColor: theme.background,
    paddingLeft: scale(20),
  },
});

export default RecentStatus;
