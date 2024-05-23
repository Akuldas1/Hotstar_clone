import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import Entypo from "@expo/vector-icons/Entypo";

// showsButtons={true}
const Carousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      autoplay={true}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8730/1707996958730-i",
          }}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        />
        <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/8973/1707996938973-t",
          }}
          style={styles.logo}
        />
        <Text
          style={{
            zIndex: 1,
            position: "relative",
            bottom: 20,
            color: "white",
            fontFamily: "Inter-Bold",
          }}
        >
          Hindi <Entypo name="dot-single" size={16} color="white" />
          Crime <Entypo name="dot-single" size={16} color="white" />
          Thriller <Entypo name="dot-single" size={16} color="white" />
          Intense
        </Text>
      </View>


      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3779/1553779-i-ed41b6853d74",
          }}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        />
        <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3778/1553778-t-9584a7acbe41",
          }}
          style={styles.logo}
        />

        <Text
          style={{
            zIndex: 1,
            position: "relative",
            bottom: 20,
            color: "white",
            fontFamily: "Inter-Bold",
          }}
        >
          Hindi <Entypo name="dot-single" size={16} color="white" />
          Crime <Entypo name="dot-single" size={16} color="white" />
          Thriller <Entypo name="dot-single" size={16} color="white" />
          Intense
        </Text>
      </View>


      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9020/1379020-i-d0651a139485",
          }}
          style={styles.image}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        />
          <Image
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/3341/1413341-t-8da8a45c1c89",
          }}
          style={styles.logo}
        />

        <Text
          style={{
            zIndex: 1,
            position: "relative",
            bottom: 20,
            color: "white",
            fontFamily: "Inter-Bold",
          }}
        >
          Mythology <Entypo name="dot-single" size={16} color="white" />
          Historical <Entypo name="dot-single" size={16} color="white" />
          Family <Entypo name="dot-single" size={16} color="white" />
          Betrayal
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",

  },
  activeDot: {
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logo: {
    position: "absolute",
    height: 100,
    width: 200,
    top: 170,
    zIndex: 10,
    resizeMode: "contain"
  },
  pagination: {
    position: "absolute",
    bottom: -80,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
});

export default Carousel;

