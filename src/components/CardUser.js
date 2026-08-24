import { Image, StyleSheet, Text, View } from "react-native";

export default function CardUser({ image, name, signature }) {
    return (
        <View style={styles.card}>

            <Image style={styles.bolo} source={image} />

            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.signature}>{signature}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {

        flexDirection: 'column',
        margin: 10,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
        alignItems: 'center'


    },

    bolo: {
        width: 200,
        height: 200,
        borderRadius: 25,
        margin: 10,

    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    email: {
        fontSize: 18,
        color: 'black',
    }



});

