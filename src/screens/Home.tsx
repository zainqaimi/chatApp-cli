import {StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/molecules/Header';
import TopTabBar from '../navigation/TopTabBar';
import imagePath from '../constants/imagePath';

export default function Home() {
  return (
    <>
      <Header logoPath={imagePath.textLogo} />
      <TopTabBar />
    </>
  );
}

const styles = StyleSheet.create({});
