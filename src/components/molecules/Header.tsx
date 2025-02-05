// import React from 'react';
// import {Image, StyleSheet, View, Text} from 'react-native';
// import imagePath from '../../constants/imagePath';
// import VectorIcon from '../../utils/VectorIcon';
// import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
// import {theme, ThemeContext} from '../../context/ThemeContext';
// import {useNavigation} from '@react-navigation/native';

// interface HeaderProps {
//   showCamera?: boolean;
//   showSearch?: boolean;
//   showMenu?: boolean;
//   logo?: boolean;
//   title?: string;
//   subTitle?: string;
//   customIcons?: {type: string; name: string; color?: string}[];
//   userImg?: boolean;
// }

// export default function Header({
//   showCamera = true,
//   showSearch = true,
//   showMenu = true,
//   logo = true,
//   title,
//   subTitle,
//   customIcons = [],
//   userImg = false,
// }: HeaderProps) {
//   const navigation = useNavigation();

//   return (
//     <View style={[styles.container, {backgroundColor: theme.background}]}>
//       {/* Left Section: Logo or Title */}
//       <View style={styles.leftSection}>
//         {logo ? (
//           <Image source={imagePath.textLogo} style={styles.textLogo} />
//         ) : (
//           <>
//             <VectorIcon
//               type="Ionicons"
//               name="arrow-back"
//               size={24}
//               color={theme.white}
//               onPress={() => navigation.goBack()}
//               style={!userImg ? styles.backArrow : null}
//             />
//             <View>
//               <View style={styles.titleContainer}>
//                 {userImg ? (
//                   <Image source={imagePath.avatar} style={styles.avatar} />
//                 ) : null}
//                 <Text style={styles.title}>{title}</Text>
//               </View>
//               {subTitle && (
//                 <Text style={[styles.subTitle, {color: theme.textGrey}]}>
//                   {subTitle}
//                 </Text>
//               )}
//             </View>
//           </>
//         )}
//       </View>

//       {/* Right Section: Icons */}
//       <View style={styles.iconContainer}>
//         {showCamera && (
//           <VectorIcon
//             type="Ionicons"
//             name="camera-outline"
//             size={24}
//             color={theme.secondary}
//           />
//         )}
//         {showSearch && (
//           <VectorIcon
//             type="Ionicons"
//             name="search-outline"
//             size={24}
//             color={theme.secondary}
//           />
//         )}
//         {showMenu && (
//           <VectorIcon
//             type="MaterialCommunityIcons"
//             name="dots-vertical"
//             size={24}
//             color={theme.secondary}
//           />
//         )}
//         {customIcons.map((icon, index) => (
//           <VectorIcon
//             key={index}
//             type={icon.type}
//             name={icon.name}
//             size={24}
//             color={icon.color || theme.secondary}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: moderateScale(15),
//     alignItems: 'center',
//   },
//   leftSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   textLogo: {
//     width: scale(110),
//     height: verticalScale(25),
//   },
//   avatar: {
//     width: moderateScale(53),
//     height: moderateScale(53),
//     borderRadius: moderateScale(53),
//     marginLeft: moderateScale(10),
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: moderateScale(10),
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: theme.secondary,
//   },
//   subTitle: {
//     fontSize: 14,
//     marginLeft: moderateScale(5),
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: moderateScale(12),
//   },
//   backArrow: {
//     marginRight: moderateScale(15),
//   },
// });
import React, {useContext} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import VectorIcon from '../../utils/VectorIcon';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {theme, ThemeContext} from '../../context/ThemeContext';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  showCamera?: boolean;
  showSearch?: boolean;
  showMenu?: boolean;
  logo?: boolean;
  logoPath?: any; // Custom Logo Path
  title?: string;
  subTitle?: string;
  userImg?: boolean;
  userImgPath?: any; // Custom User Image Path
  customIcons?: {type: string; name: string; color?: string}[];
}

export default function Header({
  showCamera = true,
  showSearch = true,
  showMenu = true,
  logo = true,
  logoPath,
  title,
  subTitle,
  userImg = false,
  userImgPath,
  customIcons = [],
}: HeaderProps) {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* Left Section: Logo or Title */}
      <View style={styles.leftSection}>
        {logo ? (
          <Image source={logoPath} style={styles.textLogo} />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={!userImg ? styles.backArrow : null}>
              <VectorIcon
                type="Ionicons"
                name="arrow-back"
                size={24}
                color={theme.white}
              />
            </TouchableOpacity>
            <View>
              <View style={styles.titleContainer}>
                {userImg && userImgPath ? (
                  <Image source={userImgPath} style={styles.avatar} />
                ) : null}
                <Text style={styles.title}>{title}</Text>
              </View>
              {subTitle && (
                <Text style={[styles.subTitle, {color: theme.textGrey}]}>
                  {subTitle}
                </Text>
              )}
            </View>
          </>
        )}
      </View>

      {/* Right Section: Icons */}
      <View style={styles.iconContainer}>
        {showCamera && (
          <VectorIcon
            type="Ionicons"
            name="camera-outline"
            size={24}
            color={theme.secondary}
          />
        )}
        {showSearch && (
          <VectorIcon
            type="Ionicons"
            name="search-outline"
            size={24}
            color={theme.secondary}
          />
        )}
        {showMenu && (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="dots-vertical"
            size={24}
            color={theme.secondary}
          />
        )}
        {customIcons.map((icon, index) => (
          <VectorIcon
            key={index}
            type={icon.type}
            name={icon.name}
            size={24}
            color={icon.color || theme.secondary}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(15),
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogo: {
    width: scale(110),
    height: verticalScale(25),
  },
  avatar: {
    width: moderateScale(53),
    height: moderateScale(53),
    borderRadius: moderateScale(53),
    marginLeft: moderateScale(10),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.secondary,
  },
  subTitle: {
    fontSize: 14,
    marginLeft: moderateScale(5),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  backArrow: {
    marginRight: moderateScale(15),
  },
});
