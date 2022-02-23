import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

import { useLyrics } from "../hooks/useLyrics";

export const LyricsScreen = (props: {
  route: { params: { artist: any; title: any } };
}) => {
  const { artist, title } = props.route.params;

  const { isLoading, isError, data } = useLyrics(artist, title);

  if (isLoading) {
    return (
      <SafeAreaView /*style={styles.safeContainer}*/>
        <Card style={styles.error}>
          <Card.Content>
            <ScrollView>
              <Text style={styles.texterror}>⌛ Chargement ⌛</Text>
            </ScrollView>
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  }
  if (isError) {
    return (
      <SafeAreaView /*style={styles.safeContainer}*/>
        <Card style={styles.error}>
          <Card.Content>
            <ScrollView>
              <Text style={styles.texterror}>
                ❌ Cette musique n'existe pas ou il y a une erreur dans
                l'orthographe ! ❌
              </Text>
            </ScrollView>
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView /*style={styles.safeContainer}*/>
      <Card style={styles.card}>
        <Card.Content>
          <ScrollView>
            <Text style={styles.cardtext}>{data.lyrics}</Text>
          </ScrollView>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
  cardtext: {
    textAlign: "center",
  },
  error: {
    padding: "10%",
    marginTop: "50%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  texterror: {
    textAlign: "center",
    justifyContent: "center",
  },
});
