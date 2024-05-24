import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Downloads = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png",
        }}
      />
      <Text style={styles.download}>Login to Disney+ Hotstar</Text>
      <Text style={styles.desc}>
        Start Watching Where you left off, personalise for kids and more
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.desc}>Having Trouble logging in?</Text>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  image: {
    resizeMode: "contain",
    height: 200,
    width: 200,
  },

  download: {
    color: "white",
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },

  desc: {
    color: "gray",
    textAlign: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 9,
    width: "40%",
    borderRadius: 10,
  },

  btnText: {
    alignSelf: "center",
    fontFamily: "Inter-Bold",
  },
});
