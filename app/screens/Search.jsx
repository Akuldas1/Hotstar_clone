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
