import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HelloWorld() {
  const navigation = useNavigation(); // Adicione essa linha

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Olá turma linda</Text>
      <Text style={styles.emoji}>😀</Text>  
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lista de Alunos')}
      >
        <Text>Ir para lista de alunos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 40,
  },
  emoji: {
    fontSize: 50,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue',
  }
});