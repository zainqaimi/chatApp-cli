import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import VectorIcon from '../../../utils/VectorIcon';
import {ThemeContext} from '../../../context/ThemeContext';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import imagePath from '../../../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

export default function ChatHeader() {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.leftContainer}>
        <VectorIcon
          type="Ionicons"
          name="arrow-back"
          size={24}
          color={theme.white}
          onPress={() => navigation.goBack()}
        />
        <Image source={imagePath.avatar} style={styles.avatar} />
        <Text style={[styles.name, {color: theme.white}]}>John Doe</Text>
      </View>
      <View style={styles.iconContainer}>
        <VectorIcon
          type="AntDesign"
          name="videocamera"
          size={24}
          color={theme.secondary}
        />
        <VectorIcon
          type="Ionicons"
          name="call-outline"
          size={24}
          color={theme.secondary}
        />
        <VectorIcon
          type="MaterialCommunityIcons"
          name="dots-vertical"
          size={26}
          color={theme.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(10),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(7),
  },
  avatar: {
    width: moderateScale(53),
    height: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'semibold',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(10),
  },
});
