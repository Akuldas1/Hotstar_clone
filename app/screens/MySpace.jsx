import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MySpace = () => {
  return (
    <>
      <LinearGradient
        colors={['#4e6cef', 'black', 'black', 'black']}
        locations={[0, 0.25, 0.45, 1]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png" }} />
          <Text style={styles.text}>Login to Disney+ Hotstar</Text>
          <Text style={styles.desc}>Start Watching from where you left off, personalize for kids and more</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.bottomContent}>
            <Text style={styles.desc}>Having Trouble logging in?</Text>
            <Text>Get Help</Text>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default MySpace;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    height: '100%',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginTop: 20,
  },
  desc: {
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 9,
    width: '40%',
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    alignSelf: 'center',
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
  bottomContent: {
    marginTop: 20,
    alignItems: 'center',
  },
});
