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
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Movies from '../components/movies';

export default function MovieDetail({ route, navigation }) {
    const { movie } = route.params; // Get movie data from route params

    return (
        <>
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: movie.posterURL }}
                className="rounded-xl" />
            <Text style={styles.title}>{movie.title}</Text>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', gap: 8, padding: 10 }} className="bg-white">
                <FontAwesome name="play" size={11} color="black" />
                <Text className="text-black">Watch now</Text>
            </TouchableOpacity>


            <Text className="text-white" style={styles.title}>Thriller | Intense | Crime | Action</Text>

            <Text className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam ipsum, magnam, maiores esse voluptatum obcaecati velit voluptate nemo magni aliquid ratione sint iure possimus impedit deleniti! Rerum, quae iste.</Text>
           
            <View className="flex justify-center">
                <View className="flex flex-row gap-10 mt-0.5">
                    <AntDesign name="plus" size={24} color="white" />
                    <Fontisto name="share-a" size={20} color="white" />
                    <Octicons name="download" size={24} color="white" />
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color="white" />
                </View>
                {/* <Text className="text-white">
                    Watchlist
                    Share
                    Download
                    Rate
                </Text> */}
            </View>
            <View className="mt-5">
                <Text className="text-white">More Like This</Text>
                <Movies/>
            </View>

            <View className="mt-5">
                <Text className="text-white">Trailers & More</Text>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "black"
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        // fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 10,
        alignSelf: "center",
        color: "white"
    },
});
{/* <Button title="Go back" onPress={() => navigation.goBack()} /> */ }