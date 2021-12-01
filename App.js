import "react-native-gesture-handler";
import React, { useState } from "react";
import { Navigator } from "./navigator/navigator";
import { AuthContext } from "./context/AuthContext";

const { Provider } = AuthContext;

export default function App() { 
  
  const [userInfo, setUserInfo] = useState([]);
  const [auth, setAuth] = useState([]);
  
  return (
    <Provider
      value={{userInfo, setUserInfo, auth, setAuth}}
    >
      <Navigator />
    </Provider>
  );
}
