// import { StyleSheet, Text, View, Button } from 'react-native'
// import React from 'react'

// const MovieDetail = ({ navigation }) => {
//   return (
//     <View>
//       <Text>MovieDetail</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   )
// }

// export default MovieDetail

// const styles = StyleSheet.create({})

import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

export default function MovieDetail({ route, navigation }) {
    const { movie } = route.params; // Get movie data from route params

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: movie.posterURL }}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 400,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
