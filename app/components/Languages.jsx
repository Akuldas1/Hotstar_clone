import { StyleSheet, Text, ScrollView, Image} from 'react-native'
import React from 'react'

const Languages = () => {
  return (
    <>
    <ScrollView horizontal={true}>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8'}}/>
     <Image style={styles.image} source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e'}}/>
    
    </ScrollView>
    </>
  )
}

export default Languages

const styles = StyleSheet.create({
    image:{
        height:50,
        width:100,
        borderRadius:3,
        margin:4
    }
})