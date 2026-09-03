// importando os componentes do react-native
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export default function HomeScreen( ){
  const[tarefa, setTarefa]= useState('');
  const[tarefas, setTarefas]= useState([
    "Estudar React-Native",
    "Aprender useState",
    "Criar a primeira tela",
  ]);
  function adicionarTarefa( ){
    if(!tarefa.trim())//impede tarefas em branco
      return;
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
  }
  // Próxima etapa: 
  return(
    <View style={styles.container }>
      
      <Text style={styles.title}> Gerenciador de Tarefas</Text>

      <TextInput style={styles.input}
      placeholder='Digite uma tarefa'
      value= {tarefa}
      onChangeText={setTarefa}
      />
      {tarefas.map((item, index)=>(
        <Text
        key={index}
        style={styles.item}
        >
          .{item}
        </Text>
      ))}
    </View>
  );
}

//Configurando o estilo do index.tsx
const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  item:{
    fontSize: 16,
    marginTop: 10,
  }
});