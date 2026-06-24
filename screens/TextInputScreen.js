import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function TextInputScreen() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>TextInput</Text>
      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre..."
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.etiqueta}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {nombre || email ? (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Nombre: {nombre}</Text>
          <Text style={styles.resultadoTexto}>Email: {email}</Text>
        </View>
      ) : null}
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
    marginBottom: 20,
  },
  etiqueta: { color: "#555", fontSize: 13, marginBottom: 4 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resultado: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginTop: 6,
  },
  resultadoTexto: { color: "#333", fontSize: 14, marginBottom: 4 },
});
