// import { StyleSheet, Text, View } from 'react-native';
// import { Link } from 'expo-router';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text className="text-white">Welcome</Text>
//       <Link href="screens/Home" className="text-white">Home</Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'black',
//   },
// });

// App.js

// App.js

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/Home';
// import MovieDetail from './screens/MovieDetail';
// import { Link } from 'expo-router';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
// <Stack.Screen name="MovieDetail" component={MovieDetail} options={{headerShown:false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
// });

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, View } from 'react-native';
// import Home from './screens/Home';
// import MovieDetail from './screens/MovieDetail';
// import Search from './screens/Search';
// import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import the icons you want to use
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <>
   
//     <NavigationContainer independent={true}>
//       <Tab.Navigator  tabBarOptions={{
//           activeTintColor: 'red', // Change the color for active tab icons
//           inactiveTintColor: 'blue', // Change the color for inactive tab icons
//        }}
       
//        >
//         <Tab.Screen name="Home" component={HomeStack}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Entypo name="home" size={size} color={color} />
//             ),
//           }} />
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="News & Hot" component={Search} />
//         <Tab.Screen name="Downloads" component={Search} />
//         <Tab.Screen name="My Space" component={Search} />
//       </Tab.Navigator>
//     </NavigationContainer>
 
//     </>
//   );
// }

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
// });

// const MovieDetailStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// };

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import Search from './screens/Search';
import Downloads from './screens/Downloads'
import Myspace from './screens/MySpace'
import { AntDesign, Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'; // Import the icons you want to use
import NewsHot from './screens/NewsHot';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'black',
//   },
// };

export default function App() {
  return (
    <NavigationContainer  independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white', // Change the color for active tab icons
          tabBarInactiveTintColor: 'gray', // Change the color for inactive tab icons
          tabBarStyle: { backgroundColor: 'black' }, // Change the tab bar background color
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="News & Hot"
          component={NewsHot}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="whatshot" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="download" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MySpace"
          component={Myspace}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

// import React from 'react'
// import {
//     View,
//     StyleSheet,
//     Image,
// } from "react-native";
// import { fetchMovies } from '../api/fetchMovies'
// import { useState, useEffect } from 'react'


// export default function Movies() {
//     const [movies, setMovies] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const movies = fetchMovies("horror")
//             setMovies(movies)
//         }
//         fetchData();
//     })

//     return (
//         <>
//             <View>
//                 {
//                     movies.map((data) => {
//                         <View key={data.id} style={styles.image}>
//                         <Image source={data.posterURL}/>
//                         </View>
//                     })
//                 }
//             </View>
//         </>
//     )
// }

// const styles= StyleSheet.create({
//     image:{
//         flex:0.5
//     }
// })


// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
// import { fetchMovies } from '../api/fetchMovies';

// export default function Movies() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const moviesData = await fetchMovies("horror");
//             console.log(moviesData); // Log fetched data
//             setMovies(moviesData);
//         };
//         fetchData();
//     }, []);

//     return (

//         <View style={styles.container}>

//             <ScrollView horizontal={true}>
//                 {movies.map((data) => (
//                     <View key={data.id} style={styles.movieItem}>
//                         <Image
//                             style={styles.image}
//                             source={{ uri: data.posterURL }}
//                         />
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//     },
//     movieItem: {
//         margin: 10,
//         width: 150,
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     },

// });

