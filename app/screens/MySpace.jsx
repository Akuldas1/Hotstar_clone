import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const MySpace = () => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>Login to Disney+ Hotstar</Text>
            <Text style={styles.desc}>Start Watchingfrom where u left off, personalise for kids and more</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MySpace

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: "black",
        height: "100%",
        alignItems: "center",

    },

    text: {
        color: "white",
        fontFamily: "Inter-Bold",
        fontSize: 20
    },
    desc: {
        color: "gray",
        textAlign: "center"
    },

    button: {
        backgroundColor: "blue",
        padding: 9,
        width: "40%",
        borderRadius: 10
    },

    btnText: {
        alignSelf: "center",
        fontFamily: "Inter-Bold",
    }

})