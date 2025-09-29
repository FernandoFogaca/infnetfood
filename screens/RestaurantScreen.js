import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function RestaurantScreen() {
  const restaurante = {
    nome: "Dutch Bites Amsterdam",
    endereco: "Damrak 32, Amsterdam, NL",
    descricao: "Comida holandesa típica servida com carinho. Experimente os melhores lanches de Amsterdã!",
    cardapio: [
      { id: "1", nome: "Kroket", preco: 3.5 },
      { id: "2", nome: "Bitterballen", preco: 5.0 },
      { id: "3", nome: "Frikandel", preco: 4.0 },
      { id: "4", nome: "Stroopwafel", preco: 2.5 },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurante.nome}</Text>
      <Text style={styles.endereco}>{restaurante.endereco}</Text>
      <Text style={styles.descricao}>{restaurante.descricao}</Text>

      <Text style={styles.subtitle}>Cardápio</Text>
      <FlatList
        data={restaurante.cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {item.nome} - €{item.preco.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
  endereco: { fontSize: 14, color: "gray", marginBottom: 8 },
  descricao: { fontSize: 16, marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  card: {
    padding: 14,
    marginBottom: 10,
    backgroundColor: "lightsteelblue",
    borderRadius: 8,
  },
  cardText: { fontSize: 16, fontWeight: "500" },
});
