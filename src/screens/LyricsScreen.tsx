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
    return <Text>loading</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
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
});
