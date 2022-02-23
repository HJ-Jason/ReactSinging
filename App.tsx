import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MyStack } from "./src/navigation/navigator";
import { LyricsScreen } from "./src/screens/LyricsScreen";
import { ResearchScreen } from "./src/screens/ResearchScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyStack />
    </QueryClientProvider>
  );
}
