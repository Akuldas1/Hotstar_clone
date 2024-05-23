import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Dimensions, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fetchMovies } from '../api/fetchMovies';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await fetchMovies("comedy");
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

    const { width } = Dimensions.get('window');
    const largeImageHeight = 300; // Height for images

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {movies.slice(0, 8).map((data) => (
                <View key={data.id} style={styles.movieItem}>
                    <TouchableOpacity onPress={() => navigateToMovieDetail(data)}>
                        <Image
                            style={[styles.image, { width: width, height: largeImageHeight }]}
                            source={{ uri: data.posterURL }}
                            onError={() => removeImage(data.id)}
                        />
                    </TouchableOpacity>
                    <Button
                        title="View Details"
                        onPress={() => navigateToMovieDetail(data)}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    movieItem: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
    }
});
