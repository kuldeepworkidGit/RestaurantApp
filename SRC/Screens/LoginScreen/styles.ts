import {StyleSheet} from 'react-native';
import {Color, Font} from '../../Utils/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    backgroundColor: Color.themeColor,
    aspectRatio: 3 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: Font.PoppinsBold,
  },
  accountText: {
    fontSize: 20,
  },
  bottomContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  loginCreateText: {
    fontSize: 13,
    color: Color.grey,
  },
  loginButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  clickText: {
    fontSize: 11,
    color: Color.grey,
    marginLeft: 5,
  },
});

export default styles;
