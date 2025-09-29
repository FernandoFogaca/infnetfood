import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useCart } from "../App";

export default function ProductDetailScreen({ route, navigation }) {
  const { produto } = route.params;
  const { carrinho, setCarrinho } = useCart();

  const addCarrinho = () => {
    setCarrinho([...carrinho, produto]);
    navigation.goBack(); // volta para lista
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>Preço: €{produto.preco}</Text>

      <Pressable style={styles.btn} onPress={addCarrinho}>
        <Text style={styles.btnText}>Adicionar ao Carrinho</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 250, borderRadius: 12, marginBottom: 16 },
  nome: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  descricao: { fontSize: 16, marginBottom: 10, color: "#555" },
  preco: { fontSize: 18, fontWeight: "600", marginBottom: 20 },
  btn: {
    backgroundColor: "steelblue",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
