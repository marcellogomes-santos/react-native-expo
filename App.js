import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Portanto, irmãos, peço, pelas misericórdia de Deus, que ofereçam o corpo de vocês como sacrifício vivo, santo e agradável a Deus: este é o culto racional de vocês.!</Text>
      <Text>Romanos 12:1</Text>
      <Text>Versículo do Dia </Text>
      <View style={styles.box}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09641c',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#224b2a',
   
  },
});
