import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type FlatListHeaderComponentProps = {
  isDark: boolean;
};

function FlatListHeaderComponent({ isDark } : FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={[styles.header, isDark && styles.headerDark]}>Minhas tasks</Text>
    </View>
  )
}

type MyTasksListProps = {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  isDark: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, isDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done
                ? [styles.taskButtonDone, isDark && styles.taskButtonDoneDark]
                : styles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                ? [styles.taskMarkerDone, isDark && styles.taskMarkerDoneDark]
                : [styles.taskMarker, isDark && styles.taskMarkerDark]}
            />
            <Text
              style={[
                item.done
                ? [styles.taskTextDone, isDark && styles.taskTextDoneDark]
                : [styles.taskText, isDark && styles.taskTextDark],
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDark={isDark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#FF79C6',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    borderColor: '#FF79C6',
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#FF79C6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    backgroundColor: 'rgba(255, 121, 198, 0.1)',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    backgroundColor: '#ff79c6',
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: '#E1E1E6'
  },
})
