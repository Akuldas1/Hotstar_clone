import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Movies from "../components/Movies";
import { useFavorites } from "../components/FavoritesContext";
import Toast from "react-native-toast-message";

export default function MovieDetail({ route, navigation }) {
  const { movie } = route.params;
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(movie);

  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(movie);
      Toast.show({
        type: "success",
        text1: "Removed from Favorites",
        position: "top",
      });
    } else {
      addToFavorites(movie);
      Toast.show({
        type: "success",
        text1: "Added to Favorites",
        position: "top",
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "column", gap: 5 }}>
        <Image
          style={styles.image}
          source={{ uri: movie.posterURL }}
          className="rounded-xl"
        />
        <TouchableOpacity onPress={toggleFavorite} className="fav">
          <AntDesign
            name="heart"
            size={24}
            color={favorite ? "yellow" : "gray"}
            style={styles.favicon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{movie.title}</Text>
        <Text
          className="text-gray-400"
          style={{ fontFamily: "Inter-Bold", alignSelf: "center" }}
        >
          2024 <Entypo name="dot-single" size={16} color="gray" /> 2h 36m{" "}
          <Entypo name="dot-single" size={16} color="gray" /> English{" "}
          <Entypo name="dot-single" size={16} color="gray" /> U/A 16+
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            padding: 10,
          }}
          className="bg-white rounded"
        >
          <FontAwesome name="play" size={11} color="black" />
          <Text className="text-black" style={{ fontFamily: "Inter-Bold" }}>
            Watch now
          </Text>
        </TouchableOpacity>
        <Text className="" style={styles.title}>
          Thriller | Intense | Crime | Action
        </Text>
        <Text className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam
          ipsum, magnam, maiores esse voluptatum obcaecati velit voluptate nemo
          magni aliquid ratione sint iure possimus impedit deleniti! Rerum, quae
          iste.
        </Text>
      </View>
      <View className="flex flex-row gap-10  mt-2">
        <View className="flex flex-col items-center">
          <AntDesign name="plus" size={24} color="white" />
          <Text className="text-gray-300">Watchlist</Text>
        </View>
        <View className="flex flex-col items-center">
          <Fontisto name="share-a" size={24} color="white" />
          <Text className="text-gray-300">Share</Text>
        </View>
        <View className="flex flex-col items-center">
          <Octicons name="download" size={24} color="white" />
          <Text className="text-gray-300">Download</Text>
        </View>
        <View className="flex flex-col items-center">
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={24}
            color="white"
          />
          <Text className="text-white">Rate</Text>
        </View>
      </View>
      <View className="mt-5">
        <Text
          className="text-white"
          style={{ fontFamily: "Inter-Bold", fontSize: 20, paddingLeft: 10 }}
        >
          More Like This
        </Text>
        <Movies />
      </View>
      <View className="mt-5">
        <Text className="text-white">Trailers & More</Text>
      </View>
      <View className="mt-5"></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
    gap: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  favicon: {
    position: "absolute",
    bottom: 170,
    left: 10,
  },
  title: {
    marginTop: 10,
    alignSelf: "center",
    color: "white",
    fontFamily: "Inter-Bold",
  },
});
