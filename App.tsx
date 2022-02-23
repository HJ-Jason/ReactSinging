import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MyStack } from "./src/navigation/navigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { LyricsScreen } from "./src/screens/LyricsScreen";
import { ResearchScreen } from "./src/screens/ResearchScreen";

const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <MyStack />
      </PaperProvider>
    </QueryClientProvider>
  );
}
