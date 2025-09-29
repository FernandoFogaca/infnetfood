
import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../App";

// --- Telas ---
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import OrdersScreen from "./OrdersScreen";
import ProfileScreen from "./ProfileScreen";
import ProductsScreen from "./ProductsScreen";
import RestaurantScreen from "./RestaurantScreen";

const Tab = createBottomTabNavigator();

function ConfigMain() {
  const { tema, setTema } = useApp();
  const isDark = tema === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Configurações
      </Text>

      <View style={styles.switchContainer}>
        <Text style={{ color: isDark ? "#fff" : "#000" }}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={() => setTema(isDark ? "light" : "dark")}
        />
      </View>
    </View>
  );
}

export default function ConfigScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Restaurantes") iconName = "map";
          else if (route.name === "Snacks") iconName = "fast-food";
          else if (route.name === "Drinks") iconName = "beer";
          else if (route.name === "Desserts") iconName = "ice-cream";
          else if (route.name === "Combos") iconName = "restaurant";
          else if (route.name === "Carrinho") iconName = "cart";
          else if (route.name === "Pedidos") iconName = "list";
          else if (route.name === "Perfil") iconName = "person";
          else if (route.name === "Configurações") iconName = "settings";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Restaurantes" component={RestaurantScreen} />
      <Tab.Screen
        name="Snacks"
        children={() => <ProductsScreen route={{ params: { category: "Snacks" } }} />}
      />
      <Tab.Screen
        name="Drinks"
        children={() => <ProductsScreen route={{ params: { category: "Drinks" } }} />}
      />
      <Tab.Screen
        name="Desserts"
        children={() => <ProductsScreen route={{ params: { category: "Desserts" } }} />}
      />
      <Tab.Screen
        name="Combos"
        children={() => <ProductsScreen route={{ params: { category: "Combos" } }} />}
      />
      <Tab.Screen name="Carrinho" component={CartScreen} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Configurações" component={ConfigMain} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  switchContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
});
