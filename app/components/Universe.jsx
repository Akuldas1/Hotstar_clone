import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Universe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/images/disneyog.webp')}/>
        <Image style={styles.image} source={require('../../assets/images/hotstar.png')}/>
        <Image style={styles.image} source={require('../../assets/images/marvel.webp')}/>
      </View>
  
  
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../assets/images/ng.png')}/>
        <Image style={styles.image} source={require('../../assets/images/pixar.jpeg')}/>
        <Image style={styles.image} source={require('../../assets/images/starwars.jpeg')}/>
      </View>
    </View>
  )
}

export default Universe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap:3,
    marginBottom: 5, 
  },
  image: {
    height: 70,
    width:"33.3%" 
  },
})
