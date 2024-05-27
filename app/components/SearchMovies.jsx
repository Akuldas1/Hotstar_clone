import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchMovies } from '../api/fetchMovies';

export default function SearchMovies({ query, genre }) {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies(genre);
      setMovies(moviesData);
    };
    fetchData();
  }, [genre]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const navigateToMovieDetail = (movie) => {
    navigation.navigate('MovieDetail', { movie });
  };

  const removeImage = (id) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const { width } = Dimensions.get('window');
  const imageWidth = width / 3.39;
  const largeImageWidth = width;
  const largeImageHeight = 200;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filteredMovies.slice(0, 8).map((data, index) => (
        <TouchableOpacity
          key={data.id}
          style={[
            styles.movieItem,
            index === 0 || index === 4
              ? { width: largeImageWidth, height: largeImageHeight }
              : { width: imageWidth, height: imageWidth * 1.5 }
          ]}
          onPress={() => navigateToMovieDetail(data)}
        >
          <Image
            style={styles.image}
            source={{ uri: data.posterURL }}
            onError={() => removeImage(data.id)}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
  },
  movieItem: {
    margin: 3,
    padding: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
