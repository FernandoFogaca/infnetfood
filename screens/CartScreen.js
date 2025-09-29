import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useApp } from "../App";

export default function CartScreen({ navigation }) {
  const { carrinho, setCarrinho, pedidos, setPedidos, tema } = useApp();
  const isDark = tema === "dark";

  const total = carrinho.reduce((acc, item) => acc + item.preco * (item.qtd || 1), 0);

  const removerItem = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) return;

    setPedidos([
      ...pedidos,
      {
        id: Date.now().toString(),
        itens: carrinho,
        total,
      },
    ]);

   
    setCarrinho([]);

   
    navigation.navigate("Pedidos");
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Seu Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text style={{ color: isDark ? "#aaa" : "#555" }}>Carrinho vazio</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={{ color: isDark ? "#fff" : "#000" }}>
                  {item.nome} x{item.qtd || 1} — €{(item.preco * (item.qtd || 1)).toFixed(2)}
                </Text>
                <Pressable style={styles.removeBtn} onPress={() => removerItem(item.id)}>
                  <Text style={{ color: "#fff" }}>Remover</Text>
                </Pressable>
              </View>
            )}
          />

          <Text style={[styles.total, { color: isDark ? "#fff" : "#000" }]}>
            Total: €{total.toFixed(2)}
          </Text>

          <Pressable style={styles.checkoutBtn} onPress={finalizarPedido}>
            <Text style={styles.checkoutText}>Finalizar Pedido</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  removeBtn: { backgroundColor: "red", padding: 6, borderRadius: 5 },
  total: { fontSize: 18, marginVertical: 15 },
  checkoutBtn: {
    backgroundColor: "steelblue",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
