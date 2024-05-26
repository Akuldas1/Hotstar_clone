
// // import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { StyleSheet, View } from 'react-native';
// // import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
// // import { useEffect } from 'react';
// // import * as Font from 'expo-font';
// // import Home from './screens/Home';
// // import MovieDetail from './screens/MovieDetail';
// // import Search from './screens/Search';
// // import Downloads from './screens/Downloads'
// // import Myspace from './screens/MySpace'
// // import NewsHot from './screens/NewsHot';


// // const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// // export default function App() {

// //   useEffect(()=>{

// //     const loadFontsAsync = async () => {
// //       try {
// //         await Font.loadAsync({
// //           'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
// //           'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf')
// //         });
// //         console.log('Fonts loaded successfully');
// //       } catch (error) {
// //         console.error('Error loading fonts:', error);
// //       }
// //     };
// //     loadFontsAsync();
// //   })

// //   return (
// //     <NavigationContainer independent={true}>
// //       <Tab.Navigator
// //         screenOptions={{
// //           tabBarActiveTintColor: 'white', 
// //           tabBarInactiveTintColor: 'gray', 
// //           tabBarStyle: { backgroundColor: 'black' }, 
// //         }}
// //       >
// //         <Tab.Screen
// //           name="Home"
// //           component={HomeStack}
// //           options={{
// //             tabBarIcon: ({ color, size }) => (
// //               <Entypo name="home" size={size} color={color} />
// //             ),
// //           }}
// //         />
// //         <Tab.Screen
// //           name="Search"
// //           component={Search}
// //           options={{
// //             tabBarIcon: ({ color, size }) => (
// //               <FontAwesome name="search" size={size} color={color} />
// //             ),
// //           }}
// //         />
// //         <Tab.Screen
// //           name="News & Hot"
// //           component={NewsHot}
// //           options={{
// //             tabBarIcon: ({ color, size }) => (
// //               <MaterialIcons name="whatshot" size={size} color={color} />
// //             ),
// //           }}
// //         />
// //         <Tab.Screen
// //           name="Downloads"
// //           component={Downloads}
// //           options={{
// //             tabBarIcon: ({ color, size }) => (
// //               <Octicons name="download" size={size} color={color} />
// //             ),
// //           }} 
// //         />
// //         <Tab.Screen
// //           name="MySpace"
// //           component={Myspace}
// //           options={{
// //             tabBarIcon: ({ color, size }) => (
// //               <Entypo name="user" size={size} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // const HomeStack = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
// //       <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
// //     </Stack.Navigator>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: 'black',
// //   },
// // });

// // import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { StyleSheet, View } from 'react-native';
// // import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
// // import React, { useEffect, useState } from 'react';
// // import { FavoritesProvider } from './components/FavoritesContext';
// // import FavoritesList from './screens/FavouritesList';
// // import * as Font from 'expo-font';
// // import Home from './screens/Home';
// // import MovieDetail from './screens/MovieDetail';
// // import Search from './screens/Search';
// // import Downloads from './screens/Downloads';
// // import Myspace from './screens/MySpace';
// // import NewsHot from './screens/NewsHot';

// // const Tab = createBottomTabNavigator();
// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   const [fontsLoaded, setFontsLoaded] = useState(false);

// //   useEffect(() => {
// //     const loadFontsAsync = async () => {
// //       try {
// //         await Font.loadAsync({
// //           'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
// //           'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
// //         });
// //         setFontsLoaded(true);
// //         console.log('Fonts loaded successfully');
// //       } catch (error) {
// //         console.error('Error loading fonts:', error);
// //       }
// //     };
// //     loadFontsAsync();
// //   }, []);

// //   if (!fontsLoaded) {
// //     return null; // Optionally, you can render a loading screen here
// //   }

// //   return (
// //     <FavoritesProvider>
// //       <NavigationContainer independent={true}>
// //         <Tab.Navigator
// //           screenOptions={{
// //             tabBarActiveTintColor: 'white',
// //             tabBarInactiveTintColor: 'gray',
// //             tabBarStyle: { backgroundColor: 'black' },
// //           }}
// //         >
// //           <Tab.Screen
// //             name="Home"
// //             component={HomeStack}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <Entypo name="home" size={size} color={color} />
// //               ),
// //               headerShown: false,
// //             }}
// //           />
// //           <Tab.Screen
// //             name="Search"
// //             component={Search}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <FontAwesome name="search" size={size} color={color} />
// //               ),
// //             }}
// //           />
// //           <Tab.Screen
// //             name="News & Hot"
// //             component={NewsHot}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <MaterialIcons name="whatshot" size={size} color={color} />
// //               ),
// //             }}
// //           />
// //           <Tab.Screen
// //             name="Downloads"
// //             component={Downloads}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <Octicons name="download" size={size} color={color} />
// //               ),
// //             }}
// //           />
// //           <Tab.Screen
// //             name="MySpace"
// //             component={Myspace}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <Entypo name="user" size={size} color={color} />
// //               ),
// //             }}
// //           />

// //           <Tab.Screen
// //             name="FAv"
// //             component={FavoritesList}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <Entypo name="user" size={size} color={color} />
// //               ),
// //             }}
// //           />
// //         </Tab.Navigator>
// //       </NavigationContainer>
// //     </FavoritesProvider>
// //   );
// // }

// // const HomeStack = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
// //       <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
// //     </Stack.Navigator>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: 'black',
// //   },
// // });

// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, View, Text } from 'react-native';
// import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
// import React, { useEffect, useState, useContext } from 'react';
// import { FavoritesProvider, FavoritesContext } from './components/FavoritesContext';
// import * as Font from 'expo-font';
// import FavoritesList from './screens/FavouritesList';
// import Home from './screens/Home';
// import MovieDetail from './screens/MovieDetail';
// import Search from './screens/Search';
// import Downloads from './screens/Downloads';
// import Myspace from './screens/MySpace';
// import NewsHot from './screens/NewsHot';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     const loadFontsAsync = async () => {
//       try {
//         await Font.loadAsync({
//           'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
//           'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
//         });
//         setFontsLoaded(true);
//         console.log('Fonts loaded successfully');
//       } catch (error) {
//         console.error('Error loading fonts:', error);
//       }
//     };
//     loadFontsAsync();
//   }, []);

//   if (!fontsLoaded) {
//     return null; // Optionally, you can render a loading screen here
//   }

//   return (
//     <FavoritesProvider>
//       <NavigationContainer independent={true}>
//         <MainTabs />
//       </NavigationContainer>
//     </FavoritesProvider>
//   );
// }

// const MainTabs = () => {
//   const { favoritesCount } = useContext(FavoritesContext);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: { backgroundColor: 'black' },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="home" size={size} color={color} />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="search" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="News & Hot"
//         component={NewsHot}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="whatshot" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Downloads"
//         component={Downloads}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="download" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="fav"
//         component={FavoritesList}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <View>
//               <Entypo name="user" size={size} color={color} />
//               {favoritesCount > 0 && (
//                 <View style={styles.badge}>
//                   <Text style={styles.badgeText}>{favoritesCount}</Text>
//                 </View>
//               )}
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

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
//   badge: {
//     position: 'absolute',
//     right: -6,
//     top: -3,
//     backgroundColor: 'red',
//     borderRadius: 6,
//     width: 12,
//     height: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
// });


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import { FavoritesProvider, FavoritesContext } from './components/FavoritesContext';
import * as Font from 'expo-font';
import FavoritesList from './screens/FavouritesList';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import Search from './screens/Search';
import Downloads from './screens/Downloads';
import Myspace from './screens/MySpace';
import NewsHot from './screens/NewsHot';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      try {
        await Font.loadAsync({
          'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
          'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        });
        setFontsLoaded(true);
        console.log('Fonts loaded successfully');
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null; // Optionally, you can render a loading screen here
  }

  const toastConfig = {
    success: ({ text1, text2, ...rest }) => (
      <View style={styles.successToast}>
        <Text style={styles.toastText}>{text1}</Text>
        {text2 ? <Text style={styles.toastSubText}>{text2}</Text> : null}
      </View>
    ),
    error: ({ text1, text2, ...rest }) => (
      <View style={styles.errorToast}>
        <Text style={styles.toastText}>{text1}</Text>
        {text2 ? <Text style={styles.toastSubText}>{text2}</Text> : null}
      </View>
    ),
  };
  

  return (
    <FavoritesProvider>
      <NavigationContainer independent={true}>
        <MainTabs />
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </FavoritesProvider>
  );
}

const MainTabs = () => {
  const { favoritesCount } = useContext(FavoritesContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false,
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
        name="My space"
        component={Downloads}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavoritesList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
            <AntDesign name="star" size={size} color={color} />
              {favoritesCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{favoritesCount}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  successToast: {
    height: 60,
    width: '60%',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorToast: {
    height: 60,
    width: '90%',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:"Inter-Bold"
  },
  toastSubText: {
    color: 'white',
    fontSize: 12,
  },
});
