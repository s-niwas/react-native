import React from "react";
import { StyleSheet, Text, View ,Pressable} from "react-native";

const CustButton=({onPressing,text,type="PRIMARY"})=>{
    return(
        <Pressable onPress={onPressing} style={[styles.container,styles[`container_${type}`]]}>
            <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}
export default CustButton;

const styles=StyleSheet.create({
    container:{
        width:"89%",
        marginVertical:5,
        alignItems:'center',
        borderRadius:10,
    },
    container_PRIMARY:{
        padding:15,
        backgroundColor:"#3D5CFF",
    },
    container_TERTIARY:{
        textAlign:'right',
        alignItems:'flex-end'
    },
    text:{
        color:"#ffffff",
        fontWeight:"bold"
    },
    text_TERTIARY:{
        color:"#858597",
        textAlign:'right',
    },
})