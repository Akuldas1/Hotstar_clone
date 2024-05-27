
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import { FavoritesProvider, FavoritesContext } from './components/FavouritesContext/FavoritesContext';
import * as Font from 'expo-font';
import FavoritesList from './Navigation/FavouritesList';
import Home from './Navigation/Home';
import MovieDetail from './screens/MovieDetail';
import Search from './Navigation/Search';
import Downloads from './Navigation/Downloads';
import Myspace from './Navigation/MySpace';
import NewsHot from './Navigation/NewsHot';
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
    return null;
  }

  const toastConfig = {
    success: ({ text1, text2, ...rest }) => (
      <View style={styles.successToast}>
        <Text style={styles.toastText}>{text1}</Text>
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
          headerShown:false,
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
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News & Hot"
        component={NewsHot}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="whatshot" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="download" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="My space"
        component={Myspace}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavoritesList}
        options={{
          headerShown:false,
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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  toastText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:"Inter-Bold"
  },
});
