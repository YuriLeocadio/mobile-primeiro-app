import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlunoDetalhes from './src/screens/AlunoDetalhes';
import HelloWorld from './src/screens/HelloWorld';
import Alunos from './src/screens/Alunos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Hello World'>
        <Stack.Screen name='Hello World' component={HelloWorld} />
        <Stack.Screen name='Lista de Alunos' component={Alunos} />
        <Stack.Screen name='Detalhes do aluno' component={AlunoDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}