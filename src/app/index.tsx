import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type Tarefa = {
  id: number;
  texto: string;
  concluida: boolean;
};

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState('');

  const [tarefas, setTarefas] = useState<Tarefa[]>([
    {
      id: 1,
      texto: 'Estudar React Native',
      concluida: false,
    },
    {
      id: 2,
      texto: 'Aprender useState',
      concluida: false,
    },
    {
      id: 3,
      texto: 'Criar a primeira tela',
      concluida: false,
    },
  ]);

  function adicionarTarefa() {
    if (!tarefa.trim()) {
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: tarefa.trim(),
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTarefa('');
  }

  function concluirTarefa(id: number) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    );
  }

  function excluirTarefa(id: number) {
    setTarefas(
      tarefas.filter((item) => item.id !== id)
    );
  }

  const totalConcluidas = tarefas.filter(
    (item) => item.concluida
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Ionicons
          name="list-circle"
          size={30}
          color="#2196f3"
        />

        <Text style={styles.title}>
          Gerenciador de Tarefas
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        onSubmitEditing={adicionarTarefa}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarTarefa}
      >
        <Ionicons
          name="add-circle"
          size={20}
          color="#ffffff"
        />

        <Text style={styles.botaoAdicionarTexto}>
          ADICIONAR
        </Text>
      </TouchableOpacity>

      <Text style={styles.contador}>
        {totalConcluidas} de {tarefas.length} tarefas concluídas
      </Text>

      {tarefas.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.itemTexto}
            onPress={() => concluirTarefa(item.id)}
          >
            <Ionicons
              name={
                item.concluida
                  ? 'checkmark-circle'
                  : 'ellipse-outline'
              }
              size={22}
              color={
                item.concluida
                  ? '#2e7d32'
                  : '#2196f3'
              }
            />

            <Text
              style={[
                styles.item,
                item.concluida && styles.itemConcluido,
              ]}
            >
              {item.texto}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => excluirTarefa(item.id)}
          >
            <Ionicons
              name="trash-outline"
              size={20}
              color="#e53935"
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f7fa',
  },

  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
  },

  botaoAdicionar: {
    backgroundColor: '#2196f3',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  botaoAdicionarTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  contador: {
    fontSize: 15,
    color: '#555555',
    marginTop: 20,
    marginBottom: 10,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 8,
    borderRadius: 8,
  },

  itemTexto: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  item: {
    flex: 1,
    fontSize: 16,
  },

  itemConcluido: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
});