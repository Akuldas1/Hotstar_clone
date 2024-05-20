// import {
//     SafeAreaView,
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     Button,
// } from "react-native";
// import Movies from "../components/movies";

// export default function Home() {
//     return (
//         <>
//             <Image
//                 style={styles.image}
//                 source={{
//                     uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9660/1707127799660-i",
//                 }}
//             />

//             {/* <Image
//                 style={styles.title}
//                 source={{
//                     uri: "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7776/1707127807776-t",
//                 }}
//             /> */}
//             <View style={styles.home}>
//                 <View style={styles.content}>
//                     <Button style={styles.button} title="Watch now" />
//                     <Button style={styles.button} title="+" />
//                 </View>
//             </View>
//             <Movies/>
//         </>
//     );
// }

// const styles = StyleSheet.create({

//     image: {
//         flex: 0.4,
//     },

//     title: {
//        flex:0.1,
//        bottom:70,
//        objectFit:"contain"
//     },

//     home: {
//         flexDirection: "column",
//         justifyContent:"flex-start"
//     },

//     content: {
//         flexDirection: "row",
//         gap: 8,
//         justifyContent: "center",
//     },

//     button: {
//         width: "10",
//     },


// });


import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Movies from "../components/movies";
import SubButton from '../components/Button';
export default function Home({ navigation }) {
    return (
        <>
            <View style={styles.main}>
                <View style={styles.top}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: "",
                        }}
                    />
                    {/* <Button title='subscribe' className="bg-red-400 text-black"/> */}
                    <SubButton />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9660/1707127799660-i",
                        }}
                    />
                    <View style={styles.home} >
                        <View style={styles.content}>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap:8, padding:10 }} className="bg-slate-800/30">
                                <FontAwesome name="play" size={11} color="white" />
                                <Text className="text-white">Watch now</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap:4, padding:10 }} className="bg-slate-800/30">
                                <Text className="text-white">+</Text>
                            </TouchableOpacity>

                            {/* <Button style={styles.button} title="Watch now" />
                            <Button style={styles.button} title="+" /> */}
                        </View>
                    </View>
                    <View>
                        <Text className="text-white">Latest Releases</Text>
                        <Movies />
                    </View>
                    {/* <Button title='Detailed' className="bg-red-400 text-black"  onPress={() => navigation.navigate('MovieDetail',{
                         Movie: 1,
                         MovieName: 'Movie',
                    })}/> */}
                </View>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    logo: {
        width: 100,
        height: 50,
        objectFit: "contain"
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },
    home: {
        flexDirection: "column",
        justifyContent: "flex-start",
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
