
import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useApp } from "../App";

export default function OrdersScreen() {
  const { pedidos, setPedidos, tema } = useApp();
  const isDark = tema === "dark";

  const removerPedido = (index) => {
    setPedidos(pedidos.filter((_, i) => i !== index));
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Meus Pedidos</Text>

      {pedidos.length === 0 ? (
        <Text style={{ color: isDark ? "#aaa" : "#555" }}>Nenhum pedido realizado</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.pedido}>
              <Text style={{ color: isDark ? "#fff" : "#000", fontWeight: "bold" }}>
                Pedido #{index + 1}
              </Text>
              <Text style={{ color: isDark ? "#fff" : "#000" }}>
                Endereço: {item.endereco}
              </Text>
              <Text style={{ color: isDark ? "#fff" : "#000" }}>
                Pagamento: {item.pagamento}
              </Text>

              {item.itens.map((p, idx) => (
                <Text key={idx} style={{ color: isDark ? "#fff" : "#000" }}>
                  - {p.nome} x1 — €{p.preco.toFixed(2)}
                </Text>
              ))}

              <Text style={{ marginTop: 5, color: isDark ? "#fff" : "#000" }}>
                Total: €{item.total.toFixed(2)}
              </Text>

              <Pressable style={styles.removeBtn} onPress={() => removerPedido(index)}>
                <Text style={{ color: "#fff" }}>Excluir Pedido</Text>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  pedido: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
  removeBtn: {
    backgroundColor: "red",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
