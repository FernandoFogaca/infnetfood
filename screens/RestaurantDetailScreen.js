
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Pressable, ScrollView } from "react-native";
import { useApp } from "../App";

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  const { carrinho, setCarrinho, tema } = useApp();
  const isDark = tema === "dark";

  const addCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
      <Image source={{ uri: restaurant.imagem }} style={styles.image} />

      <View style={styles.content}>
        <Text
          style={[
            styles.nome,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          {restaurant.nome}
        </Text>
        <Text style={[styles.endereco, { color: isDark ? "#aaa" : "#555" }]}>
          {restaurant.endereco}
        </Text>
        <Text style={[styles.descricao, { color: isDark ? "#ccc" : "#333" }]}>
          {restaurant.descricao}
        </Text>

        <Text
          style={[
            styles.menuTitle,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          Cardápio
        </Text>

        <FlatList
          data={restaurant.menu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text
                style={[styles.itemText, { color: isDark ? "#fff" : "#000" }]}
              >
                {item.nome} - €{item.preco.toFixed(2)}
              </Text>
              <Pressable
                style={styles.button}
                onPress={() => addCarrinho(item)}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%", height: 200 },
  content: { padding: 16 },
  nome: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  endereco: { fontSize: 14, marginBottom: 8 },
  descricao: { fontSize: 16, marginBottom: 16 },
  menuTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemText: { fontSize: 16 },
  button: {
    backgroundColor: "steelblue",
    padding: 8,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
