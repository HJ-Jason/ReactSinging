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
        <Stack.Screen name="Research" component={ResearchScreen} />
        <Stack.Screen name="Lyrics" component={LyricsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
