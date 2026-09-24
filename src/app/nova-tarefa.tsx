// Importando os componentes do react-native
import { View, Text, TextInput} from 'react-native';

export default function HomeScreen( ) {
    return(
        <View>
            <Text> Gerenciador de Tarefas </Text>
            <TextInput
            placeholder='Digite uma tarefa'
            />
        </View>
    );
};