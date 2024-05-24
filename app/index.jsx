
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import Search from './screens/Search';
import Downloads from './screens/Downloads'
import Myspace from './screens/MySpace'
import NewsHot from './screens/NewsHot';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(()=>{

    const loadFontsAsync = async () => {
      try {
        await Font.loadAsync({
          'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
          'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf')
        });
        console.log('Fonts loaded successfully');
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };
    loadFontsAsync();
  })

  return (
    <NavigationContainer independent={true}>
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

