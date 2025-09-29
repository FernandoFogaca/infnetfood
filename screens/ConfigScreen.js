import React from "react";
import { View, Text, StyleSheet, Switch, Pressable } from "react-native";
import { useApp } from "../App";

export default function ConfigScreen({ navigation }) {
  const { tema, setTema } = useApp();
  const isDark = tema === "dark";

  const [logado, setLogado] = React.useState(true);

  const handleLogout = () => {
    setLogado(false);
    navigation.replace("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
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

      {logado && (
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  switchContainer: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 30 },
  logoutBtn: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
