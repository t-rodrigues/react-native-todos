import React from 'react';
import { TouchableOpacity, View, Text, StatusBar, StyleSheet } from 'react-native';

type Props = {
  isDark: boolean;
  darkMode: () => void;
};

export function Header({ isDark, darkMode }: Props) {
  return (
    <View style={[styles.header, isDark ? styles.headerDark : null]}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <TouchableOpacity style={styles.buttonDarkMode} onPress={darkMode} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#273FAD',
  },
  headerDark: {
    backgroundColor: '#483C67',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonDarkMode: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    right:10,
  }
});
