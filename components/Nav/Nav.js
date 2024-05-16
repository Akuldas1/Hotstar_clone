import { SafeAreaView, View, Text, StyleSheet, Image, Button } from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Nav() {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4221/1715673214221-i",
        }}
      />
      <View>
        <Button title="Watch now"/>
      </View>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 -960 960 960"
            width="21"
          >
            <Path
              fill="white"
              d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
            />
          </Svg>
          <Text style={styles.text}>Home</Text>
        </View>

        <View style={styles.nav}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 -960 960 960"
            width="21"
          >
            <Path
              fill="white"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </Svg>
          <Text style={styles.text}>Search</Text>
        </View>

        <View style={styles.nav}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 -960 960 960"
            width="21"
          >
            <Path
              fill="white"
              d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
            />
          </Svg>
          <Text style={styles.text}>Home</Text>
        </View>

        <View style={styles.nav}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 -960 960 960"
            width="21"
          >
            <Path
              fill="white"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </Svg>
          <Text style={styles.text}>Search</Text>
        </View>

        <View style={styles.nav}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 -960 960 960"
            width="21"
          >
            <Path
              fill="white"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </Svg>
          <Text style={styles.text}>Search</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    width: "auto",
    height: 200,
    paddingTop: 20,
  },
  button:{
    width:10,
    
  }
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  nav: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  text: {
    color: "white",
    width: "fit-content",
    alignItems: "baseline",
  },
});
