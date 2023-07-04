import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ValueInput from "../components/CustInput/valueInput";
import CustButton from "../components/CustButton/CustButton";

const SignInScreen=()=>{
    const {height}=useWindowDimensions();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const onSignInClick=()=>{
        console.warn('sign in');
    }
    const onForgetPasswordClick=()=>{
        console.warn('Forget Password');
    }
    const onsignupclicking=()=>{
        console.warn('Redirecting to sign up')
    }
    const onsigninwithgoogle=()=>{
        console.warn('Redirecting to google sign in')
    }
    const onsigninwithfacebook=()=>{
        console.warn('Redirecting to facebook sign in')
    }
    return(
        <View style={styles.root}>
            <View style={styles.signin_top}>
                    <Text style={styles.signin_header}>Log In</Text>
            </View>
        <ValueInput placeholder="Email" value={email} setvalue={setEmail} texts={"Your Email"} secureTextEntry={false}/>
        <ValueInput placeholder="Password" value={password} setvalue={setPassword} texts={"Password"} secureTextEntry={true}/>
        <CustButton text="Forget password?" onPressing={onForgetPasswordClick} type="TERTIARY"/>
        <CustButton text="Sign In" onPressing={onSignInClick} />
            <View style={{margin:10 }}>
                    <Text >Don't have an account?
                    <Text  style={{color: "#3D5CFF"}} onPress={onsignupclicking}> Sign up</Text>
                    </Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
                <View style={{flex:1,height:1,backgroundColor:"#B8B8D2",marginHorizontal:10}} />
                <Text style={{fontSize:14}}>Or login with</Text>
                <View style={{flex:1,height:1,backgroundColor:"#B8B8D2",marginHorizontal:10}} />
            </View>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
        <Pressable onPress={onsigninwithgoogle}>
        <Image   source={require("./google.png")}
          style={{ width: 58, height: 58, borderRadius:33}}
        />
        </Pressable>
        <Text>          </Text>
        <Pressable onPress={onsigninwithfacebook}>
        <Image  source={require("./fb_logo.png")}
          style={{ width: 60, height: 60, borderRadius:60/2}}
        />
        </Pressable>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        height:"100%",
        width:"100%",
    },
   
    signin_top:{
        width:"100%",
        backgroundColor:"#B8B8D2",
        height:"20%",
        textAlign:'left',
        justifyContent:'flex-end',
        padding:10,
    },
    signin_header:{
        width:96,
        height:48,
        fontFamily:"Poppins",
        fontSize:32,
        lineHeight:48,
        color:"#1F1F39",
        fontWeight:'700',
        marginBottom:10   
    },
    button:
    {   
        
    }
})
export default SignInScreen;