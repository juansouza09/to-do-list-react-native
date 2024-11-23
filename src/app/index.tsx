import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

type Task = {
  key: string;
  value: string;
};

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { key: String(tasks.length + 1), value: task }]);
      setTask('');
    }
  };

  const removeTask = (key: string) => {
    setTasks(tasks.filter(task => task.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          placeholderTextColor={'black'}
          value={task}
          onChangeText={setTask}
        />
        
      </View>
      <View>
      <Button title="Adicionar" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.key)}>
            <View style={styles.task}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    paddingVertical: 5,
  },
  task: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
  },
});
