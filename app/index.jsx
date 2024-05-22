
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
import Downloads from './screens/Downloads';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import * as Font from 'expo-font';
import MySpace from './screens/MySpace';

async function loadFonts() {
  await Font.loadAsync({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  });
}

loadFonts();


export default function App() {
  return (
    <>

      <NavigationContainer independent={true}>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
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
          <Tab.Screen name="Downloads" component={Downloads} />
          <Tab.Screen name="MySpace" component={MySpace} />
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

