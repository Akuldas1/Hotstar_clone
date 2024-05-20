import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Slot, Stack } from 'expo-router';

export default function Root_layout() {
  return (
  //  <Slot/>
  <Stack>
  <Stack.Screen name='index' options={{headerShown:false}} />
  </Stack>
  // <Stack>
  //   <Stack.Screen name="(tabs)"/>
  // </Stack>
  );
}
