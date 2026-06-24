import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const datos = [
  { id: "1", nombre: "Manzana", color: "#FF6B6B" },
  { id: "2", nombre: "Plátano", color: "#FFEAA7" },
  { id: "3", nombre: "Uva", color: "#DDA0DD" },
  { id: "4", nombre: "Naranja", color: "#F39C12" },
  { id: "5", nombre: "Sandía", color: "#96CEB4" },
  { id: "6", nombre: "Fresa", color: "#FF6B6B" },
  { id: "7", nombre: "Mango", color: "#FFEAA7" },
  { id: "8", nombre: "Kiwi", color: "#4ECDC4" },
];

export default function FlatListScreen() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>FlatList</Text>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={[styles.circulo, { backgroundColor: item.color }]} />
            <Text style={styles.texto}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  circulo: { width: 14, height: 14, borderRadius: 7, marginRight: 12 },
  texto: { color: "#333", fontSize: 15 },
});
