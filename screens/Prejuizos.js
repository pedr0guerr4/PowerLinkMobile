import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Prejuizos({ navigation }) {
  const [prejuizo, setPrejuizo] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
      return () => subscription.remove();
    }, [])
  );

  const salvar = async () => {
  const dados = await AsyncStorage.getItem('eventoAtual');
  const evento = dados ? JSON.parse(dados) : {};
  evento.prejuizo = prejuizo;

  const eventosSalvos = await AsyncStorage.getItem('eventos');
  const listaEventos = eventosSalvos ? JSON.parse(eventosSalvos) : [];

  const novaLista = [...listaEventos, evento];

  await AsyncStorage.setItem('eventos', JSON.stringify(novaLista));
  await AsyncStorage.removeItem('eventoAtual');

  Alert.alert('Sucesso', 'Evento registrado!');
  navigation.reset({
    index: 0,
    routes: [{ name: 'Recomendacoes' }]
  });
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>💥 Prejuízos Observados</Text>
        <TextInput
          placeholder="Descreva os prejuízos causados (ex: alimentos perdidos, aparelhos danificados...)"
          style={styles.input}
          value={prejuizo}
          onChangeText={setPrejuizo}
          multiline
        />
        <Button title="Finalizar e Ver Recomendações" onPress={salvar} />
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
    height: 140,
    textAlignVertical: 'top',
    marginBottom: 20,
    backgroundColor: '#fff'
  }
});