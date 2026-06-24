import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./screens/MenuScreen";
import TarjetasScreen from "./screens/TarjetasScreen";
import SafeAreaScreen from "./screens/SafeAreaScreen";
import PressableScreen from "./screens/PressableScreen";
import TextInputScreen from "./screens/TextInputScreen";
import ActivityIndicatorScreen from "./screens/ActivityIndicatorScreen";
import ImageBackgroundScreen from "./screens/ImageBackgroundScreen";
import FlatListScreen from "./screens/FlatListScreen";
import ModalScreen from "./screens/ModalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: { backgroundColor: "#1a1a2e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Componentes RN" }}
        />
        <Stack.Screen
          name="Tarjetas"
          component={TarjetasScreen}
          options={{ title: "Tarjetas" }}
        />
        <Stack.Screen
          name="SafeArea"
          component={SafeAreaScreen}
          options={{ title: "SafeAreaView" }}
        />
        <Stack.Screen
          name="Pressable"
          component={PressableScreen}
          options={{ title: "Pressable" }}
        />
        <Stack.Screen
          name="TextInput"
          component={TextInputScreen}
          options={{ title: "TextInput" }}
        />
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicatorScreen}
          options={{ title: "ActivityIndicator" }}
        />
        <Stack.Screen
          name="ImageBackground"
          component={ImageBackgroundScreen}
          options={{ title: "ImageBackground" }}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListScreen}
          options={{ title: "FlatList" }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ title: "Modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
