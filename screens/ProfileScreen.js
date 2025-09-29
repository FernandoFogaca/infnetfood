// screens/ProductsScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useApp } from "../App";

export default function ProductsScreen({ route }) {
  const { category } = route.params;
  const { carrinho, setCarrinho, tema } = useApp();
  const isDark = tema === "dark";

  // Produtos de exemplo
  const produtosMock = {
    Snacks: [
      { nome: "Kroket", preco: 4 },
      { nome: "Frikandel", preco: 3.5 },
      { nome: "Bitterballen", preco: 5 },
    ],
    Drinks: [
      { nome: "Heineken", preco: 4 },
      { nome: "Café Holandês", preco: 3 },
      { nome: "Chocomel", preco: 3.5 },
    ],
    Desserts: [
      { nome: "Stroopwafel", preco: 2 },
      { nome: "Appeltaart", preco: 4 },
      { nome: "Vla", preco: 3 },
    ],
    Combos: [
      { nome: "Combo Amsterdam", preco: 15 },
      { nome: "Combo Rotterdam", preco: 18 },
    ],
  };

  const produtos = produtosMock[category] || [];

  const addToCart = (item) => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>{category}</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? "#222" : "#f9f9f9" }]}>
            <Text style={[styles.name, { color: isDark ? "#fff" : "#000" }]}>{item.nome}</Text>
            <Text style={[styles.price, { color: isDark ? "#ccc" : "#333" }]}>€{item.preco.toFixed(2)}</Text>
            <Pressable style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { fontSize: 16, marginVertical: 8 },
  button: {
    backgroundColor: "steelblue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
