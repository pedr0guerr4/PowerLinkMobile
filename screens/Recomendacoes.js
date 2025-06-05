import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function Recomendacoes({ navigation }) {
  const voltarInicio = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Panorama' }]
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🛡️ Recomendações e Boas Práticas</Text>
      
      <Text style={styles.item}>✅ Tenha lanternas com pilhas carregadas disponíveis.</Text>
      <Text style={styles.item}>✅ Evite abrir a geladeira durante quedas para conservar alimentos.</Text>
      <Text style={styles.item}>✅ Desconecte aparelhos eletrônicos para evitar danos com a volta da energia.</Text>
      <Text style={styles.item}>✅ Mantenha contatos de emergência e da companhia elétrica salvos.</Text>
      <Text style={styles.item}>✅ Se possível, instale nobreaks para equipamentos essenciais.</Text>
      <Text style={styles.item}>✅ Informe a companhia elétrica sobre a falta de energia.</Text>
      <Text style={styles.item}>✅ Cuidado com cabos caídos ou áreas alagadas: risco de choque elétrico.</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Voltar ao Início" onPress={voltarInicio} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flexGrow: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  item: {
    fontSize: 16,
    marginBottom: 10
  }
});
