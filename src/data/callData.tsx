import imagePath from '../constants/imagePath';
import VectorIcon from '../utils/VectorIcon';

export const callData = [
  {
    id: 1,
    image: imagePath.avatar,
    name: 'John Doe',
    message: 'Aug 11:30 AM',
    time: '11:30 AM',
    messageCount: 1,
    unread: true,
    rightIcon: (
      <VectorIcon type="Ionicons" name="call" size={24} color="green" />
    ),
    callIcon: 'missedCall',
  },

  {
    id: 2,
    image: imagePath.avatar,
    name: 'Jane Doe',
    message: 'Jul 15 minutes ago',
    time: '11:35 AM',
    messageCount: 0,
    unread: false,
    rightIcon: (
      <VectorIcon type="Ionicons" name="videocam" size={24} color="green" />
    ),
    callIcon: 'receivedCall',
  },

  {
    id: 3,
    image: imagePath.avatar,
    name: 'Alice Doe',
    message: 'Jan 15 minutes ago',
    time: '11:40 AM',
    messageCount: 2,
    unread: false,
    rightIcon: (
      <VectorIcon type="Ionicons" name="call" size={24} color="green" />
    ),
    callIcon: 'missedCall',
  },

  {
    id: 4,
    image: imagePath.avatar,
    name: 'Bob Doe',
    message: 'Mar 15 minutes ago',
    time: '11:45 AM',
    messageCount: 0,
    unread: true,
    rightIcon: (
      <VectorIcon type="Ionicons" name="videocam" size={24} color="green" />
    ),
    callIcon: 'receivedCall',
  },

  {
    id: 5,
    image: imagePath.avatar,
    name: 'Charlie Doe',
    message: 'Apr 15 minutes ago',
    time: '11:50 AM',
    messageCount: 0,
    unread: false,
    rightIcon: (
      <VectorIcon type="Ionicons" name="videocam" size={24} color="green" />
    ),
    callIcon: 'missedCall',
  },

  {
    id: 6,
    image: imagePath.avatar,
    name: 'David Doe',
    message: 'May 15 minutes ago',
    time: '11:55 AM',
    messageCount: 1,
    unread: false,
    rightIcon: (
      <VectorIcon type="Ionicons" name="videocam" size={24} color="green" />
    ),
    callIcon: 'receivedCall',
  },
];
