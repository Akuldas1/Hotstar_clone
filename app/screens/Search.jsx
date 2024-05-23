import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Movies from '../components/movies';
import Movies2 from '../components/movies2';

const Search = () => {
  // const [text, setText] = useState('');

  // const onChangeText = (inputText) => {
  //   setText(inputText);
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
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
