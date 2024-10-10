import CardAluno from "../components/CardAluno";
import { View, FlatList } from "react-native";

const meusAlunos = [
    { id: '1', nome: 'Yuri', emoji: '😎', idade: 20, curso: 'Sistemas de Informação', endereco: 'Rua dos Yuri, nº 0', telefone: '(99) 99999-9999' },
    { id: '2', nome: 'JoãoX', emoji: '😀', idade: 21, curso: 'Engenharia de Software', endereco: 'Rua dos JoãoX, nº 1', telefone: '(88) 88888-8888' },
    { id: '3', nome: 'Lucas', emoji: '😍', idade: 22, curso: 'Ciência da Computação', endereco: 'Rua dos Lucas, nº 2', telefone: '(77) 77777-7777' },
    { id: '4', nome: 'Victorrr', emoji: '🤩', idade: 23, curso: 'Análise e Desenvolvimento de Sistemas', endereco: 'Rua dos Victorrr, nº 3', telefone: '(66) 66666-6666' },
];

export default function Alunos() {
    return (
        <View>
            <FlatList
                data={meusAlunos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardAluno aluno={item} />
                )}
            />
        </View>
    );
}