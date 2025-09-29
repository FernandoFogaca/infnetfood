import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Image } from "react-native";
import { useApp } from "../App";

const produtos = {
  Snacks: [
    { id: "1", nome: "Kroket", preco: 3, imagem: "https://www.eefkooktzo.nl/wp-content/uploads/2023/01/Kroketten-maken-500x375.jpg" },
    { id: "2", nome: "Frikandel", preco: 4, imagem: "https://eatertainment.b-cdn.net/content/uploads/2024/09/Frikandellen-experience.jpg" },
    { id: "3", nome: "Stroopwafel", preco: 2, imagem: "https://wanderzestblog.com/wp-content/uploads/2020/08/stroopwafels-small-7-scaled.jpg" },
    { id: "4", nome: "Bitterballen", preco: 5, imagem: "https://lekkertafelen.nl/wp-content/uploads/2021/12/Bitterballen-met-kip-en-ras-el-hanout-.jpg" },
  ],
  Drinks: [
    { id: "5", nome: "Chocomel", preco: 3, imagem: "https://www.sligro.nl/content/dam/webshop/sligro/marketing/sligro/merken/chocomel/chocomel-recept-karamel-brandpage.jpg" },
    { id: "6", nome: "Heineken", preco: 5, imagem: "https://images.ctfassets.net/a8jxyzbp2vr9/1ebGcT1W0YnyTmZyFyINZ3/659ad9d344db2c5dc0fd5373b0a970d9/Screenshot_2025-06-11_144728.png" },
    { id: "7", nome: "Cassis", preco: 4, imagem: "https://static.ah.nl/dam/product/AHI_43545239393039303333?revLabel=2&rendition=400x400_JPG_Q85&fileType=binary" },
  ],
  Desserts: [
    { id: "8", nome: "Appeltaart", preco: 6, imagem: "https://cdn.heelhollandbakt.nl/2022/03/appeltaart_evert_Bron_shutterstock_768x432.jpg" },
    { id: "9", nome: "Vla", preco: 3, imagem: "https://d3r3h30p75xj6a.cloudfront.net/files/1/7/0/1/1/2/WS_670x330_vla(1).png" },
  ],
  Combos: [
    { id: "10", nome: "Combo Amsterdam", preco: 12, imagem: "https://media.iamsterdam.com/w_1368,h_775/uohaus1sv0m-versnaperingen-foto-mirte-vreemann.webp" },
    { id: "11", nome: "Combo Rotterdam", preco: 14, imagem: "https://media.istockphoto.com/id/1171546909/photo/traditional-dutch-afternoon-snacks.jpg?s=612x612&w=0&k=20&c=4FQjnFvHFTXQ7LkdcynRe_uRoFW8NicYRzqUxCKUnnI=" },
  ],
};

export default function ProductsScreen({ route }) {
  const { category } = route.params;
  const { carrinho, setCarrinho, tema } = useApp();
  const isDark = tema === "dark";

  const addCarrinho = (produto) => {
    const existente = carrinho.find((p) => p.id === produto.id);
    if (existente) {
      setCarrinho(
        carrinho.map((p) =>
          p.id === produto.id ? { ...p, qtd: (p.qtd || 1) + 1 } : p
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, qtd: 1 }]);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#f4f4f4" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#111" }]}>
        Produtos de {category}
      </Text>
      <FlatList
        data={produtos[category] || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? "#222" : "#fff" }]}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.text, { color: isDark ? "#fff" : "#000" }]}>{item.nome}</Text>
              <Text style={{ color: isDark ? "#aaa" : "#444" }}>€{item.preco.toFixed(2)}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => addCarrinho(item)}>
              <Text style={styles.buttonText}>+ Add</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  card: { flexDirection: "row", alignItems: "center", marginBottom: 12, padding: 10, borderRadius: 10, elevation: 3 },
  image: { width: 60, height: 60, marginRight: 10, borderRadius: 8 },
  text: { fontSize: 16, fontWeight: "600" },
  button: { backgroundColor: "steelblue", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
