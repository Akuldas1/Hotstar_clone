import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const Genres = () => {
  return (
    <>
    <ScrollView horizontal={true}>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5267/1535267-a-3cae422b372e'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5302/1535302-a-e90748391e0d'}}/>
    </ScrollView>
    </>
  )
}

export default Genres

const styles = StyleSheet.create({
    image:{
        height:50,
        width:100,
        borderRadius:3,
        margin:4
    }
})