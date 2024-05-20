import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, router, useLocalSearchParams } from 'expo-router';

export default function Home() {
 
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Link href="/users/1">Goto user 1</Link>

      <Pressable onPress={() => router.push("/users/2")}>   {/*used when form on submit */}
        <Text>Goto user 2</Text>
      </Pressable>

      <Pressable onPress={() => router.push({
        pathname: "/users/[id]",
        params: { id: 3 }
      })}>
        <Text>Goto user 3</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
