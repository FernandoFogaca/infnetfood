import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useApp } from "../App";

export default function ConfigScreen() {
  const { tema, setTema } = useApp();
  const isDark = tema === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Configurações
      </Text>

      <View style={styles.switchContainer}>
        <Text style={{ color: isDark ? "#fff" : "#000" }}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={() => setTema(isDark ? "light" : "dark")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  switchContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
});
