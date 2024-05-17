import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";

export default function Home() {
  return (
    <>
        <Image
          style={styles.image}
          source={{
            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4221/1715673214221-i",
          }}
        />
      <View style={styles.home}>
        <Text>Tamil 5Languages</Text>
        <View style={styles.content}>
          <Button style={styles.button} title="Watch now" />
          <Button style={styles.button} title="+" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  home:{
   flexDirection:"column",
   alignSelf:"center"
  },

  image:{
    flex: 4,
  },

  button: {
    width: "10",
  },

  content: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
});
