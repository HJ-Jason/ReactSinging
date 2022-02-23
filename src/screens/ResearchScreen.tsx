import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Card, Headline, TextInput } from "react-native-paper";
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
        <View>
          <Headline style={styles.title}>
            Nagui ne serait pas fier de moi...
          </Headline>
        </View>
        <View style={styles.fields}>
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
          <Button style={styles.searchbutton} onPress={navigateToLyrics}>
            <Text style={styles.buttontext}>Rechercher</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    paddingTop: "20%",
    paddingLeft: "10%",
    paddingRight: "10%",
    fontWeight: "bold",
  },
  fields: {
    paddingTop: "20%",
    paddingBottom: "50%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  input: {
    borderTopRightRadius: 20,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "white",
  },
  searchbutton: {
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
    paddingVertical: 6,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttontext: {
    color: "white",
  },
});
