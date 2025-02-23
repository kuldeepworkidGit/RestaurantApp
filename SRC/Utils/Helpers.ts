import {Platform} from 'react-native';

export const platformSelect = <T>(ios: T, android: T): T => {
  return Platform.OS === 'ios' ? ios : android;
};
