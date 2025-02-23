import {StyleSheet} from 'react-native';
import {Color} from '../../Utils/Typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.themeColor,
    borderRadius: 2,
    paddingVertical: 15,
  },
  title: {
    color: Color.white,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '500',
  },
  containerHollow: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.themeColor,
  },
  titleHollow: {
    color: Color.themeColor,
  },
});
export const hollowContainerStyle = StyleSheet.compose(
  styles.container,
  styles.containerHollow,
);
export const hollowTitleStyle = StyleSheet.compose(
  styles.title,
  styles.titleHollow,
);

export default styles;
