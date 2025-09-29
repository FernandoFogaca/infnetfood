import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useApp } from "../App";

export default function CheckoutScreen({ navigation }) {
  const { carrinho, setCarrinho, pedidos, setPedidos, tema } = useApp();
  const isDark = tema === "dark";

  // 🔥 padronizado para usar "qtd"
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * (item.qtd || 1),
    0
  );

  const confirmarPedido = () => {
    if (carrinho.length === 0) {
      Alert.alert("Atenção", "Seu carrinho está vazio!");
      return;
    }

    // adiciona pedido com ID único
    setPedidos([
      ...pedidos,
      {
        id: Date.now().toString(),
        itens: carrinho,
        total,
        data: new Date().toLocaleString(), // opcional: mostrar data/hora
      },
    ]);

    // limpa carrinho
    setCarrinho([]);

    Alert.alert("Sucesso", "Pedido realizado com sucesso!");
    navigation.navigate("Pedidos"); // vai direto para aba de pedidos
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Checkout
      </Text>
      <Text style={[styles.total, { color: isDark ? "#fff" : "#000" }]}>
        Total: €{total.toFixed(2)}
      </Text>

      <Pressable style={styles.button} onPress={confirmarPedido}>
        <Text style={styles.buttonText}>Confirmar Pedido</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  total: { fontSize: 18, marginBottom: 30 },
  button: {
    backgroundColor: "steelblue",
    padding: 14,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
