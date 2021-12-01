import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { MoviesScreen } from "../screens/MoviesScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} initial={true} />
        <Drawer.Screen name="MoviesScreen" component={MoviesScreen} />
      </Drawer.Navigator>
    </>
  );
};

export const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
