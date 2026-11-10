import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laboratorio de React Native</Text>

      <Text style={styles.description}>
        mi aprendizaje de React Native.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </Pressable>

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b146c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#A78BFA',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: '#46b32b',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
