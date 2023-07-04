import React, { useState } from "react";
import { StyleSheet, Image ,Text, View, useWindowDimensions, Button, TouchableOpacity } from "react-native"
import SignInScreen from "../src/screens/signinscreen";
import slide from "./slide";


export default OnboardingItem = ({item})=>{
   const {width}=useWindowDimensions();
   const ref = React.useRef();
   const[idd,setid]=useState(0);
const skippingpress=()=>{
    const lastIndex=slide.length-1;
    const offset = lastIndex * width;
    //ref?.current.scrollToOffset({offset});
    setid(1);
};
const signinpage=()=>{<SignInScreen/>}
   
    return(
        <View style={[styles.container,{width}]}>
            
            {item.skip=="Skip" ? <Text style={styles.skip} onPress={skippingpress} >{item.skip}+{idd}</Text> : null}
            {item.id==3 ? ()=>{setid(true)}:null}
            <Image source={item.image} style={[styles.image]}/>
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.buttons}>
                {item.id==3 ? <TouchableOpacity onPress={signinpage} style={styles.signup1} ><Text style={styles.signup2}>Sign Up </Text></TouchableOpacity> :<Text>{"\n\n\n\n"}</Text>}
                <Text>  </Text>
                {item.id==3 ? <TouchableOpacity onPress={signinpage} style={styles.signin1} ><Text style={styles.signin2}>Log in </Text></TouchableOpacity> :<Text>{"\n\n\n\n"}</Text>}
                 </View>
            </View> 
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:25,
        marginHorizontal:30,
        letterSpacing:20,
        
    },
    signup1:{
    backgroundColor: "#3D5CFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:160,
    },
    signup2:{
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    },
    signin1:{
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor:"#3D5CFF",
        borderWidth: 1,
        width:160,
    },
    signin2:{
        fontSize: 18,
        color: "#3D5CFF",
        alignSelf: "center",
    },
    image:{
        
        justifyContent:'center' ,
        width:260,
        height:260,
        alignItems:'center',
        margin:50
    },
    skip:{
        fontSize:20,
        color:"#858597",
        alignItems:'flex-end',
        // textAlign:'justify',
        justifyContent:'flex-end',
        alignContent:'flex-end',
        fontFamily:'Poppins',
        paddingLeft:330,
    },
    title:{
        fontWeight:'800',
        fontSize:22,
        marginBottom:10,
        color:'#000000',
        textAlign:'center',
        lineHeight:33,
        fontFamily:'Poppins',
        justifyContent:'center',
        alignItems:'center',
    },
    description:{
        fontWeight:'300',
        color:'#858597',
        textAlign:'center',
        paddingHorizontal:'auto',
        fontFamily:'Poppins',
        fontSize:16,
        lineHeight:24,
        //width:'70%',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
    },
});