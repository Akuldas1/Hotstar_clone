import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SearchMovies from "../components/SearchMovies";
const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Movies, shows and more"
        value={query}
        onChangeText={setQuery}
      />
      <View>
        <SearchMovies query={query} genre="comedy" />
        <SearchMovies query={query} genre="horror" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Search;
