// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import Header from '../components/molecules/Header';
// import MessageCard from '../components/molecules/messageCard';
// import {ContactListData} from '../data/ContactListData';
// import firestore from '@react-native-firebase/firestore';
// import imagePath from '../constants/imagePath';
// import {theme} from '../context/ThemeContext';
// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// type RootStackParamList = {
//   ChatScreen: undefined;
//   ContactList: {userId: string | undefined};
// };

// type NavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'ChatScreen',
//   'ContactList'
// >;
// type RoutePropType = RouteProp<RootStackParamList, 'ContactList'>;
// export default function ContactList() {
//   const [users, setUsers] = React.useState<
//     {id: string; name: string; userImg?: string}[]
//   >([]);
//   const navigation = useNavigation<NavigationProp>();
//   const route = useRoute<RoutePropType>();
//   const { userId } = route.params;
//   useEffect(() => {
//     getUserData();
//   }, []);

//   const getUserData = async () => {
//     try {
//       const userSnapshot = await firestore().collection('users').get();
//       const usersList = userSnapshot.docs.map(doc => {
//         const data = doc.data();
//         return {
//           id: doc.id,
//           name: data.name || 'Unknown',
//           userImg: data.userImg || imagePath.userImg,
//         };
//       });
//       setUsers(usersList);
//       console.log('Fetched Users:', usersList);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
//   const onNavigate = (contactId) => {
//     navigation.navigate('ChatScreen', {userId: userId ,contactId:contactId });
//   };

//   return (
//     <>
//       <Header
//         userImg={false}
//         showCamera={false}
//         title="Select Contact"
//         subTitle="256 Contacts"
//         logo={false}
//       />
//       <FlatList
//         data={users}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <MessageCard
//             name={item.name}
//             image={item.userImg}
//             onPress={()=>onNavigate(item.id)}
//           />
//         )}
//         style={styles.container}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.background,
//   },
// });
import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/molecules/Header';
import MessageCard from '../components/molecules/messageCard';
import firestore from '@react-native-firebase/firestore';
import imagePath from '../constants/imagePath';
import {theme} from '../context/ThemeContext';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  ChatScreen: {userId: string | undefined; user: any};
  ContactList: {userId: string | undefined};
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ChatScreen'>;
type RoutePropType = RouteProp<RootStackParamList, 'ContactList'>;

export default function ContactList() {
  const [users, setUsers] = React.useState<
    {id: string; name: string; userImg?: string}[]
  >([]);

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const {userId} = route.params;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userSnapshot = await firestore().collection('users').get();
      const usersList = userSnapshot.docs
        .filter(item => {
          return item.id != userId;
        })
        .map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || 'Unknown',
            userImg: data.userImg || imagePath.userImg,
          };
        });
      setUsers(usersList);
      console.log('Fetched Users:', usersList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const onNavigate = (user: any) => {
    navigation.navigate('ChatScreen', {userId: userId, user: user});
  };

  return (
    <>
      <Header
        userImg={false}
        showCamera={false}
        title="Select Contact"
        subTitle={users.length.toString() + ' ' + 'contacts'}
        logo={false}
      />
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MessageCard
            name={item.name}
            image={item.userImg}
            onPress={() => onNavigate(item)}
          />
        )}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
