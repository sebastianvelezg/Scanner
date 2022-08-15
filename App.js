import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import Scanner from "./screens/Scanner";
import Home from "./screens/Home";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createStackNavigator();

function App() {
  return (
    <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </TailwindProvider>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
