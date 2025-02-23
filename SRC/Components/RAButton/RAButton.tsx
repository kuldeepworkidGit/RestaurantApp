import React from 'react';
import {Pressable, TextStyle} from 'react-native';
import styles, {hollowContainerStyle, hollowTitleStyle} from './styles';
import RAText from '../RAText';
import {RAButtonProps} from './types';

export function RAButton(props: RAButtonProps): React.JSX.Element {
  const {title, style, type, styleTitle = {}, ...rest} = props;
  const containerStyle =
    type === 'hollow' ? hollowContainerStyle : styles.container;
  const titleStyle = (
    type === 'hollow' ? hollowTitleStyle : styles.title
  ) as TextStyle;
  console.log('style=>', {...titleStyle, ...styleTitle}, titleStyle);
  return (
    <Pressable style={[containerStyle, style]} {...rest}>
      <RAText value={title} style={[titleStyle, styleTitle]} />
    </Pressable>
  );
}
