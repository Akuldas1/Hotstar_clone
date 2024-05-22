
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
// showsButtons={true}
const Carousel = () => {
  return (
    <Swiper style={styles.wrapper}  autoplay={true} paginationStyle={styles.pagination}>
      <View style={styles.slide}>
        <Image source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1791/1611791-i-3b22c4f693bd'}} style={styles.image} />
        <Text style={{zIndex:1,backgroundColor:"red"}}>vikram</Text>
      </View>
      <View style={styles.slide}>
        <Image source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3779/1553779-i-ed41b6853d74'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9020/1379020-i-d0651a139485'}} style={styles.image} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height:300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
//   pagination: {
//     bottom: 0, // Adjust the bottom position as needed
//   },
});

export default Carousel;
