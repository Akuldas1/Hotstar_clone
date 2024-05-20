// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Image, Text } from "react-native";
// import { fetchMovies} from '../api/fetchMovies'; // Assuming you have an API function to fetch movie details

// export default function MovieDetail({ route }) {
//     const { movieId } = route.params;
//     const [movieDetails, setMovieDetails] = useState([]);

//     useEffect(() => {
//         const fetchMovie = async () => {
//             const details = await fetchMovies(movieId);
//             setMovieDetails(details);
//         };
//         fetchMovie();
//     }, [movieId]);

//     // if (!movieDetails) {
//     //     return (
//     //         <View style={styles.loadingContainer}>
//     //             <Text>Loading...</Text>
//     //         </View>
//     //     );
//     // }

//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.image}
//                 source={{ uri: movieDetails.posterURL }}
//             />
//             <View style={styles.detailsContainer}>
//                 <Text style={styles.title} className="text-red-600">{movieDetails.title}</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//     },
//     image: {
//         width: 200,
//         height: 300,
//         marginBottom: 20,
//         // backgroundColor:"red",
//         zIndex:1,
//     },
//     detailsContainer: {
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         backgroundColor:"black"
//     },
// });


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { fetchMovieDetails } from '../api/fetchMovieDetails';

export default function MovieDetail({ route }) {
    const { movieId } = route.params;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const details = await fetchMovieDetails(movieId);
                setMovieDetails(details);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();
    }, [movieId]);

    if (!movieDetails) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: movieDetails.posterURL }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{movieDetails.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
    detailsContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
