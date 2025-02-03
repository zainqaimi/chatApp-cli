import React, {useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import imagePath from '../../constants/imagePath';
import VectorIcon from '../../utils/VectorIcon';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ThemeContext} from '../../context/ThemeContext';

export default function Header() {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <Image source={imagePath.textLogo} style={styles.textLogo} />
        <View style={styles.iconContainer}>
          <VectorIcon
            type="Ionicons"
            name="camera-outline"
            size={24}
            color={theme.secondary}
          />
          <VectorIcon
            type="Ionicons"
            name="search-outline"
            size={24}
            color={theme.secondary}
          />
          <VectorIcon
            type="MaterialCommunityIcons"
            name="dots-vertical"
            size={24}
            color={theme.secondary}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: th,
    padding: moderateScale(15),
  },
  textLogo: {
    width: scale(110),
    height: verticalScale(25),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(12),
  },
});
