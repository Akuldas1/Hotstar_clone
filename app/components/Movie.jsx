import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { fetchMovies } from '../api/fetchMovies';

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation(); 

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await fetchMovies("classic");
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

