import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CardUser from '../components/CardUser';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo}
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubR20yAwHLOdRMuvx9IgNQ6DUwIWw1c5pa_SJc1e4tA&s'} />
        <Text>La Bolaria </Text>
      </View>

      <View style={styles.box2}>
        <CardUser
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_woY0nwNqb1cg1e_u7w2BFUVscZlcrBMDypWeQdruAv8e0fUU305aD9g&s=10'}
          name={'Bolo Fit de Maçã 2'}
          signature={'bolaria@gmail.com'}
        />

        <CardUser
          image={'https://labolaria.com.br/wp-content/uploads/2025/10/16-bolo-caribe-200x300.webp'}
          name={'Bolo Caribe'}
          signature={'bolaria@gmail.com'}
        />

        <CardUser
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaIdm02Z_Ja-iBcOnBsP5zqDgfgn75zjS0Kr28ZBBVINZKVaknRns2Vg&s=10'}
          name={'Bolo Ferrero Rocher'}
          signature={'bolaria@gmail.com'}
        />


      </View>

      <StatusBar style="auto" />

    </ScrollView>
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
    width: '100%',
    backgroundColor: 'green',

  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 20
  },

});

