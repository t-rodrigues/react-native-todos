import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

type Task = {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [dark, setDark] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle.trim(),
      done: false,
    }
    setTasks(oldTasks => [...oldTasks, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id)
        task.done = !task.done;
      return task;
    });

    setTasks(updatedTasks)
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
  }

  const handleDarkMode = () => {
    setDark(!dark);
  }

  return (
    <SafeAreaView style={
      dark ?
        { flex: 1, backgroundColor: '#191622' }
        :
        { flex: 1, backgroundColor: '#eee' }
    }>
      <Header isDark={dark} darkMode={handleDarkMode} />

      <TodoInput isDark={dark} addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        isDark={dark}
      />
    </SafeAreaView>
  )
}
