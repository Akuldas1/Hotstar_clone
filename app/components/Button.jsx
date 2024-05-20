import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Subscribe</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'gold',
    fontSize: 12,
    fontWeight:"bold"
  },
});

export default SubButton;
