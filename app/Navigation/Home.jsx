import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Movies from "../components/Movies";
import Movie from "../components/Movie";
import SubButton from "../components/Button";
import Universe from "../components/Universe";
import Carousel from "../components/Carousel";
import Languages from "../components/Languages";
import Genres from "../components/Genres";

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView style={styles.main}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg",
            }}
          />
          <SubButton />
        </View>
        <View>
          <Carousel />
          <View style={styles.home}>
            <View style={styles.content}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent:"center",
                  alignItems: "center",
                  gap: 8,
                  padding: 10,
                  width:150,
                  borderRadius:4
                }}
                className="bg-slate-800/30"
              >
                <FontAwesome name="play" size={11} color="white" />
                <Text
                  className="text-white"
                  style={{ fontFamily: "Inter-Regular" }}
                >
                  Watch now
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"center",
                  gap: 4,
                  padding: 10,
                  width:40,
                  borderRadius:4
                }}
                className="bg-slate-800/30"
              >
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
          <View>
            <Text
              className="text-white mt-5"
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 20,
              }}
            >
              Latest Releases
            </Text>
            <Movies />
            <Text
              className="text-white mt-5"
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 20,
              }}
            >
             Newly Added
            </Text>
            <Movie/>
            <Universe />
            <Text
              className="text-white mt-5"
              style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 20,
                }}
            >
              Popular Languages
            </Text>
            <Languages />
            <Text
              className="text-white mt-5"
              style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 20,
                }}
            >
              Popular Genres
            </Text>
            <Genres />   
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
  },
  top: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    zIndex:10
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  home: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  content: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  button: {
    width: 100,
  },
});
