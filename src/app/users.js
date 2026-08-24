import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CardUser from '../components/CardUser';

export default function UsersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo}
          source={'https://img.magnific.com/vetores-gratis/tracar-vetor-de-forma-geometrica-redonda_53876-175080.jpg?semt=ais_test_b&w=740&q=80'} />
        <Text style={styles.title}>IFFLIX</Text>
      </View>

      <View style={styles.box2}>
        <CardUser
          image={'https://anatomiapop.com.br/wp-content/uploads/2025/01/Silo-1-temporada.jpg'}
          name={'Silo'}
          signature={'Apple +'}

        />

        <CardUser
          image={'https://t.ctcdn.com.br/Knj-NS1Ga_Xj0pR-2ofzLfmxecU=/1024x576/smart/i445329.jpeg'}
          name={'House of the Dragon'}
          signature={'HBO Max'}

        />

        <CardUser
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp9FtK-SaRn9X4pdmZn-R_g1gortZq3t0gAW8Mg6EYRaGnbv0lTr3rx8&s=10'}
          name={'For All Mankind'}
          signature={'Apple +'}

        />

        <CardUser
          image={'https://m.media-amazon.com/images/S/pv-target-images/d3eb47542bf483f5cda6e8687861a96b20ed1448f8b415436bb606cbb86dcd12.png'}
          name={'Rings of Power'}
          signature={'Prime Video'}

        />

      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: 'black',

  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },

  box: {
    flex: 2,
    backgroundColor: "black",
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 100,
    gap: 10
  },

  box2: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'


  },



  logo: {
    width: 100,
    height: 100,
    borderRadius: 20
  },

});

