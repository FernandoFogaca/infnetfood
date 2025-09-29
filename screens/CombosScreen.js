import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CombosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍽️ Combos especiais em breve!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee", justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
