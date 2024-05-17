import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./app/components/Nav"
import Home from "./app/screens/Home"
import Movies from "./app/components/Movies";
export default function App() {
  return (
    <>
     <Home/>
     <Movies/>
     <Nav/>
    </>
  );
}