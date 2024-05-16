import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Movies from "./components/Movies/Movies";
export default function App() {
  return (
    <>
     <Home/>
     <Movies/>
     <Nav/>
    </>
  );
}
{/* <View
style={{
  flexDirection: "column",
  flex:1,
  justifyContent: "space-evenly",
  alignItems:"center",
}}
>
<View
  style={{
    backgroundColor: "blue",
    height: 100,
    width: 100,
    alignSelf:"flex-start"
  }}
/>

<View
  style={{
    backgroundColor: "red",
    height: 100,
    width: 100,
  }}
/>

<View
  style={{
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf:"flex-end",
  }}
/>
</View> */}