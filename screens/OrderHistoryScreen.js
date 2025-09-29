import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function OrderHistoryScreen() {
  // Pedidos mockados
  const [historico] = useState([
    {
      id: "101",
      itens: ["Kroket", "Chocomel"],
      total: 7.5,
      status: "Entregue",
      data: "26/09/2025",
    },
    {
      id: "102",
      itens: ["Frikandel", "Heineken"],
      total: 10.0,
      status: "Em preparo",
      data: "27/09/2025",
    },
    {
      id: "103",
      itens: ["Stroopwafel"],
      total: 4.0,
      status: "Cancelado",
      data: "28/09/2025",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Pedido #{item.id}</Text>
      <Text>Itens: {item.itens.join(", ")}</Text>
      <Text>Total: €{item.total.toFixed(2)}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Data: {item.data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Histórico de Pedidos</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "lightsteelblue",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
});
