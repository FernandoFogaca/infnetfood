import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useApp } from "../App";

export default function ProfileScreen({ navigation }) {
  const { tema } = useApp();
  const isDark = tema === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
   
      <Image
        source={{
          uri: "https://st2.depositphotos.com/1007566/12301/v/450/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg",
        }}
        style={styles.avatar}
      />

      
      <Text style={[styles.name, { color: isDark ? "#fff" : "#000" }]}>
        Fernando Fogaca
      </Text>
      <Text style={[styles.email, { color: isDark ? "#ccc" : "#333" }]}>
        fernando@email.com
      </Text>

   
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Configurações")}
      >
        <Text style={styles.buttonText}>⚙️ Configurações</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Pedidos")}
      >
        <Text style={styles.buttonText}>📦 Meus Pedidos</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => alert("Logout realizado com sucesso!")}
      >
        <Text style={styles.buttonText}>🚪 Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 40,
  },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  email: { fontSize: 16, marginBottom: 20 },
  button: {
    backgroundColor: "steelblue",
    padding: 14,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
