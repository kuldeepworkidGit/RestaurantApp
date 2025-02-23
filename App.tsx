import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './SRC/Redux/Store/store';
import RAStack from './SRC/Routes/StackNav';
import DishItem from './SRC/Components/DishItem/DishItem';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <NavigationContainer theme={navTheme}>
          {/* <RAStack /> */}
          <DishItem/>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
