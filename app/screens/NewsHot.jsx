import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fetchMovies } from '../api/fetchMovies';
import { FontAwesome } from "@expo/vector-icons";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await fetchMovies("western");
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
        <ScrollView>
            <View style={styles.container}>
                {movies.slice(0, 8).map((data) => (
                    <View style={{ backgroundColor: "gray" }}>
                        <TouchableOpacity key={data.id} style={styles.movieItem}>
                            <Image
                                style={styles.image}
                                source={{ uri: data.posterURL }}
                                onError={() => removeImage(data.id)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 8,
                                padding: 10,
                            }}
                            className="bg-white rounded"
                            onPress={() => navigateToMovieDetail(data)}
                        >

                            <FontAwesome name="play" size={11} color="black" />
                            <Text className="text-black" style={{ fontFamily: "Inter-Bold" }}>
                                Watch now
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 40,
        backgroundColor: "black"
    },
    movieItem: {
        margin: 4,
        width: "100%",
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 4
    },
    title: {
        // fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 10,
        alignSelf: "center",
        color: "white",
        fontFamily: "Inter-Bold",
    },
});

