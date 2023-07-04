import React from "react";
import {View,Image, StyleSheet, StatusBar} from "react-native";
import Onboarding from "./layouts/Onboarding";
import SignInScreen from "./src/screens/signinscreen";
export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          {/* <Onboarding/>
          <StatusBar/> */}
          <SignInScreen/>
      </View> 
    )
  }
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
    //alignItems:'center',
    //justifyContent:'center',
    width:"100%",
    height:"100%",
  },
})
