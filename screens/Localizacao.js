import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Localizacao({ navigation }) {
  const [local, setLocal] = useState('');

  const salvar = async () => {
    const evento = { local };
    await AsyncStorage.setItem('eventoAtual', JSON.stringify(evento));
    navigation.navigate('Tempo');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📍 Localização Atingida</Text>
        <TextInput
          placeholder="Digite o bairro, cidade ou CEP afetado"
          style={styles.input}
          value={local}
          onChangeText={setLocal}
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
