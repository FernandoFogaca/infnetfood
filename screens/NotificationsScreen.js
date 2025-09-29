import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";

export default function NotificationsScreen() {
  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "🍔 Pedido atualizado!",
        body: "Seu pedido está a caminho 🚴‍♂️",
      },
      trigger: null, // dispara imediatamente
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <Pressable style={styles.button} onPress={sendNotification}>
        <Text style={styles.buttonText}>Simular Notificação</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 14,
    backgroundColor: "steelblue",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
