import React from 'react';
import { Navigation } from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>      
        <Navigation />           
    </NavigationContainer>
  );
}

