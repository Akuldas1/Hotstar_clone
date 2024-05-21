
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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import Search from './screens/Search';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import the icons you want to use
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
   
    <NavigationContainer independent={true}>
      <Tab.Navigator  tabBarOptions={{
          activeTintColor: 'red', // Change the color for active tab icons
          inactiveTintColor: 'blue', // Change the color for inactive tab icons
       }}
       
       >
        <Tab.Screen name="Home" component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="News & Hot" component={Search} />
        <Tab.Screen name="Downloads" component={Search} />
        <Tab.Screen name="My Space" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
 
    </>
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

// const MovieDetailStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
