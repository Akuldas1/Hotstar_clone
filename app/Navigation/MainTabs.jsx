import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet} from 'react-native';
import FavoritesList from '../screens/FavouritesList';
import HomeStack from './HomeStack';
import Search from '../screens/Search';
import Downloads from '../screens/Downloads';
import Myspace from '../screens/MySpace';
import NewsHot from '../screens/NewsHot';
import { FavoritesContext } from '../FavouritesContext/FavoritesContext';

const Tab = createBottomTabNavigator();

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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News & Hot"
        component={NewsHot}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="whatshot" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My space"
        component={Myspace}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavoritesList}
        options={{
          headerShown: false,
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


const styles = StyleSheet.create({
   
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
    }
  });

export default MainTabs
