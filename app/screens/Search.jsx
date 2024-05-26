import { View, TextInput, StyleSheet } from 'react-native';
import Movies2 from '../components/SearchMovies';

const Search = () => {
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Movies, shows and more"
      />
      <View>
      <Movies2/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor:"black"
  },
  input: {
    height: 40,
    width: "full",
    backgroundColor:"white",
    borderRadius:10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Search;

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
// import { fetchMovies } from '../api/fetchMovies'; // Import the fetchMovies function

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       const movies = await fetchMovies(); // Fetch all movies
//       const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
//       setSearchResults(filteredMovies);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setSearchResults([]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search for a movie"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         onSubmitEditing={handleSearch}
//       />
//       <FlatList
//         data={searchResults}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text>{item.title}</Text>
//           // Render your movie item here, adjust as needed
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
//   input: {
//     height: 40,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
// });

// export default Search;
