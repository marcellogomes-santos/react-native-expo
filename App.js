import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo}
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubR20yAwHLOdRMuvx9IgNQ6DUwIWw1c5pa_SJc1e4tA&s'} />
        <Text>La Bolaria</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.card}>

          <Image style={styles.bolo} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aICLyTz5BQwx6l9knyS24JZXX0PVSNC51DT6sRbtsg&s=10'} />
          <Text style={styles.text}>Bolo Fit de Maçã</Text>
        </View>
        <View style={styles.card}>

          <Image style={styles.bolo} source={'https://labolaria.com.br/wp-content/uploads/2025/10/16-bolo-caribe-200x300.webp'} />
          <Text style={styles.text}>Bolo Caribe</Text>

        </View>
        <View style={styles.card}>

          <Image style={styles.bolo} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaIdm02Z_Ja-iBcOnBsP5zqDgfgn75zjS0Kr28ZBBVINZKVaknRns2Vg&s=10'} />
          <Text style={styles.text}>Bolo Ferrero Rocher</Text>

        </View>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#6670f5',

  },

  box: {
    flex: 2,
    backgroundColor: "#f9e895",
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },

  box2: {
    flex: 5,
    backgroundColor: 'green',

  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 20
  },

  card: {
    flexDirection: 'row',
    margin: 10,
    borderColor: 'black',
    borderWidth: 5

  },

  bolo: {
    width: 200,
    height: 200,
    boderRadius: 25,
    margin: 10,

  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,


  },

});
