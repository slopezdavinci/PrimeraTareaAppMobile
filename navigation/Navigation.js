import React from 'react';
import { MoviesScreen } from '../screens/MoviesScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const Navigation=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="MoviesScreen" component={MoviesScreen} />      
    </Drawer.Navigator>
  );
}