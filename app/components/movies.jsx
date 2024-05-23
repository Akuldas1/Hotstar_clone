// import React from 'react'
// import {
//     View,
//     StyleSheet,
//     Image,
// } from "react-native";
// import { fetchMovies } from '../api/fetchMovies'
// import { useState, useEffect } from 'react'


// export default function Movies() {
//     const [movies, setMovies] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const movies = fetchMovies("horror")
//             setMovies(movies)
//         }
//         fetchData();
//     })

//     return (
//         <>
//             <View>
//                 {
//                     movies.map((data) => {
//                         <View key={data.id} style={styles.image}>
//                         <Image source={data.posterURL}/>
//                         </View>
//                     })
//                 }
//             </View>
//         </>
//     )
// }

// const styles= StyleSheet.create({
//     image:{
//         flex:0.5
//     }
// })


// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
// import { fetchMovies } from '../api/fetchMovies';

// export default function Movies() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const moviesData = await fetchMovies("horror");
//             console.log(moviesData); // Log fetched data
//             setMovies(moviesData);
//         };
//         fetchData();
//     }, []);

//     return (

//         <View style={styles.container}>

//             <ScrollView horizontal={true}>
//                 {movies.map((data) => (
//                     <View key={data.id} style={styles.movieItem}>
//                         <Image
//                             style={styles.image}
//                             source={{ uri: data.posterURL }}
//                         />
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//     },
//     movieItem: {
//         margin: 10,
//         width: 150,
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     },

// });

import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { fetchMovies } from '../api/fetchMovies';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation(); // Get navigation object

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await fetchMovies("horror");
            setMovies(moviesData);
        };
        fetchData();
    }, []);

    const navigateToMovieDetail = (movie) => {
        navigation.navigate('MovieDetail', { movie }); 
    };

    const removeImage = (id) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {movies.map((data) => (
                    <TouchableOpacity key={data.id} style={styles.movieItem} onPress={() => navigateToMovieDetail(data)}>
                        <Image
                            style={styles.image}
                            source={{ uri: data.posterURL }}
                            onError={() => removeImage(data.id)}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    movieItem: {
        margin: 4,
        width: 150,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius:4
    },
});

