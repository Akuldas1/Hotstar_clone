import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { FavoritesContext } from '../components/FavoritesContext'; // Adjust the import path

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.posterURL }} style={styles.image} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  movieItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieTitle: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default FavoritesList;
