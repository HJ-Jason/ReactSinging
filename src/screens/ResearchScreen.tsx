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
    <View>
      <View>
        <Headline>Rechercher des paroles</Headline>
      </View>
      <View>
        <TextInput
          placeholder="Artiste"
          placeholderTextColor="black"
          /*style={styles.input}*/
          autoComplete={true}
          value={artist}
          onChangeText={(text) => setArtist(text)}
        />
        <TextInput
          placeholder="Titre"
          placeholderTextColor="black"
          /*style={styles.input}*/
          autoComplete={true}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <Button onPress={navigateToLyrics}>Rechercher</Button>
    </View>
  );
}
