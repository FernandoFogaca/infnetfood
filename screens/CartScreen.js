
import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useApp } from "../App";

export default function CartScreen({ navigation }) {
  const { carrinho, setCarrinho, tema } = useApp();
  const isDark = tema === "dark";

  // agrupar  iguais
  const grouped = carrinho.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id);
    if (found) found.qtd += 1;
    else acc.push({ ...item, qtd: 1 });
    return acc;
  }, []);

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const removerItem = (id) => {
    setCarrinho(carrinho.filter((item, index) => index !== carrinho.findIndex(i => i.id === id)));
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Seu Carrinho</Text>

      {grouped.length === 0 ? (
        <Text style={{ color: isDark ? "#aaa" : "#555" }}>Carrinho vazio</Text>
      ) : (
        <>
          <FlatList
            data={grouped}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={{ color: isDark ? "#fff" : "#000" }}>
                  {item.nome} x{item.qtd} — €{(item.preco * item.qtd).toFixed(2)}
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

          <Pressable style={styles.checkoutBtn} onPress={() => navigation.navigate("Checkout")}>
            <Text style={styles.checkoutText}>Ir para Checkout</Text>
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
