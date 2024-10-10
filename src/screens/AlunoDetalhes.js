import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

export default function AlunoDetalhes() {
    const route = useRoute();
    const { aluno } = route.params;

    return (
        <View style={styles.caixa} >
            <Text style={styles.titulo}>Detalhes do aluno</Text>
            <Text style={styles.emoji}>'😎'</Text>
            <Text>Nome: {aluno.nome}</Text>
            <Text>Idade: {aluno.idade}</Text>
            <Text>Curso: {aluno.curso}</Text>
            <Text>Endereço: {aluno.endereco}</Text>
            <Text>Telefone: {aluno.telefone}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});