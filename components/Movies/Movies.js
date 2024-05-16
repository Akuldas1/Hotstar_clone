import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Movies() {
  return (
    <>
    <Text>Latest Release</Text>
    
      <View style={styles.movieContainer}>
        <Image
          style={styles.moviesImg}
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9792/1714983119792-v",
          }}
        />
        <Image
          style={styles.moviesImg}
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/138/1714406940138-v",
          }}
        />
        <Image
          style={styles.moviesImg}
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9792/1714983119792-v",
          }}
        />
      </View>

      <Text>Best in Sports</Text>
    
    <View style={styles.movieContainer}>
      <Image
        style={styles.moviesImg}
        source={{
          uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9792/1714983119792-v",
        }}
      />
      <Image
        style={styles.moviesImg}
        source={{
          uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/138/1714406940138-v",
        }}
      />
      <Image
        style={styles.moviesImg}
        source={{
          uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9792/1714983119792-v",
        }}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  movieContainer: {
    flex:0.5,
    flexDirection:"row",
  },

  moviesImg: {
    flex:1,
    overflow:"visible"
  },
});
