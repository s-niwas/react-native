import React, { useState } from "react";
import { Text, View , StyleSheet, Touchable, TouchableOpacity} from "react-native";
import { TextInput } from 'react-native-paper';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Icon } from "@edvnz/native-icons"

const ValueInput=({value,setvalue,placeholder,texts,secureTextEntry,icons=false})=>{
    const[visibility,setVisibility]=useState(secureTextEntry);
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{texts}</Text>
                {icons==true ?( 
                    <TextInput
                value={value}
                onChangeText={setvalue}
                placeholder={placeholder} 
                secureTextEntry={visibility}
                mode="outlined"
                theme={{colors:{background:'#fff'}}}
                right=
                {
                    <TextInput.Icon
                    icon= {visibility?"eye":"eye-off"}
                    color="black"
                    onPress={()=>setVisibility(!visibility)}/>
                }
                />) :(<TextInput 
                value={value}
                mode="outlined"
                onChangeText={setvalue}
                placeholder={placeholder} 
                secureTextEntry={visibility}
                theme={{colors:{background:'#fff'}}}
                />)}    
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginVertical:10,
        width:"100%"
    },
    header:{
        color:"#858597",
        fontSize:14,
        lineHeight:21,
        fontFamily:"Poppins", 
    },
})
export default ValueInput;