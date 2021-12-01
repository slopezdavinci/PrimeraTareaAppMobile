import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { AuthContext } from "../context/AuthContext";


export const LoginScreen = ({ navigation }) => {

  const { setAuth } = useContext(AuthContext);
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "1039838624503-4krg7fnf0mk0ndludboug15j6m1lvir9.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      navigation.navigate("Drawer");      
      setAuth(response.authentication)     
    }
  }, [response]);

  return (
    <>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </>
  );
};
