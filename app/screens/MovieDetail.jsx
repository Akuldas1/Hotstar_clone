import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { fetchMovies} from '../api/fetchMovies'; // Assuming you have an API function to fetch movie details

export default function MovieDetail({ route }) {
    const { movieId } = route.params;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const details = await fetchMovies(movieId);
            setMovieDetails(details);
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
                <Text style={styles.description}>{movieDetails.description}</Text>
                {/* Add more details as needed */}
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
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
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
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});
