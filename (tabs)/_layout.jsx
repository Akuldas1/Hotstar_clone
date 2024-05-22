import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Slot, Stack, Tabs } from 'expo-router';
export default function Root_layout() {
  return (
  <Tabs>
    <Tabs.Screen name="Home"/>
  </Tabs>
  );
}
