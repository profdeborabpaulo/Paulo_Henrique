import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState('');

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      texto: 'Estudar React-Native',
      concluida: false,
    },
    {
      id: 2,
      texto: 'Aprender useState',
      concluida: false,
    },
  ]);

  // Adicionar tarefa
  function adicionarTarefa() {
    if (!tarefa.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      texto: tarefa,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTarefa('');
  }

  // Concluir ou desfazer tarefa
  function concluirTarefa(id: number) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    );
  }

  // Excluir tarefa
  function excluirTarefa(id: number) {
    setTarefas(
      tarefas.filter((item) => item.id !== id)
    );
  }

  // Contador de tarefas concluídas
  const totalConcluidas = tarefas.filter(
    (item) => item.concluida
  ).length;

  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Ionicons
          name="list-circle"
          size={30}
          color="#2196f3"
        />

        <Text style={styles.title}>
          Gerenciador de Tarefas
        </Text>
      </View>

      {/* Campo para adicionar tarefa */}
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      {/* Botão adicionar */}
      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarTarefa}
      >
        <Ionicons
          name="add-circle"
          size={20}
          color="#fff"
        />

        <Text style={styles.botaoAdicionarTexto}>
          ADICIONAR
        </Text>
      </TouchableOpacity>

      {/* Contador */}
      <Text style={styles.contador}>
        {totalConcluidas} de {tarefas.length} tarefas concluídas
      </Text>

      {/* Lista de tarefas */}
      <View style={styles.lista}>
        {tarefas.map((item) => (
          <View
            key={item.id}
            style={styles.itemContainer}
          >

            {/* Tarefa */}
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
                  item.concluida &&
                    styles.itemConcluido,
                ]}
              >
                {item.texto}
              </Text>
            </TouchableOpacity>

            {/* Botão excluir */}
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  botaoAdicionar: {
    backgroundColor: '#2196f3',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  botaoAdicionarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },

  contador: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    color: '#666',
  },

  lista: {
    marginTop: 5,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  itemTexto: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  item: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },

  itemConcluido: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
});

