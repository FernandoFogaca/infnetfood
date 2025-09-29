
import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";

export default function MapScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Região de Entrega - Amsterdam</Text>

  
      <Image
        source={{
          uri: "https://dicasdeamsterda.com.br/wp-content/uploads/sites/6/2016/01/Mapa-turistico-de-Amsterda.jpg",
        }}
        style={styles.mapImage}
      />

      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant: {
              nome: "De Kas",
              imagem:
                "https://restaurantdekas.com/app/uploads/2023/07/restaurant-dekas.jpg",
              endereco:
                "Kamerlingh Onneslaan 3, 1097 DE Amsterdam, Netherlands",
              descricao:
                "Restaurante dentro de uma estufa, farm-to-table com ingredientes locais.",
              menu: [
                { nome: "Salada da Estufa", preco: 12 },
                { nome: "Prato Vegetariano Sazonal", preco: 18 },
                { nome: "Sobremesa Artesanal", preco: 8 },
              ],
            },
          })
        }
      >
        <Text style={styles.cardTitle}>🍴 Restaurante De Kas</Text>
        <Text style={styles.cardSubtitle}>Clique para ver detalhes</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "gray", marginTop: 4 },
});
