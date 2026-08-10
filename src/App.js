import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardUser from './components/CardUser';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo}
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubR20yAwHLOdRMuvx9IgNQ6DUwIWw1c5pa_SJc1e4tA&s'} />
        <Text>La Bolaria </Text>
      </View>

      <View style={styles.box2}>
        <CardUser
          bolo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aICLyTz5BQwx6l9knyS24JZXX0PVSNC51DT6sRbtsg&s=10'}
          name={'Bolo Fit de Maçã'}
          email={'bolaria@gmail.com'}
        />

        <CardUser
          bolo={'https://labolaria.com.br/wp-content/uploads/2025/10/16-bolo-caribe-200x300.webp'}
          name={'Bolo Caribe'}
          email={'bolaria@gmail.com'}
        />

        <CardUser
          bolo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaIdm02Z_Ja-iBcOnBsP5zqDgfgn75zjS0Kr28ZBBVINZKVaknRns2Vg&s=10'}
          name={'Bolo Ferrero Rocher'}
          email={'bolaria@gmail.com'}
        />


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

});

