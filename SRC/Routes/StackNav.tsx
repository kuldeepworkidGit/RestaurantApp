import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import {SCREEN_NAME} from '../Utils/Constants';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

function RAStack(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default RAStack;
