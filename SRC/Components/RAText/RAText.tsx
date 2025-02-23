import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {RATextProps} from './types';

function RAText(props: RATextProps): React.JSX.Element {
  const {value, style, ...rest} = props;
  console.log('style',style);
  return (
    <Text style={[styles.container, style]} {...rest}>
      {value}
    </Text>
  );
}

export default RAText;
