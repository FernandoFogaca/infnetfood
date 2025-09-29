
import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../App";

export default function HomeScreen({ navigation }) {
  const { tema } = useApp();
  const isDark = tema === "dark";

  const categorias = [
    { id: "1", nome: "Snacks", destino: "Produtos", icon: "fast-food" },
    { id: "2", nome: "Drinks", destino: "Produtos", icon: "beer" },
    { id: "3", nome: "Desserts", destino: "Produtos", icon: "ice-cream" },
    { id: "4", nome: "Combos", destino: "Produtos", icon: "restaurant" },
    { id: "5", nome: "Mapa", destino: "Mapa", icon: "map" },
    { id: "6", nome: "Configurações", destino: "Configurações", icon: "settings" },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#eee" },
      ]}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: isDark ? "#222" : "#fff" },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: isDark ? "#fff" : "#111" },
          ]}
        >
          Categorias
        </Text>

        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.button}
              onPress={() =>
                navigation.navigate(item.destino, { category: item.nome })
              }
            >
              <Ionicons
                name={item.icon}
                size={22}
                color="white"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.buttonText}>{item.nome}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 25,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
