import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { useApp } from "../App";

// === LISTA DE RESTAURANTES ===
export const restaurantes = [
  {
    nome: "De Kas",
    imagem: "https://www.amsterdamnow.com/app/uploads/2017/10/DeKasx.jpg",
    endereco: "Kamerlingh Onneslaan 3, 1097 DE Amsterdam",
    descricao: "Restaurante dentro de uma estufa, farm-to-table com ingredientes locais.",
    menu: [
      { nome: "Salada da Estufa", preco: 12 },
      { nome: "Prato Vegetariano Sazonal", preco: 18 },
      { nome: "Sobremesa Artesanal", preco: 8 },
    ],
  },
  {
    nome: "The Seafood Bar",
    imagem: "https://theseafoodbar.com/wp-content/uploads/2024/07/tripadvisor_homepage_2.jpg",
    endereco: "Van Baerlestraat 5, 1071 AL Amsterdam",
    descricao: "Especializado em frutos do mar frescos com ambiente moderno.",
    menu: [
      { nome: "Ostras Frescas", preco: 15 },
      { nome: "Lagosta Grelhada", preco: 30 },
      { nome: "Tábua de Mariscos", preco: 25 },
    ],
  },
  {
    nome: "Moeders",
    imagem: "https://cdn.tasteatlas.com/images/restaurants/c5fc64d6478d4937992a4ec7da097fda.jpg?w=600",
    endereco: "Rozengracht 251, 1016 SX Amsterdam",
    descricao: "Culinária holandesa tradicional em ambiente familiar.",
    menu: [
      { nome: "Stampot Holandês", preco: 14 },
      { nome: "Costela de Porco", preco: 20 },
      { nome: "Apfelstrudel", preco: 7 },
    ],
  },
  {
    nome: "Restaurant Blauw",
    imagem: "https://225.wpcdnnode.com/vegetariers.nl/wp-content/uploads/2025/09/restaurantpagina-ua-bron-format-2025-kopie-1024x575.webp",
    endereco: "Amstelveenseweg 158-160, 1075 XN Amsterdam",
    descricao: "Autêntica cozinha indonésia com pratos compartilhados.",
    menu: [
      { nome: "Rijsttafel", preco: 28 },
      { nome: "Sate Ayam", preco: 16 },
      { nome: "Nasi Goreng", preco: 14 },
    ],
  },
  {
    nome: "Bakers & Roasters",
    imagem: "https://welltraveledclub.sfo3.digitaloceanspaces.com/wt/media/73731/conversions/bakers-roasters2-feat-img.webp",
    endereco: "Eerste Jacob van Campenstraat 54, 1072 BH Amsterdam",
    descricao: "Brunch no estilo Nova Zelândia e Brasil.",
    menu: [
      { nome: "Pão de Queijo", preco: 6 },
      { nome: "Huevos Rancheros", preco: 14 },
      { nome: "Banana Cake", preco: 8 },
    ],
  },
  {
    nome: "Foodhallen",
    imagem: "https://i0.wp.com/mytravelboektje.com/wp-content/uploads/2015/03/128A2C3F-9B7E-49B1-9B74-6FA84BA9C4DE.jpg?resize=600%2C450&ssl=1",
    endereco: "Bellamyplein 51, 1053 AT Amsterdam",
    descricao: "Mercado indoor com dezenas de opções de street food.",
    menu: [
      { nome: "Tacos Mexicanos", preco: 10 },
      { nome: "Hambúrguer Artesanal", preco: 12 },
      { nome: "Churros", preco: 7 },
    ],
  },
  {
    nome: "Cannibale Royale",
    imagem: "https://cannibaleroyale.nl/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-12.21.16.jpeg",
    endereco: "Handboogstraat 17a, 1012 XM Amsterdam",
    descricao: "Especialista em carnes e ambiente alternativo.",
    menu: [
      { nome: "Ribs Royale", preco: 22 },
      { nome: "Burger Royale", preco: 18 },
      { nome: "Brownie", preco: 7 },
    ],
  },
  {
    nome: "Pancakes Amsterdam",
    imagem: "https://hips.hearstapps.com/hmg-prod/images/schermafbeelding-2019-07-11-om-14-47-04-1562849239.png?crop=1xw:0.6510638297872341xh;0,0.300xh",
    endereco: "Prinsengracht 277, 1016 GW Amsterdam",
    descricao: "Famoso pelas panquecas holandesas e americanas.",
    menu: [
      { nome: "Panqueca Holandesa", preco: 9 },
      { nome: "Panqueca Americana", preco: 11 },
      { nome: "Panqueca de Nutella", preco: 12 },
    ],
  },
  {
    nome: "Café Winkel 43",
    imagem: "https://media.timeout.com/images/105682457/image.jpg",
    endereco: "Noordermarkt 43, 1015 NA Amsterdam",
    descricao: "O melhor appeltaart (torta de maçã) da cidade.",
    menu: [
      { nome: "Appeltaart Tradicional", preco: 6 },
      { nome: "Café Espresso", preco: 3 },
      { nome: "Capuccino", preco: 4 },
    ],
  },
  {
    nome: "Vegan Junk Food Bar",
    imagem: "https://media.licdn.com/dms/image/v2/C561BAQE4X0vrx8_d8A/company-background_10000/company-background_10000/0/1584170904318/vegan_junk_food_bar_cover?e=2147483647&v=beta&t=OJYcTg19RcBX5IO1wZTiP6rZWVjz7bpgTaL9_rzNlgg",
    endereco: "Staringplein 22, 1054 VL Amsterdam",
    descricao: "Fast food vegano criativo e colorido.",
    menu: [
      { nome: "Vegan Burger", preco: 15 },
      { nome: "Loaded Fries", preco: 12 },
      { nome: "Vegan Milkshake", preco: 8 },
    ],
  },
];

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  const { carrinho, setCarrinho, tema } = useApp();
  const isDark = tema === "dark";

  const adicionarAoCarrinho = (item) => {
    const existente = carrinho.find((p) => p.nome === item.nome);
    if (existente) {
      setCarrinho(
        carrinho.map((p) =>
          p.nome === item.nome ? { ...p, qtd: (p.qtd || 1) + 1 } : p
        )
      );
    } else {
      setCarrinho([...carrinho, { ...item, qtd: 1 }]);
    }
    alert(`${item.nome} adicionado ao carrinho!`);
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
      <Image source={{ uri: restaurant.imagem }} style={styles.image} />
      <Text style={[styles.name, { color: isDark ? "#fff" : "#000" }]}>
        {restaurant.nome}
      </Text>
      <Text style={[styles.address, { color: isDark ? "#bbb" : "#555" }]}>
        {restaurant.endereco}
      </Text>
      <Text style={[styles.description, { color: isDark ? "#ddd" : "#333" }]}>
        {restaurant.descricao}
      </Text>

      <Text style={[styles.menuTitle, { color: isDark ? "#fff" : "#000" }]}>
        Cardápio
      </Text>
      {restaurant.menu.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Text style={[styles.menuText, { color: isDark ? "#fff" : "#000" }]}>
            {item.nome} - €{item.preco.toFixed(2)}
          </Text>
          <Pressable
            style={styles.addButton}
            onPress={() => adicionarAoCarrinho(item)}
          >
            <Text style={styles.addButtonText}>Adicionar</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%", height: 200, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  name: { fontSize: 24, fontWeight: "bold", margin: 10 },
  address: { fontSize: 14, marginHorizontal: 10, marginBottom: 5 },
  description: { fontSize: 16, marginHorizontal: 10, marginBottom: 15 },
  menuTitle: { fontSize: 20, fontWeight: "bold", marginHorizontal: 10, marginBottom: 10 },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  menuText: { fontSize: 16 },
  addButton: {
    backgroundColor: "steelblue",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: { color: "#fff", fontWeight: "bold" },
});
