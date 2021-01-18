/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import {Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

//MenuDrawer
import MenuDrawer from './src/components/Navigation/Drawer';

const App = () => {
  //const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  );
};
export default App;
