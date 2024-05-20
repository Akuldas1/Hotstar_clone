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

