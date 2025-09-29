import React from "react";
import { View, Text, FlatList, Image, Pressable, StyleSheet } from "react-native";
import { useApp } from "../App";
import { restaurantes } from "./RestaurantDetailScreen"; 

export default function RestaurantScreen({ navigation }) {
  const { tema } = useApp();
  const isDark = tema === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#eee" }]}>
      <FlatList
        data={restaurantes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: isDark ? "#222" : "#fff" }]}
            onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={[styles.name, { color: isDark ? "#fff" : "#000" }]}>{item.nome}</Text>
              <Text style={[styles.address, { color: isDark ? "#bbb" : "#555" }]}>{item.endereco}</Text>
              <Text style={[styles.desc, { color: isDark ? "#ddd" : "#333" }]} numberOfLines={2}>
                {item.descricao}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    flexDirection: "row",
    marginBottom: 12,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  address: { fontSize: 14, marginTop: 2 },
  desc: { fontSize: 13, marginTop: 4 },
});
