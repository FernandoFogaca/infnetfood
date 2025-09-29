import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native";

export default function ReviewsScreen() {
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(0);
  const [reviews, setReviews] = useState([]);

  const enviarReview = () => {
    if (!comentario || nota === 0) return;
    const nova = { id: Date.now().toString(), comentario, nota };
    setReviews([nova, ...reviews]);
    setComentario("");
    setNota(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliações</Text>

      <View style={styles.stars}>
        {[1,2,3,4,5].map((n) => (
          <Pressable key={n} onPress={() => setNota(n)}>
            <Text style={[styles.star, nota >= n && styles.starActive]}>★</Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Escreva seu comentário"
        value={comentario}
        onChangeText={setComentario}
      />

      <Pressable style={styles.btn} onPress={enviarReview}>
        <Text style={styles.btnText}>Enviar</Text>
      </Pressable>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Text style={styles.reviewStars}>{"★".repeat(item.nota)}</Text>
            <Text>{item.comentario}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  stars: { flexDirection: "row", marginBottom: 12 },
  star: { fontSize: 28, color: "gray", marginRight: 6 },
  starActive: { color: "gold" },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  btn: { backgroundColor: "steelblue", padding: 12, borderRadius: 6, alignItems: "center" },
  btnText: { color: "white", fontWeight: "bold" },
  reviewCard: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  reviewStars: { color: "gold", fontSize: 16 },
});
