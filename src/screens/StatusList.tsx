import {StyleSheet, View} from 'react-native';
import React from 'react';
import {theme} from '../context/ThemeContext';
import MyStatus from '../components/molecules/status/MyStatus';
import RecentStatus from '../components/molecules/status/RecentStatus';
import ViewedStatus from '../components/molecules/status/VeiwedStatus';

export default function StatusList() {
  return (
    <View style={styles.container}>
      <MyStatus />
      <RecentStatus />
      <ViewedStatus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
