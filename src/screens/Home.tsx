import {StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/molecules/Header';
import TopTabBar from '../navigation/TopTabBar';

export default function Home() {
  return (
    <>
      <Header />
      <TopTabBar />
    </>
  );
}

const styles = StyleSheet.create({});
