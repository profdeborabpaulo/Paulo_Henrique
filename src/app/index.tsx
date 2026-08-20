import{View, Text, TextInput, StyleSheet} from 'react-native';

export default function HomeScreen( ) {
  return(
    <View>
      <Text>Gerenciador de Tarefas</Text>
      <TextInput
      placeholder="Digite uma tarefa:"
      />
    </View>
  );
  
}