// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { fetchMovies } from '../api/fetchMovies';

// export default function Movies2() {
//     const [movies, setMovies] = useState([]);
//     const navigation = useNavigation();

//     useEffect(() => {
//         const fetchData = async () => {
//             const moviesData = await fetchMovies("comedy");
//             setMovies(moviesData);
//         };
//         fetchData();
//     }, []);

//     const navigateToMovieDetail = (movie) => {
//         navigation.navigate('MovieDetail', { movie }); 
//     };

//     return (
//         <View style={styles.container}>
//                 {movies.map((data, index) => (
//                     <TouchableOpacity key={data.id} style={[styles.movieItem, { height: index === 0 || index === 3 ? 200 : 300 }]}>
//                         <Image
//                             style={[styles.image, { width: '100%', height: '100%' }]}
//                             source={{ uri: data.posterURL }}
//                             onPress={() => navigateToMovieDetail(data)}
//                         />
//                     </TouchableOpacity>
//                 ))}
//         </View>
//     );
// }

// // const styles = StyleSheet.create({
// //     container: {
// //         flexDirection: 'row',
        
// //     },
// //     movieItem: {
// //         margin: 10,
// //         width: 150, // Default width
// //     },
// //     image: {
// //         resizeMode: 'cover',
// //     },
// // });

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//     },
//     movieItem: {
     
//         width: 150,
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     }
// });

// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native'; 
// import { fetchMovies } from '../api/fetchMovies';

// export default function Moviess() {
//     const [movies, setMovies] = useState([]);
//     const navigation = useNavigation(); 

//     useEffect(() => {
//         const fetchData = async () => {
//             const moviesData = await fetchMovies("comedy");
//             setMovies(moviesData);
//         };
//         fetchData();
//     }, []);

//     const navigateToMovieDetail = (movie) => {
//         navigation.navigate('MovieDetail', { movie }); 
//     };


//     const removeImage = (id) => {
//         setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
//     };


//     return (
//         <View style={styles.container}>
         
//                 {movies.map((data, index) => (
//                     <TouchableOpacity key={data.id} style={[styles.movieItem, { width: index === 0 || index === 6 ? 300 : 100 },{ height: index === 0 || index === 4 ? 100 : 300 }]} onPress={() => navigateToMovieDetail(data)}>
//                         <Image
//                             style={styles.image}
//                             source={{ uri: data.posterURL }}
//                             onError={() => removeImage(data.id)}
//                         />
//                     </TouchableOpacity>
//                 ))}
           
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         // justifyContent: 'space-around',
//     },
//     movieItem: {
//         width: 100,
//     },
//     image: {
//         width: '100%',
//         height: 300,

//     }
// });
 
