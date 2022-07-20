import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x = 1;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Amina again. ewe oo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
  }
});
