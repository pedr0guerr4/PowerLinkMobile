import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Panorama({ navigation }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const dados = await AsyncStorage.getItem('eventos');
      if (dados) setEventos(JSON.parse(dados));
    };
    const unsubscribe = navigation.addListener('focus', fetchEventos);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚡ Resumo dos Eventos</Text>

      {eventos.length === 0 ? (
        <Text style={styles.empty}>Nenhum evento registrado ainda.</Text>
      ) : (
        <FlatList
          data={eventos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>📍 Local:</Text>
              <Text style={styles.value}>{item.local}</Text>
              <Text style={styles.label}>⏱️ Tempo:</Text>
              <Text style={styles.value}>{item.tempo} horas</Text>
              <Text style={styles.label}>💥 Prejuízo:</Text>
              <Text style={styles.value}>{item.prejuizo}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Localizacao')}>
        <Text style={styles.buttonText}>+ Registrar Novo Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  empty: { fontSize: 16, color: '#777', marginTop: 20, textAlign: 'center' },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2
  },
  label: { fontWeight: 'bold', color: '#333' },
  value: { marginBottom: 5 },
  button: {
    backgroundColor: '#005eff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});