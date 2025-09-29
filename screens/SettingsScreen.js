import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useThemeToggle } from "../App";

export default function SettingsScreen() {
  const { darkMode, toggleTheme } = useThemeToggle();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        Configurações
      </Text>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          {darkMode ? "Mudar para Tema Claro" : "Mudar para Tema Escuro"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 14,
    backgroundColor: "lightsteelblue",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
});
