import {TextProps, TextStyle} from 'react-native';

export interface RATextProps extends TextProps {
  value: string;
  style?: TextStyle | TextStyle[];
}
