import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import SignIn from "./screens/SignIn";
import SigngUp from "./screens/SigngUp";
import COLORS from "./src/consts/colors";

const App = () => {
  const Stack = createNativeStackNavigator();

  const Navigator = () => {
    const [user] = React.useState("true");

    if (!user) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SigngUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.dark} />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
