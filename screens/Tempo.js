import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tempo({ navigation }) {
  const [tempo, setTempo] = useState('');

  const salvar = async () => {
    const dados = await AsyncStorage.getItem('eventoAtual');
    const evento = dados ? JSON.parse(dados) : {};
    evento.tempo = tempo;
    await AsyncStorage.setItem('eventoAtual', JSON.stringify(evento));
    navigation.navigate('Prejuizos');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>⏱️ Tempo de Interrupção</Text>
        <TextInput
          placeholder="Tempo estimado sem energia (em horas)"
          style={styles.input}
          keyboardType="numeric"
          value={tempo}
          onChangeText={setTempo}
        />
        <Button title="Avançar" onPress={salvar} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff'
  }
});
