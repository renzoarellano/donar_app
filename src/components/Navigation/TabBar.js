import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';

import HomeIcon from '../../assets/svg/inicio';

const Tab = createBottomTabNavigator();

const TabBar = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarTextFontFamily="ProximaNova-Regular"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? (
              <View>
                <HomeIcon width={25} height={25} style={{marginBottom: 2}} />
              </View>
            ) : (
              <View>
                <HomeIcon width={25} height={25} style={{marginBottom: 2}} />
              </View>
            );
          }
          return iconName;

          // You can return any component that you like here!
          //return <View style={{width: 25, height: 25}}> iconName </View>;
        },
      })}
      tabBarOptions={{
        style: styles.tabBarStyle,
        activeTintColor: '#EB8817',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: 'Inicio'}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{fontFamily: 'ProximaNova-Regular'}}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const dim = Dimensions.get('screen');

const width =
  dim.height >= dim.width
    ? Dimensions.get('window').width
    : Dimensions.get('window').height;
const height =
  dim.height >= dim.width
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#122E5C',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: height * 0.1,
    paddingVertical: 5,
    fontFamily: 'ProximaNova-Regular',
  },
});
