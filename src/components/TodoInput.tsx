import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isDark: boolean;
}

export function TodoInput({ addTask, isDark }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (task.trim()) {
      addTask(task.trim());
      setTask('');
    }
  }

  return (
    <View style={[
      styles.inputContainer, Platform.OS === 'ios'
        ? styles.inputIOSShadow
        : styles.inputAndroidShadow,
      isDark && styles.inputContainerDark
    ]}>
      <TextInput
        style={[styles.input, isDark && styles.inputDark]}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor="#A09CB1"
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, isDark && styles.addButtonDark]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#34313D',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    color: '#000',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    backgroundColor: '#34313D',
    color: '#eee',
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: '#988BC7'
  }
});
