import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface ScreenWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
}

function ScreenWrapper(props: ScreenWrapperProps): React.JSX.Element {
  const {children, style} = props;
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default ScreenWrapper;
