import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';

import Swipes from './public/icons/Swipes/Swipes';
import SwipesColor from './public/icons/Swipes/SwipesColor';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStatusBarHeight: 100,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 2,
            tabBarIcon: ({focused}) =>
              focused ? <SwipesColor /> : <Swipes stroke={'#4F4F4F'} />,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
