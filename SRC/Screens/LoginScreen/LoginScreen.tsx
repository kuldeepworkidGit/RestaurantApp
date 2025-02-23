import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../Components/ScreenWrapper';
import RAText from '../../Components/RAText';
import Hamburger from '../../Assets/icons/Hamburger';
import Strings from '../../Utils/Strings';
import {RAButton} from '../../Components/RAButton/RAButton';
import {TextInput} from 'react-native-gesture-handler';
import {Color} from '../../Utils/Typography';

function LoginScreen(): React.JSX.Element {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Hamburger />
          <RAText value="Order food online" style={styles.bannerText} />
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <RAText value={Strings.account} style={styles.accountText} />
            <RAText
              value={Strings.login_create_account}
              style={styles.loginCreateText}
            />
            <View style={{ marginTop: 20,}} />
            <RAText value={'Phone Number'.toLocaleUpperCase()} style={styles.loginCreateText}  />
            <TextInput
              style={{
                borderBottomWidth: 2,
                height: 54,
                backgroundColor: '#E8E8E8',
                paddingHorizontal: 10,
               
                borderRadius: 2,
                borderBottomColor: Color.themeColor,
              }}
              value={`+91 9354010866`}
            />
          </View>
          <View>
            <RAButton title={Strings.login} style={styles.loginButton} />
            <RAText
              value={`${Strings.by_clicking} ${Strings.tc} and ${Strings.privacy_policy}`}
              style={styles.clickText}
            />
            {/* <View style={{height: 1, backgroundColor: '#000', marginTop: 40}} /> */}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default LoginScreen;
