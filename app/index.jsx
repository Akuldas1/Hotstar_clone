
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './FavouritesContext/FavoritesContext';
import MainTabs from './Navigation/MainTabs';
import Toast from 'react-native-toast-message';
import * as Font from 'expo-font';

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

const styles = StyleSheet.create({
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