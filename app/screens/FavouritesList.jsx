// import React, { useContext } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { FavoritesContext } from '../components/FavoritesContext';

// const FavoritesList = () => {
//   const { favorites, removeFromFavorites } = useContext(FavoritesContext);

//   const renderFavoriteIcon = (movie) => {
//     return (
//       <TouchableOpacity onPress={() => removeFromFavorites(movie)} style={styles.favoriteIcon}>
//         <AntDesign name="heart" size={24} color="yellow" />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Favorites</Text>
//       <FlatList
//         horizontal
//         data={favorites}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.movieItem}>
//             <Image source={{ uri: item.posterURL }} style={styles.image} />
//             {renderFavoriteIcon(item)}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'black',
//   },
//   title: {
//     fontSize: 24,
//     color: 'white',
//     fontFamily: 'Inter-Bold',
//   },
//   movieItem: {
//     marginRight: 10,
//     marginTop:10
//   },
//   image: {
//     width: 150,
//     height: 200,
//     borderRadius: 10,
//   },
//   favoriteIcon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//   },
// });

// export default FavoritesList;

import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../components/FavoritesContext';
import { useNavigation } from '@react-navigation/native';

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const navigation = useNavigation(); 


  const renderFavoriteIcon = (movie) => {
    return (
      <TouchableOpacity onPress={() => removeFromFavorites(movie)} style={styles.favoriteIcon}>
        <AntDesign name="heart" size={24} color="yellow" />
      </TouchableOpacity>
    );
  };


  const navigateToMovieDetail = (movie) => {
    navigation.navigate('MovieDetail', { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        vertical
        contentContainerStyle={styles.flatListContent}
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToMovieDetail(item)} style={styles.movie}>
            <Image source={{ uri: item.posterURL }} style={styles.image} />
            {renderFavoriteIcon(item)}
          </TouchableOpacity>
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
    gap: 15,
  },

  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Inter-Bold',
  },

  flatListContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 23
  },

  movie:{
    marginLeft:5
  },

  image: {
    width: 168,
    height: 230,
    borderRadius: 10,
  },

  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  }
});

export default FavoritesList;
