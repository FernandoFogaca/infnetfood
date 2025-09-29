import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

export default function FavoritesScreen() {
  const [favoritos, setFavoritos] = useState([
    { id: "1", nome: "Kroket" },
    { id: "7", nome: "Stroopwafel" },
  ]);

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>

      {favoritos.length === 0 ? (
        <Text style={styles.empty}>Nenhum favorito ainda</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.nome}</Text>
              <Pressable
                style={styles.removeBtn}
                onPress={() => removerFavorito(item.id)}
              >
                <Text style={styles.removeText}>Remover</Text>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  empty: { fontSize: 16, color: "gray", textAlign: "center" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightsteelblue",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: { fontSize: 16, fontWeight: "600" },
  removeBtn: { padding: 6, backgroundColor: "tomato", borderRadius: 6 },
  removeText: { color: "white", fontWeight: "bold" },
});
