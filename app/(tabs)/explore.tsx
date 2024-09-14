import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';  // Certifique-se de que o caminho está correto

// Definindo o tipo de navegação para a tela
type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Explore'>;

type Props = {
  navigation: ExploreScreenNavigationProp;
};

export default function ExploreScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar mais conteúdo!</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ed145b',
  },
});
