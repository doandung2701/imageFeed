import { StyleSheet,Text,View } from "react-native";
import React,{ Component } from "react";
export default function Avatar({size,backgroundColor,initials}){
    const style={
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    }
    return (
        <View style={[styles.container,style]}>
        <Text style={styles.text}>{initials}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white'
    }
})