import {PressableProps, TextStyle, ViewStyle} from 'react-native';

export interface RAButtonProps extends PressableProps {
  title: string;
  style?: ViewStyle;
  type?: 'filled' | 'hollow';
  styleTitle?: TextStyle;
}
