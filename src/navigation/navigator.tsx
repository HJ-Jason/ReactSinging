import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ResearchScreen } from "../screens/ResearchScreen";
import { LyricsScreen } from "../screens/LyricsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Accueil" }}
          name="Research"
          component={ResearchScreen}
        />
        <Stack.Screen
          options={{ title: "Paroles" }}
          name="Lyrics"
          component={LyricsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
