// App.js
import React, { useState, createContext, useContext } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// ==== TELAS ====
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ConfigScreen from "./screens/ConfigScreen";
import MapScreen from "./screens/MapScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";

// ==== CONTEXTO DO APP ====
const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ==== Tabs principais ====
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Snacks") iconName = "fast-food";
          else if (route.name === "Drinks") iconName = "beer";
          else if (route.name === "Desserts") iconName = "ice-cream";
          else if (route.name === "Combos") iconName = "restaurant";
          else if (route.name === "Mapa") iconName = "map";
          else if (route.name === "Carrinho") iconName = "cart";
          else if (route.name === "Pedidos") iconName = "cube";
          else if (route.name === "Perfil") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Snacks"
        component={ProductsScreen}
        initialParams={{ category: "Snacks" }}
      />
      <Tab.Screen
        name="Drinks"
        component={ProductsScreen}
        initialParams={{ category: "Drinks" }}
      />
      <Tab.Screen
        name="Desserts"
        component={ProductsScreen}
        initialParams={{ category: "Desserts" }}
      />
      <Tab.Screen
        name="Combos"
        component={ProductsScreen}
        initialParams={{ category: "Combos" }}
      />
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Carrinho" component={CartScreen} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ==== Stack principal ====
export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [tema, setTema] = useState("light");

  return (
    <AppContext.Provider value={{ carrinho, setCarrinho, pedidos, setPedidos, tema, setTema }}>
      <NavigationContainer theme={tema === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Tabs SEMPRE ativas */}
          <Stack.Screen name="Principal" component={MainTabs} />

          {/* Extras que abrem em cima das tabs */}
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Configurações" component={ConfigScreen} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
