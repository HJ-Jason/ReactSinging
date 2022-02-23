import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Headline, TextInput } from "react-native-paper";
import { Routes } from "../navigation/Routes";

export function ResearchScreen({ navigation }: any) {
  const [artist, setArtist] = React.useState("");
  const [title, setTitle] = React.useState("");

  function navigateToLyrics() {
    navigation.navigate(Routes.LYRICS_SCREEN, { artist, title });
  }

  return (
    <View style={styles.container}>
      <View>
        <Headline>Rechercher des paroles</Headline>
      </View>
      <View>
        <TextInput
          selectionColor="black"
          placeholder="Entrer le nom de l'artiste"
          style={styles.input}
          autoComplete={true}
          value={artist}
          onChangeText={(text) => setArtist(text)}
        />
        <TextInput
          selectionColor="black"
          placeholder="Entrer le titre de la chanson"
          style={styles.input}
          autoComplete={true}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <Button onPress={navigateToLyrics}>Rechercher</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    borderTopRightRadius: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
