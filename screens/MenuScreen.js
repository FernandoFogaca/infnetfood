import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function MenuScreen({ navigation }) {
  const categories = ["Lanches", "Bebidas", "Sobremesas", "Combos"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Products", { category: item })}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "navy",
  },
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "lightsteelblue",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
});
