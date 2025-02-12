import DeviceInfo from 'react-native-device-info';

export const getDeviceId = () => {
  try {
    const uniqueId = DeviceInfo.getUniqueId();
    return uniqueId;
  } catch (error) {
    console.log('Error getting deviceId:', error);
    throw error;
  }
};
