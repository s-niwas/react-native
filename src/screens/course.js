import React from "react";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default class Course extends React.Component{
  render(){
    const {img,title,bg,onPress,description}=this.props
    return(
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection:'row',
        backgroundColor:bg,
        padding:20,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
        marginTop:10,}}
      >
        <Image source={img}
        style={{width:40,height:40}}></Image>
        <View>
          <Text style={{color:"#3D5CFF",
          fontSize:13,
          paddingHorizontal:20,
          width:170,
          fontFamily:"Bold",}}>{title}</Text>
          <Text style={{
            color:"#f57509",
          fontSize:12,
          paddingHorizontal:20,
          }}>{description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}