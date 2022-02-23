import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

import { findLyrics } from "../hooks/findLyrics";

export const LyricsScreen = () => {
  const { isLoading, isError, data } = findLyrics();

  if (isLoading) {
    return <Text>loading</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView /*style={styles.safeContainer}*/>
      <Card>
        <Card.Content>
          <ScrollView>
            <Text>{data.lyrics}</Text>
          </ScrollView>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
