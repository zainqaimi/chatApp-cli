import {View, StyleSheet, Modal, Image, Text} from 'react-native';
import React from 'react';
import VectorIcon from './VectorIcon';
import {theme} from '../context/ThemeContext';
import ProgressBar from './ProgressBar';

interface FullModalProps {
  showStatusModal: {[key: string]: boolean};
  setShowStatusModal: React.Dispatch<
    React.SetStateAction<{[key: string]: boolean}>
  >;
  item: {
    id: string;
    userImg: any;
    name: string;
    storyImg: any;
    storyMsg: string;
  };
  setTimeUp: (value: boolean) => void;
}

const FullModal: React.FC<FullModalProps> = ({
  showStatusModal,
  setShowStatusModal,
  item,
  setTimeUp,
}) => {
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };

  return (
    <Modal
      animationType="fade"
      visible={showStatusModal[item.id]}
      onRequestClose={updateModalStatus}>
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.topContainer}>
          <View style={styles.profileSection}>
            <VectorIcon
              name="arrow-back"
              type="Ionicons"
              size={24}
              color={theme.white}
              onPress={updateModalStatus}
            />
            <Image source={item.userImg} style={styles.profileImg} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={theme.white}
            size={18}
          />
        </View>
        <Image source={item.storyImg} style={styles.storyImg} />
        <Text style={styles.storyMsg}>{item.storyMsg}</Text>
        <View style={styles.replySection}>
          <VectorIcon
            type="Entypo"
            name="chevron-small-up"
            color={theme.white}
            size={24}
            onPress={updateModalStatus}
          />
          <Text style={styles.reply}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  storyImg: {
    height: '75%',
    width: '100%',
  },
  storyMsg: {
    fontSize: 17,
    color: theme.white,
    textAlign: 'center',
  },
  container: {
    backgroundColor: theme.primary,
    height: '100%',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    color: theme.white,
    marginLeft: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reply: {
    fontSize: 15,
    color: theme.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  replySection: {
    alignItems: 'center',
  },
});

export default FullModal;
