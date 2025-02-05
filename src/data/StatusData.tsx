import imagePath from '../constants/imagePath';

export const statusData = [
  {
    id: 1,
    image: imagePath.avatar,
    name: 'John Doe',
    message: 'Hello i am John',
    time: '11:30 AM',
    messageCount: 1,
    unread: true,
  },

  {
    id: 2,
    image: imagePath.avatar,
    name: 'Jane Doe',
    message: 'Hi there! How are you?',
    time: '11:35 AM',
    messageCount: 0,
    unread: false,
  },

  {
    id: 3,
    image: imagePath.avatar,
    name: 'Alice Doe',
    message: 'Nice to meet you!',
    time: '11:40 AM',
    messageCount: 2,
    unread: false,
  },

  {
    id: 4,
    image: imagePath.avatar,
    name: 'Bob Doe',
    message: "Hey, how's the weather today?",
    time: '11:45 AM',
    messageCount: 0,
    unread: true,
  },

  {
    id: 5,
    image: imagePath.avatar,
    name: 'Charlie Doe',
    message: "I'm feeling great! Thanks for asking.",
    time: '11:50 AM',
    messageCount: 0,
    unread: false,
  },
];
