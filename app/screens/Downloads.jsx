import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Downloads = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.download}>No Downloads Available</Text>
      <Text style={styles.desc}>Explore and download your favourite movies and shows to watch on the go</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Downloads

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:8,
   
    },

    download:{
        color:"white",
        fontFamily:"Inter-Bold",
        fontSize:20
    },

    desc:{
        color:"gray",
        textAlign:"center"
    },

    button:{
       backgroundColor:"white",
       padding:9,
       width:"80%",
       borderRadius:10
    },

    btnText:{
     alignSelf:"center",
     fontFamily:"Inter-Bold",
    }
})